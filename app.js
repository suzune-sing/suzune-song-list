let activeMajor = null;
let allSongsMode = false;

const state = {  query: ""
};


/* =========================
   共通
========================= */

function normalize(value) {
  return String(value ?? "")
    .toLocaleLowerCase("ja-JP")
    .normalize("NFKC");
}

function escapeHtml(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char])
  );
}

function highlight(text) {
  const raw = String(text ?? "");

  if (!state.query) {
    return escapeHtml(raw);
  }

  const query = normalize(state.query);
  const normalizedRaw = normalize(raw);
  const index = normalizedRaw.indexOf(query);

  if (index < 0) {
    return escapeHtml(raw);
  }

  return (
    escapeHtml(raw.slice(0, index)) +
    "<mark>" +
    escapeHtml(raw.slice(index, index + state.query.length)) +
    "</mark>" +
    escapeHtml(raw.slice(index + state.query.length))
  );
}


/* =========================
   検索
========================= */

function matches(song, major, category, item) {
  if (!state.query) return true;

  const query = normalize(state.query);

  return [
    song?.title,
    song?.status,
    song?.genre,
    song?.season,
    song?.work,
    major?.name,
    category?.name,
    item?.name
  ]
    .filter(value => value !== undefined && value !== null)
    .some(value =>
      normalize(value).includes(query)
    );
}


/* =========================
   曲数
========================= */

function itemSongCount(item) {
  if (!item) return 0;

  if (Array.isArray(item.songs)) {
    return item.songs.length;
  }

  if (Array.isArray(item.items)) {
    return item.items.reduce(
      (total, child) =>
        total + itemSongCount(child),
      0
    );
  }

  return 0;
}

function categorySongCount(category) {
  if (!category || !Array.isArray(category.items)) {
    return 0;
  }

  return category.items.reduce(
    (total, item) =>
      total + itemSongCount(item),
    0
  );
}
function countMajor(major) {
  if (!major || !Array.isArray(major.categories)) {
    return 0;
  }

  return major.categories.reduce(
    (total, category) =>
      total + categorySongCount(category),
    0
  );
}

function countAllSongs() {
  return SONG_DATA.reduce(
    (total, major) =>
      total + countMajor(major),
    0
  );
}



/* =========================
   検索結果判定
========================= */

function itemHasMatch(item, major, category) {
  if (!item) return false;

  if (Array.isArray(item.songs)) {
    return item.songs.some(song =>
      matches(song, major, category, item)
    );
  }

  if (Array.isArray(item.items)) {
    return item.items.some(child =>
      itemHasMatch(child, major, category)
    );
  }

  return false;
}

function categoryHasMatch(category, major) {
  if (!state.query) return true;

  if (!Array.isArray(category?.items)) {
    return false;
  }

  return category.items.some(item =>
    itemHasMatch(item, major, category)
  );
}


/* =========================
   検索曲数
========================= */

function countMatchingItem(item, major, category) {
  if (!item) return 0;

  if (Array.isArray(item.songs)) {
    return item.songs.filter(song =>
      matches(song, major, category, item)
    ).length;
  }

  if (Array.isArray(item.items)) {
    return item.items.reduce(
      (total, child) =>
        total +
        countMatchingItem(
          child,
          major,
          category
        ),
      0
    );
  }

  return 0;
}


/* =========================
   曲リスト
========================= */

function renderSongList(songs) {
  return `
    <ul class="song-list">
      ${songs
        .map(song => `
          <li>
            ${highlight(song?.title ?? song)}
          </li>
        `)
        .join("")}
    </ul>
  `;
}


/* =========================
   タブ
========================= */

function renderTabs() {
  const el =
    document.querySelector("#categoryTabs");

  if (!el) return;

    const allButton = `
    <button
      type="button"
      class="${allSongsMode ? "active" : ""}"
      data-all="true"
    >
      🔎 全曲
      <small>(${countAllSongs()}曲)</small>
    </button>
  `;

  const majorButtons = SONG_DATA
    .map((major, index) => `
      <button
        type="button"
        class="${!allSongsMode && major === activeMajor ? "active" : ""}"
        data-index="${index}"
      >
        ${escapeHtml(major.name)}
        <small>(${countMajor(major)}曲)</small>
      </button>
    `)
    .join("");

  el.innerHTML =
    allButton +
    majorButtons;
    /* 全曲ボタン */

  const allButtonElement =
    el.querySelector('[data-all="true"]');

  if (allButtonElement) {

    allButtonElement.addEventListener(
      "click",
      () => {

        allSongsMode = true;

        render();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
  }


  /* 通常ジャンルのボタン */

  el.querySelectorAll(
    'button[data-index]'
  ).forEach(button => {

    button.addEventListener(
      "click",
      () => {

        activeMajor =
          SONG_DATA[
            Number(button.dataset.index)
          ];

        allSongsMode = false;

        state.query = "";

        const input =
          document.querySelector("#searchInput");

        if (input) {
          input.value = "";
        }

        render();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );

  });}


/* =========================
   item表示
========================= */

function renderItem(
  item,
  major,
  category
) {
  if (!item) return "";

  /* songsを直接持つitem */

  if (Array.isArray(item.songs)) {

    const songs =
      item.songs.filter(song =>
        matches(
          song,
          major,
          category,
          item
        )
      );

    if (
      state.query &&
      songs.length === 0
    ) {
      return "";
    }

    /*
      例：

      ボカロ
      〖電ポルP〗
        ・曲
        ・曲

      のようにしたい場合
    */

    if (category.name === item.name) {
      return renderSongList(songs);
    }

    return `
      <details class="small">

        <summary>
          【${escapeHtml(item.name)}】
          <span class="count">
            (${songs.length}曲)
          </span>
        </summary>

        ${renderSongList(songs)}

      </details>
    `;
  }


  /* itemの中にitemsがある場合 */

  if (Array.isArray(item.items)) {

    const hasMatch =
      !state.query ||
      item.items.some(child =>
        itemHasMatch(
          child,
          major,
          category
        )
      );

    if (!hasMatch) {
      return "";
    }

    if (category.name === item.name) {

      return item.items
        .map(child =>
          renderNestedItem(
            child,
            major,
            category
          )
        )
        .join("");
    }

    return `
      <details class="small">

        <summary>
          【${escapeHtml(item.name)}】
          <span class="count">
            (${itemSongCount(item)}曲)
          </span>
        </summary>

        ${item.items
          .map(child =>
            renderNestedItem(
              child,
              major,
              category
            )
          )
          .join("")}

      </details>
    `;
  }

  return "";
}


/* =========================
   ネストitem
========================= */

function renderNestedItem(
  item,
  major,
  category
) {
  if (!item) return "";

  if (Array.isArray(item.songs)) {

    const songs =
      item.songs.filter(song =>
        matches(
          song,
          major,
          category,
          item
        )
      );

    if (
      state.query &&
      songs.length === 0
    ) {
      return "";
    }

    return `
      <details>

        <summary>
          〖${escapeHtml(item.name)}〗
          <span class="count">
            (${songs.length}曲)
          </span>
        </summary>

        ${renderSongList(songs)}

      </details>
    `;
  }

  return renderItem(
    item,
    major,
    category
  );
}


/* =========================
   メイン
========================= */
/* =========================
   メイン
========================= */

function render() {

  if (!activeMajor) {
    activeMajor = SONG_DATA[0];
  }

  renderTabs();

  const area =
    document.querySelector("#songArea");

  if (!area) return;

  let totalMatches = 0;


  /* =========================
     全曲モード
  ========================= */

  if (allSongsMode) {

    let html = `
      <div class="major-title">
        🔎 全曲
        <span class="count">
          (${countAllSongs()}曲)
        </span>
      </div>
    `;


    SONG_DATA.forEach(major => {

      /*
        検索中は、
        この大ジャンルの中に
        検索結果があるか確認
      */

      const hasMajorMatch =
        !state.query ||
        major.categories.some(category =>
          categoryHasMatch(
            category,
            major
          )
        );


      if (!hasMajorMatch) {
        return;
      }


      html += `
        <details>

          <summary>
            ${escapeHtml(major.name)}
            <span class="count">
              (${state.query
                ? major.categories.reduce(
                    (total, category) =>
                      total +
                      category.items.reduce(
                        (sum, item) =>
                          sum +
                          countMatchingItem(
                            item,
                            major,
                            category
                          ),
                        0
                      ),
                    0
                  )
                : countMajor(major)}曲)
            </span>
          </summary>

          <div class="subcategory">
      `;


      major.categories.forEach(category => {

        if (
          !categoryHasMatch(
            category,
            major
          )
        ) {
          return;
        }


        const categoryCount =
          state.query
            ? category.items.reduce(
                (total, item) =>
                  total +
                  countMatchingItem(
                    item,
                    major,
                    category
                  ),
                0
              )
            : categorySongCount(category);


        html += `
          <details>

            <summary>
              〖${escapeHtml(category.name)}〗
              <span class="count">
                (${categoryCount}曲)
              </span>
            </summary>

            <div class="subcategory">
        `;


        category.items.forEach(item => {

          html += renderItem(
            item,
            major,
            category
          );


          totalMatches +=
            state.query
              ? countMatchingItem(
                  item,
                  major,
                  category
                )
              : itemSongCount(item);

        });


        html += `
            </div>

          </details>
        `;
      });


      html += `
          </div>

        </details>
      `;

    });


    /*
      検索結果が0件だった場合
    */

    if (
      state.query &&
      totalMatches === 0
    ) {

      html += `
        <div class="empty">
          「${escapeHtml(state.query)}」に
          一致する曲はありませんでした。
        </div>
      `;

    }


    area.innerHTML = html;


    const resultInfo =
      document.querySelector("#resultInfo");


    if (resultInfo) {

      resultInfo.textContent =
        state.query
          ? `${totalMatches}曲が見つかりました（全ジャンルから検索）`
          : `全${countAllSongs()}曲`;

    }


    return;
  }


  /* =========================
     通常ジャンル表示
  ========================= */

  let html = `
    <div class="major-title">
      ${escapeHtml(activeMajor.name)}
      <span class="count">
        (${countMajor(activeMajor)}曲)
      </span>
    </div>
  `;


  activeMajor.categories
    .forEach(category => {

      if (
        !categoryHasMatch(
          category,
          activeMajor
        )
      ) {
        return;
      }


      const categoryCount =
        state.query
          ? category.items.reduce(
              (total, item) =>
                total +
                countMatchingItem(
                  item,
                  activeMajor,
                  category
                ),
              0
            )
          : categorySongCount(category);


      html += `
        <details>

          <summary>
            〖${escapeHtml(category.name)}〗
            <span class="count">
              (${categoryCount}曲)
            </span>
          </summary>

          <div class="subcategory">
      `;


      category.items.forEach(item => {

        html += renderItem(
          item,
          activeMajor,
          category
        );


        totalMatches +=
          state.query
            ? countMatchingItem(
                item,
                activeMajor,
                category
              )
            : itemSongCount(item);

      });


      html += `
          </div>

        </details>
      `;
    });


  if (
    state.query &&
    totalMatches === 0
  ) {

    html += `
      <div class="empty">
        「${escapeHtml(state.query)}」に
        一致する曲はありませんでした。
      </div>
    `;
  }


  area.innerHTML = html;


  const resultInfo =
    document.querySelector("#resultInfo");


  if (resultInfo) {

    resultInfo.textContent =
      state.query
        ? `${totalMatches}曲が見つかりました（曲名・分類名などを検索）`
        : "";

  }
}
/* =========================
   検索イベント
========================= */

const searchInput =
  document.querySelector("#searchInput");

if (searchInput) {

  searchInput.addEventListener(
    "input",
    event => {

      state.query =
        event.target.value.trim();

      render();
    }
  );
}


const clearSearch =
  document.querySelector("#clearSearch");

if (clearSearch) {

  clearSearch.addEventListener(
    "click",
    () => {

      state.query = "";

      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }

      render();
    }
  );
}


/* =========================
   ダークモード
========================= */

const themeToggle =
  document.querySelector("#themeToggle");

if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    () => {

      document.documentElement
        .classList.toggle("dark");

      const dark =
        document.documentElement
          .classList
          .contains("dark");

      localStorage.setItem(
        "suzune-theme",
        dark ? "dark" : "light"
      );

      themeToggle.textContent =
        dark ? "☀️" : "🌙";
    }
  );


  if (
    localStorage.getItem(
      "suzune-theme"
    ) === "dark"
  ) {

    document.documentElement
      .classList.add("dark");

    themeToggle.textContent = "☀️";
  }
}


/* =========================
   初期表示
========================= */

activeMajor = SONG_DATA[0];

render();