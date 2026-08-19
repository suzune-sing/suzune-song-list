/*
  🫧🩵 涼音◦°suzune の歌える曲リスト
  各ジャンルの曲データを統合するファイルです。
*/

const SONG_DATA = [
  SONGS_IDOL_GIRLS_ANIME,
  SONGS_IMAS,
 SONGS_3D_IDOL,
  SONGS_VTUBER,
  SONGS_HONEYWORKS,
  SONGS_VOCALOID
];

function normalizeData() {
  SONG_DATA.forEach(major => {
    major.categories.forEach(category => {
      category.items.forEach(item => {
        if (Array.isArray(item.songs)) {
          item.songs = item.songs.map(song =>
            typeof song === "string"
              ? {
                  title: song,
                  status: "歌える"
                }
              : song
          );
        }

        if (Array.isArray(item.items)) {
          item.items.forEach(child => {
            if (Array.isArray(child.songs)) {
              child.songs = child.songs.map(song =>
                typeof song === "string"
                  ? {
                      title: song,
                      status: "歌える"
                    }
                  : song
              );
            }
          });
        }
      });
    });
  });
}

normalizeData();