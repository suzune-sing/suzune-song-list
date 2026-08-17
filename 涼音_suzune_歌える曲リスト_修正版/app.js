let activeMajor = null;
const state = { query: "" };

function itemSongCount(item){
  if(item.songs) return item.songs.length;
  if(item.subcategories) return item.subcategories.reduce((n,c)=>n+countCategory(c),0);
  return 0;
}
function countCategory(category){
  return category.items.reduce((n,i)=>n+itemSongCount(i),0);
}
function allSongsInMajor(major){
  const out=[];
  function walkCat(cat){
    cat.items.forEach(item=>{
      if(item.songs) out.push(...item.songs);
      if(item.subcategories) item.subcategories.forEach(walkCat);
    });
  }
  major.categories.forEach(walkCat);
  return out;
}
function countMajor(major){ return allSongsInMajor(major).length; }

function normalize(s){
  return String(s ?? "").toLocaleLowerCase("ja-JP").normalize("NFKC");
}
function matches(song, major, category, item){
  if(!state.query) return true;
  const q=normalize(state.query);
  return [
    song.title, major.name, category.name, item.name,
    song.genre, song.season, song.work, song.status
  ].filter(Boolean).some(v=>normalize(v).includes(q));
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}
function highlight(text){
  const raw=String(text);
  if(!state.query) return escapeHtml(raw);
  const q=state.query, idx=normalize(raw).indexOf(normalize(q));
  if(idx<0) return escapeHtml(raw);
  return escapeHtml(raw.slice(0,idx))+"<mark>"+escapeHtml(raw.slice(idx,idx+q.length))+"</mark>"+escapeHtml(raw.slice(idx+q.length));
}

function renderTabs(){
  const el=document.querySelector("#categoryTabs");
  el.innerHTML=SONG_DATA.map((m,i)=>
    `<button type="button" class="${m===activeMajor?'active':''}" data-i="${i}">
      ${escapeHtml(m.name)} <small>(${countMajor(m)}曲)</small>
    </button>`
  ).join("");
  el.querySelectorAll("button").forEach(b=>{
    b.addEventListener("click",()=>{
      activeMajor=SONG_DATA[Number(b.dataset.i)];
      state.query="";
      document.querySelector("#searchInput").value="";
      render();
      window.scrollTo({top:0,behavior:"smooth"});
    });
  });
}

function renderSongList(songs, major, category, item){
  return `<ul class="song-list">${
    songs.map(song=>`<li>${highlight(song.title)}</li>`).join("")
  }</ul>`;
}

function categoryHasMatch(category, major){
  if(!state.query) return true;
  return category.items.some(item=>{
    if(item.songs) return item.songs.some(s=>matches(s,major,category,item));
    if(item.subcategories){
      return item.subcategories.some(sub=>
        sub.items.some(si=>si.songs && si.songs.some(s=>matches(s,major,sub,si)))
      );
    }
    return false;
  });
}

function render(){
  if(!activeMajor) activeMajor=SONG_DATA[0];
  renderTabs();

  const area=document.querySelector("#songArea");
  const q=state.query;
  let totalMatches=0;

  let html=`<div class="major-title">${escapeHtml(activeMajor.name)}
    <span class="count">(${countMajor(activeMajor)}曲)</span>
  </div>`;

  activeMajor.categories.forEach(cat=>{
    if(!categoryHasMatch(cat,activeMajor)) return;

    const catCount=q
      ? cat.items.reduce((n,item)=>{
          if(item.songs) return n+item.songs.filter(s=>matches(s,activeMajor,cat,item)).length;
          if(item.subcategories) return n+item.subcategories.reduce((nn,sub)=>
            nn+sub.items.reduce((nnn,si)=>nnn+(si.songs?si.songs.filter(s=>matches(s,activeMajor,sub,si)).length:0),0),0);
          return n;
        },0)
      : countCategory(cat);

    html+=`<details>
      <summary>〖${escapeHtml(cat.name)}〗 <span class="count">(${catCount})</span></summary>
      <div class="subcategory">`;

    cat.items.forEach(item=>{
      if(item.songs){
        const songs=item.songs.filter(s=>matches(s,activeMajor,cat,item));
        if(q && !songs.length) return;
        totalMatches+=songs.length;

        if(cat.directSongs){
          html+=renderSongList(songs,activeMajor,cat,item);
        }else{
          html+=`<details class="small">
            <summary>【${escapeHtml(item.name)}】 <span class="count">(${songs.length})</span></summary>
            ${renderSongList(songs,activeMajor,cat,item)}
          </details>`;
        }
      }else if(item.subcategories){
        if(q){
          const has=item.subcategories.some(sub=>
            sub.items.some(si=>si.songs?.some(s=>matches(s,activeMajor,sub,si)))
          );
          if(!has) return;
        }
        html+=`<details class="small">
          <summary>【${escapeHtml(item.name)}】 <span class="count">(${itemSongCount(item)})</span></summary>`;
        item.subcategories.forEach(sub=>{
          const songs=sub.items.flatMap(si=>si.songs||[]).filter(s=>matches(s,activeMajor,sub,sub.items[0]));
          if(q && !songs.length) return;
          totalMatches+=songs.length;
          html+=`<details>
            <summary>〖${escapeHtml(sub.name)}〗 <span class="count">(${songs.length})</span></summary>
            <div class="subcategory">`;
          sub.items.forEach(si=>{
            const siSongs=(si.songs||[]).filter(s=>matches(s,activeMajor,sub,si));
            if(q && !siSongs.length) return;
            totalMatches += 0; // counted above
            html+=renderSongList(siSongs,activeMajor,sub,si);
          });
          html+=`</div></details>`;
        });
        html+=`</details>`;
      }
    });
    html+=`</div></details>`;
  });

  if(q && !totalMatches){
    html+=`<div class="empty">「${escapeHtml(q)}」に一致する曲はありませんでした。</div>`;
  }
  area.innerHTML=html;
  document.querySelector("#resultInfo").textContent=q
    ? `${totalMatches}曲が見つかりました（曲名・分類名などを検索）`
    : "";
}

document.querySelector("#searchInput").addEventListener("input",e=>{
  state.query=e.target.value.trim();
  render();
});
document.querySelector("#clearSearch").addEventListener("click",()=>{
  state.query="";
  document.querySelector("#searchInput").value="";
  render();
  document.querySelector("#searchInput").focus();
});
document.querySelector("#themeToggle").addEventListener("click",()=>{
  document.documentElement.classList.toggle("dark");
  const dark=document.documentElement.classList.contains("dark");
  localStorage.setItem("suzune-theme",dark?"dark":"light");
  document.querySelector("#themeToggle").textContent=dark?"☀️":"🌙";
});
if(localStorage.getItem("suzune-theme")==="dark"){
  document.documentElement.classList.add("dark");
  document.querySelector("#themeToggle").textContent="☀️";
}
activeMajor=SONG_DATA[0];
render();
