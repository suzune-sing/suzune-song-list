/*
  🫧🩵 涼音◦°suzune の歌える曲リスト
  曲データだけを編集するファイルです。

  追加例:
  { name: "新しい分類", items: [
    { name: "歌い手", songs: [
      { title: "曲名", status: "歌える" }
    ]}
  ]}

  title は原文をそのまま入れてください。
  status / genre / season / work は将来の検索・絞り込み用の任意フィールドです。
*/
const SONG_DATA = [
  {
    name:"🫧女児アニメ・アイドルアニメ🫧",
    categories:[
      {name:"プリティーリズム",items:[
        {name:"プリリズAD＋DM",songs:["You May Dream","めらめらハートが熱くなる","Dream Goes On","ココロ充電！","Switch On My Heart","Shall We Go?!","Que sera"]},
        {name:"プリリズ🌈",songs:["ハート♥イロ♥トリドリ〜ム","Vanity♥colon"]},
        {name:"プリパラ",songs:["太陽のflere sherbet","Mon chouchou","チクタク･Magicaる･アイドルタイム!","でび & えん☆Reversible-Ring","0-week-old","トライアングル･スター","かりすま～とGIRL☆Yeah","HAPPY Pa LUCKY","No D & D code","ま～ぶる Make up a-ha-ha!","GOスト♭コースター","Miss.プリオネア","TRIal HEART ～恋の違反チケット～","ぷりっとぱ～ふぇくと","サンシャイン・ベル","ヴァーチャデリアイドル","コノウタトマレイヒ","Make it!","すた～らいとカーニバル☆"]},
        {name:"アイプリ",songs:["ひみつだけどね","ネバギバラバー","GIRA GIRA STAR","ひみつのふふふ","P.O.P.P.Y"]}
      ]},
      {name:"ラブライブ",items:[
        {name:"μ's",songs:["夏色えがおで1,2,Jump!","もぎゅっと“love”で接近中!"]},
        {name:"スーパースター",songs:["ビタミンSUMMER!","常夏☆サンシャイン","ノンフィクション","Chance Day Chance Way","愛♡スクリ～ム!"]},
        {name:"虹ヶ咲",songs:["眠れる森に行きたいな","ドキピポ☆エモーション","無敵級ビリーバー","Poppin’ Up","ツナガルコネクト","Walking Dream","背伸びしたって","小悪魔LOVE♡","Request for U","Cooking with Love","チェリーボム","恋するSunflower","私はマグネット","咬福論"]},
        {name:"イキヅライブ",songs:["What is my LIFE？","浅草Guilty Girlの歌","Little Green 委員会","恋のワンタイムパスワード"]}
      ]}
    ]
  },
  {
    name:"🫧VTuber🫧",
    categories:[
      {name:"ホロライブ",items:[
        {name:"ユニット曲",songs:["Suspect","今宵はHalloween Night！"]},
        {name:"宝鐘マリン",songs:["I'm Your Treasure Box ＊あなたは マリンせんちょうを たからばこからみつけた。","Unison","美少女無罪♥パイレーツ","Ahoy!! 我ら宝鐘海賊団☆","パイパイ仮面でどうかしらん？","コンプレックスプリンセス","スキスキDieスキ超Ayeシテル","A Horny Money World〜伝説の夜〜","愛罠beジャンキー"]},
        {name:"宝鐘マリン+誰か",songs:["ブライダルドリーム","III","SHINKIRO","Chatter Chatter"]},
        {name:"兎田ぺこら",songs:["いいわけバニー"]},
        {name:"湊あくあ",songs:["あくたんのこと好きすぎ☆ソング","あいわな","プリンセス・キャリー","恋愛ストラテジック","#あくあ色パレット"]},
        {name:"さくらみこ",songs:["Sakura days","きゅんきゅんみこきゅんきゅん♡"]},
        {name:"白銀ノエル",songs:["ほめのび"]},
        {name:"星街すいせい",songs:["みちづれ","ソワレ","ビビデバ","自分勝手dazzling","すいちゃんのメンテナンスソング","ジュビリー","シュガーラッシュ"]},
        {name:"猫又おかゆ",songs:["もぐもぐYUMMY","カミサマ・ネコサマ"]},
        {name:"夜空メル",songs:["かぷうぃん中毒","キャラメル・デビル","かぷっとNightSky"]},
        {name:"アキ・ローゼンタール",songs:["ヒロインオーディション"]},
        {name:"姫森ルーナ",songs:["守護ってルーナイト"]}
      ]},
      {name:"神椿",items:[
        {name:"ヰ世界情緒",songs:["ラピスのお人形","アンビバレント"]},
        {name:"花譜",songs:["過去を喰らう","私論理","不可解","ラブしい"]}
      ]},
      {name:"個人勢",items:[
        {name:"しぐれうい",songs:["粛聖!! ロリ神レクイエム☆","うい麦畑でつかまえて"]},
        {name:"かすていらヨリコ",songs:["ながさきグルメカ∞ニバル"]}
      ]}
    ]
  },
  {
    name:"🫧HoneyWorks🫧",
    categories:[
      {name:"成海聖奈",directItems:true,items:[{name:"成海聖奈",songs:["可愛くなりたい","金曜日のおはよう-another story-","水曜日の約束-another story-","木曜日のスキャンダル","日曜日の秘密","火曜日はチューデイ-another story-","ワタシノテンシ","おすすめの子","シス×ラブ","可愛い理由"]}]},
      {name:"mona",directItems:true,items:[{name:"mona",songs:["私、アイドル宣言","ファンサ","No.1","誇り高きアイドル","人生は最高の暇つぶし","ホントノワタシ","ワタシノミカタ","17歳","推し変なんて許さない！","#超絶かわいい","不屈のアイドル","ざけんな","motto☆いちごオレ","アイドルでよかった。","おまえも♡","生きてるってマジ優勝！","私、C君が好き。","お兄ちゃんエチケット♡","メイドインジャパン"]}]},
      {name:"涼海ひより",directItems:true,items:[{name:"涼海ひより",songs:["ヒロイン育成計画","ヒロインたるもの！","ヒロインは平均以下。","ヒロインとアイドル"]}]},
      {name:"ちゅーたん",directItems:true,items:[{name:"ちゅーたん",songs:["可愛くてごめん","すきっちゅーの！","メイド☆至上主義","ディア♡マイフレンド","可愛くなれたらいいのに","同担☆拒否"]}]},
      {name:"服部樹里",directItems:true,items:[{name:"服部樹里",songs:["可愛いねって言われちゃった","うちら、恋人宣言！","イタキス"]}]},
      {name:"瀬戸口雛",directItems:true,items:[{name:"瀬戸口雛",songs:["今好きになる。","センパイ。","大嫌いなはずだった。","運命の人だった。"]}]},
      {name:"榎本夏樹",directItems:true,items:[{name:"榎本夏樹",songs:["告白予行練習","病名コイワズライ"]}]},
      {name:"早坂あかり",directItems:true,items:[{name:"早坂あかり",songs:["私が恋を知る日","ヤキモチの答え -another story-","死ぬまでダーリン"]}]},
      {name:"高見沢アリサ",directItems:true,items:[{name:"高見沢アリサ",songs:["ハートの主張","生意気ハニー -another story-","男の子の目的は何？"]}]},
      {name:"綾瀬恋雪・扇野りょう",directItems:true,items:[{name:"綾瀬恋雪・扇野りょう",songs:["告白ライバル宣言","恋愛成就","コスプレしたいのっ！"]}]},
      {name:"鏡音リン・レン",directItems:true,items:[{name:"鏡音リン・レン",songs:["スキキライ","竹取オーバーナイトセンセーション"]}]},
      {name:"最近のHoneyWorks",directItems:true,items:[{name:"最近のHoneyWorks",songs:["今、恋が始まれ。","ムカつく -another story-","初恋は負け確！","彼氏自慢"]}]},
      {name:"その他",directItems:true,items:[{name:"その他",songs:["今ちょっとだけ話題の神様","暁月夜","ツインズ","ミスター・ダーリン","月曜日の憂鬱","乙女どもよ。","愛に出会い恋は続く","幸せ。","醜い生き物","小悪魔だってかまわない！","ヒミツ恋ゴコロ","ぎじれんあい","ロメオ","アイのシナリオ","恋のコード","世界は恋に落ちている","決戦スピリット"]}]}
    ]
  },
  {
    name:"🫧アイマス🫧",
    categories:[
      {name:"学マス",items:[
        {name:"花海咲季",songs:["Fighting My Way","Boom Boom Pow","EGO","Tri it now","Wildest Flower"]},
        {name:"月村手毬",songs:["Luna say maybe","アイヴイ","Unhappy Light","叶えたい、ことばかり。","一体いつから"]},
        {name:"藤田ことね",songs:["世界一可愛い私","Yellow Big Bang！","ふわふわ","The cute!!!","自己肯定感爆上げ↑↑しゅきしゅきソング"]},
        {name:"有村麻央",songs:["Fluorite","Top Secret(1番まで)"]},
        {name:"葛城リーリヤ",songs:["白線"]},
        {name:"倉本千奈",songs:["Wonder Scale","日々、発見的ステップ！","ときめきのソルフェージュ"]},
        {name:"紫雲清夏",songs:["Tame-Lie-One-Step","カクシタワタシ","Kira Kira(1番まで)","Love & Joy"]},
        {name:"篠澤広",songs:["光景","コントラスト","コンテンポラリのダンス","メクルメ","サンフェーデッド"]},
        {name:"姫崎莉波",songs:["Clumsy trick","L.U.V","marble heart","36℃UBE"]},
        {name:"花海佑芽",songs:["The Rolling Riceball","グースーピー","つよつよ最強エクササイズ","金の斧、銀の斧、エメラルドの斧"]},
        {name:"秦谷美鈴",songs:["ヨルニテ","VEIL"]},
        {name:"十王星南",songs:["Choo Choo Choo(一番まで)"]},
        {name:"雨夜燕",songs:["クライアイ"]},
        {name:"複数人",songs:["がむしゃらに行こう！","ときめきエモーション","みちなるひろがる","わかし・さわがし・スカパンク","ガラクタロード","キミとセミブルー","ナイワ","ハッピーミルフィーユ","ミラクルナナウ","仮装狂騒曲","冠菊","初","古今東西ちょちょいのちょい","標","雨上がりのアイリス","雪解けに","Campus_mode!!","ENDLESS DANCE","Howling over the World","SUGAR FLAVOR","SUPREMACY","Star-mine","White_Night!_White_Wish!"]}
      ]},
      {name:"シャニマス",items:[
        {name:"ソロ曲",songs:["Darling you!","誰ソ彼アイデンティティー","SOS","フェアリー・ガール","あおぞらサイダー"]},
        {name:"アルストロメリア",songs:["mellow mellow","Give me some more...","Love addiction"]},
        {name:"SHHis",songs:["OH MY GOD","Fly and Fly","Fashionable","Bouncy Girl","Forbidden Paradise","SWEETEST BITE","Happier","Monochromatic"]},
        {name:"CoMeTic",songs:["無自覚アプリオリ"]},
        {name:"その他",songs:["カウンドダウンラブ","KAWAII♡めたもる交響曲","Ring Ring Ringの魔法","karma","Poison Berry Daughters"]}
      ]},
      {
        name:"デレマス",
        items:[
          {
            name:"全体・定番曲",
            songs:["お願い!シンデレラ","ススメ☆オトメ"]
          },
          {
            name:"ソロ曲",
            songs:[
              "あんずのうた",
              "ショコラ・ティアラ",
              "おねだりShall We〜？",
              "ニャンとスペクタクル",
              "S(mile)ING！",
              "Naked Romance",
              "アップルパイ・プリンセス",
              "Romantic Now",
              "メルヘンデビュー！",
              "To my Darling...",
              "エヴリデイドリーム",
              "マイ・スイート・ハネムーン",
              "小さな恋の密室事件",
              "花簪HANAKANZASHI",
              "き・ま・ぐ・れ☆cafe au lait",
              "秘密のトワレ",
              "ラヴィアン・ローズ",
              "恋色エナジー",
              "lilac time",
              "恋のhamburg♪",
              "しゅがーはぁと☆レボリューション",
              "14平米にスーヴェニア(1番まで)",
              "Packing Her Favorite(1番まで)",
              "トキメキは赤くて甘い",
              "セレブレイト・スターレイル",
              "にんぎょひめ練習中！",
              "あの子が街に来なサンタ",
              "プライスレスドーナッChu♡",
              "満貫成就♪巫女の神頼み！",
              "SUPERLOVE☆"
            ]
          },
          {
            name:"複数人曲",
            items:[
              {
                name:"夏曲",
                songs:[
                  "いとしーさー♡",
                  "サマカニ！！",
                  "Go Just Go",
                  "Let’s sail away"
                ]
              },
              {
                name:"その他",
                songs:[
                  "ステップ＆スキップ",
                  "Gossip Club",
                  "ギュっとMilky Way",
                  "Great Journey",
                  "はにかみdays",
                  "Brand new!",
                  "アタシポンコツアンドロイド",
                  "絶対特権主張しますっ！",
                  "パステルピンクな恋",
                  "キラッ！満開スマイル",
                  "秋めいて Ding Dong Dang!",
                  "Snow＊Love",
                  "きゅん・きゅん・まっくす",
                  "ドレミファクトリー！",
                  "MOTTO!",
                  "Love∞Destiny",
                  "イリュージョニスタ！",
                  "ラブレター",
                  "モーレツ★世直しギルティ!",
                  "リトルリドル",
                  "Kawaii make MY day!",
                  "クレイジークレイジー",
                  "Palette",
                  "O-Ku-Ri-Mo-No Sunday!",
                  "無重力シャトル",
                  "comic cosmic",
                  "ミラーボール・ラブ",
                  "無限L∞PだLOVE♡",
                  "凸凹スピードスター",
                  "ラビューダ♡トライアングル",
                  "Pretty Liar"
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name:"🫧ボカロ🫧",
    categories:[
      {name:"電ポルP",directSongs:true,items:[{name:"電ポルP",songs:["スキスキ絶頂症","Lap Tap Love","さよならテンダー","唯々なりレイデエ","愛に奇術師","独りんぼエンヴィー","従属ふりったー","magic city","ノンデ・パナシーア","心象カスケード","常世の気まぐれ","はらぺこのルベル","曖昧劣情lover"]}]},
      {name:"とあ",directSongs:true,items:[{name:"とあ",songs:["ツギハギスタッカート","ミュージックミュージック","パズルガール","さよならスーヴェニア","ピチカートドロップス","ドライドライフラワー","アイディスマイル"]}]},
      {name:"すこっぷ",directSongs:true,items:[{name:"すこっぷ",songs:["指切り","ラジカル男女の唄"]}]},
      {name:"つなまる",directSongs:true,items:[{name:"つなまる",songs:["月乃","paranoia","うそつき","言の葉クリニック","ひよたまカフェ"]}]},
      {name:"あ子",directSongs:true,items:[{name:"あ子",songs:["milk","渦中にて","グリーディー・ガール","ちゃんちゃら"]}]},
      {name:"香椎モイミ",directSongs:true,items:[{name:"香椎モイミ",songs:["偏食","しょってぃん","キャットラビング","アタシ：アップデート","初恋日記","ラブリーアサシン","ピカピカキャンディラブイズム","Makeup","バッドエンドメーカー"]}]},
      {name:"MARETU",directSongs:true,items:[{name:"MARETU",songs:["脳内革命ガール","マインドブランド","うみたがり","ホワイトハッピー","ダーリン","ぴんく","あいしていたのに","エンゼル92","ビノミ","イヤイヤヨ"]}]},
      {name:"cat nap",directSongs:true,items:[{name:"cat nap",songs:["ペシュテ","ミッドナイト・プール","slow snow dance","キスしてやりたい","latencyはまってくれない","wolf","まほろばポルカ","お邪魔します天国","レイジー・クルーズ","こめっと","サイゼのない町","エジソン","yawn","温度","みはるかす"]}]},
      {name:"ヤマギシコージ",directSongs:true,items:[{name:"ヤマギシコージ",songs:["ロンリー・ポップ・プリンセス","アルコ・ホリック・シンデレラ","シークレット・シーカー","ハイド・アンド・シーフ"]}]},
      {name:"小宮かふぃー",directSongs:true,items:[{name:"小宮かふぃー",songs:["ハロー、メランコリィ","クランベリーパレード","スモーキィクォーツ","ふわふわトラベラーズ"]}]},
      {name:"はるまきごはん",directSongs:true,items:[{name:"はるまきごはん",songs:["メルティランドナイトメア","第三の心臓 −2?","ディナーベル −4","ゼロトーキング","エンパープル"]}]},
      {name:"ピノキオピー",directSongs:true,items:[{name:"ピノキオピー",songs:["腐れ外道とチョコレゐト","ありふれたせかいせいふく","こどものしくみ","アップルドットコム","セカイはまだ始まってすらいない","ねぇねぇねぇ。","神っぽいな","魔法少女とチョコレゐト","デビルじゃないもん","甘噛みでおねがい","アポカリプスなう","Aじゃないか","嘘ミーム","愛属性 −3"]}]},
      {name:"DECO*27",directSongs:true,items:[{name:"DECO*27",songs:["ゆめゆめ","妄想税","おじゃま虫","ストリーミングハート","ハートアラモード","ゴーストルール","ライアーダンス","いいや","妄想感傷代償連盟","ヒバナ","愛言葉III","乙女解剖","スクランブル交際","サイコグラム","ポジティブ・パレード","アンデッドアリス","ヴァンパイア","シンデレラ","シンデレラ(Giga First Night Remix )","サラマンダー","ゾンビ","毒林檎","ラビットホール","ルーキー","ハオ","ネバーランド","モニタリング","モニタリング(Best Friend Remix)","テレパシ","チェリーポップ","ラブパラ"]}]},
      {name:"ミルグラム(DECO*27)",directSongs:true,items:[{name:"ミルグラム(DECO*27)",songs:["おまじない","愛なんですよ","アフターペイン","アンビリカル","事変上等","粛清マーチ","Cat","だいすき","悪くないもん","Tear Drop","バックドラフト","ペイン","なんでもにうむ"]}]},
      {name:"Giga",directSongs:true,items:[{name:"Giga",songs:["ぴんこすてぃっくluv","LUVORATORRRRRY!","drop pop candy","ヒビカセ","Gimme×Gimme","ワーワーワールド","GETCHA!(1番まで)","Ready_Steady","CH4NGE","Beyond the Way","ULTRA C","プレイ","[A]ddiction"]}]},
      {name:"八王子P",directSongs:true,items:[{name:"八王子P",songs:["気まぐれメルシィ","バイオレンストリガー"]}]},
      {name:"かいりきベア",directSongs:true,items:[{name:"かいりきベア",songs:["失敗作少女","アルカリレットウセイ","レミングミング","アンヘル","マオ","ベノム","ルマ","アイ情劣等生","ダーリンダンス","メンタルチェンソー","バグ","メロメロイド"]}]},
      {name:"きくお",directSongs:true,items:[{name:"きくお",songs:["愛して愛して愛して","うらみのワルツ","猫の食卓","あなぐらぐらし","イイコと妖狐","見つかんない見つかんない","幸福な死を","君はできない子"]}]},
      {name:"Junky",directSongs:true,items:[{name:"Junky",songs:["メランコリック","Happy Halloween","スイートマジック","オシオキGIMMICK!!"]}]},
      {name:"40mp",directSongs:true,items:[{name:"40mp",songs:["妄想スケッチ","からくりピエロ","ドレミファロンド","恋愛裁判","雨音ノイズ","だんだん早くなる","恋愛マニュアル","大正ロマンチック","ひとりぼっちのひとりごと","悪役にキスシーンを","嘘つきは恋のはじまり"]}]},
      {name:"OSTER project",directSongs:true,items:[{name:"OSTER project",songs:["Alice in Musicland","おおかみなんかこわくないッ！","on the rocks","ナポナポリターンマッチ","トキシックジャム","くじらライダー","いるかジェット","ミラクルペイント","恋色病棟","恋色監獄","おひめさまになりたいのッ！","EAT ME","ゴシップ","軋んだ夢と糸繰人形","アルコールソング","恋の才能","世界を照らすテトラッド","せんぱい！"]}]},
      {name:"いよわ",directSongs:true,items:[{name:"いよわ",songs:["IMWANOKIWA","くろうばあないと","1000年生きてる","あだぽしゃ","きゅうくらりん","アプリコット","パジャミィ","異星にいこうね","ももいろの鍵","ゆめみるうろこ","散歩の邪魔"]}]},
      {name:"r-906",directSongs:true,items:[{name:"r-906",songs:["パノプティコン","あなたしか見えないの","三日月ステップ"]}]},
      {name:"LonePi",directSongs:true,items:[{name:"LonePi",songs:["水死体は恋したい","ゲンチアナ","幸福刑"]}]},
      {name:"TOKOTOKO(西沢さんP)",directSongs:true,items:[{name:"TOKOTOKO(西沢さんP)",songs:["路地裏猫の正体","夜もすがら君想ふ","君色に染まる","僕らの街に愛が降る夜だ","インナーダーク","君の彼女","Booo!","ランウェイのファンタジスタ","チーズケーキクライシス","マイルームコレクション","Sheepret!","ワールドワイドワンダー","水曜日に御用心","はいしんどろーむ"]}]},
      {name:"一二三",directSongs:true,items:[{name:"一二三",songs:["美しく、闇","欲浴","萌す心を"]}]},
      {name:"てにをは",directSongs:true,items:[{name:"てにをは",songs:["ザムザ","お行儀よくね","デビル","ヴィラン"]}]},
      {name:"なきそ",directSongs:true,items:[{name:"なきそ",songs:["毒して頂戴","触れたら最後","ド屑","甘ったる","みまま","お呪い","絶交","みなごろし","ひみつ気分","今すぐ輪廻"]}]},
      {name:"内緒のピアス",directSongs:true,items:[{name:"内緒のピアス",songs:["隣の席のアルキメデス −3","プロポーズ"]}]},
      {name:"稲葉曇",directSongs:true,items:[{name:"稲葉曇",songs:["ラグトレイン","レイニーブーツ","私は雨"]}]},
      {name:"DATEKEN",directSongs:true,items:[{name:"DATEKEN",songs:["蜜月アン・ドゥ・トロワ","ワンルーム・オール・ザット・ジャズ"]}]},
      {name:"パトリチェフ音楽工房",directSongs:true,items:[{name:"パトリチェフ音楽工房",songs:["エンゼルフィッシュ","サンセンチメーター"]}]},
      {name:"キノシタ",directSongs:true,items:[{name:"キノシタ",songs:["はやくそれになりたい！","ポジティブ☆ダンスタイム","ハナイロ☆シャイガール","ガチコイワズライ","ポッピンキャンディ☆フィーバー！","エライエライエライ","夢色フェスティバル"]}]},
      {name:"きさら",directSongs:true,items:[{name:"きさら",songs:["LIMITED QUEEN","スターダストメドレー"]}]},
      {name:"じん",directSongs:true,items:[{name:"じん",songs:["空想フォレスト","如月アテンション","オツキミリサイタル","夕景イエスタデイ","daze"]}]},
      {name:"煮ル果実",directSongs:true,items:[{name:"煮ル果実",songs:["ハングリーニコル","紗痲","キルマー","アイロニーナ","トリコロージュ","トラフィック・ジャム +5オク下？","バーバヤーガ"]}]},
      {name:"syudou",directSongs:true,items:[{name:"syudou",songs:["邪魔","馬鹿","ビターチョコデコレーション","コールボーイ","コールガール","孤独の宗教","ジャックポットサッドガール","キュートなカノジョ +2"]}]},
      {name:"柊キライ",directSongs:true,items:[{name:"柊キライ",songs:["ギャラリア -4","ボッカデラベリタ","エバ"]}]},
      {name:"100回嘔吐",directSongs:true,items:[{name:"100回嘔吐",songs:["夏が終わっていきますね","最底辺の嫌がらせ"]}]},
      {name:"sasakure.UK",directSongs:true,items:[{name:"sasakure.UK",songs:["トンデモワンダーズ","スマートを模索する","阿呆なるものは","メイデー、メイビーネイビー"]}]},
      {name:"ねじ式P",directSongs:true,items:[{name:"ねじ式P",songs:["フリィダム ロリィタ","ピニャコラーダ","ice breaker","イカサマジュリエット","残酷と純粋","ノーブルローズ","パライソ・パライソ"]}]},
      {name:"wotaku",directSongs:true,items:[{name:"wotaku",songs:["DOGMA","シビュラ","ジェヘナ","snooze","マンハッタン"]}]},
      {name:"ナナホシ管弦楽団",directSongs:true,items:[{name:"ナナホシ管弦楽団",songs:["あのこどこのこ","失楽ペトリ","おねがいダーリン"]}]},
      {name:"真島ゆろ",directSongs:true,items:[{name:"真島ゆろ",songs:["チチンプイプイ"]}]}
    ]
  }
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