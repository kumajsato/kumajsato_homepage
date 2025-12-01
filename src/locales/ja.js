const ja = {
  // Header-related
  navButtons: [
    { label: "ホーム", link: "/", icon: "fa-solid fa-house" }
    ,{ label: "コンテンツ", link: "/contents", icon: "fa-solid fa-film" }
    ,{ label: "自己紹介", link: "/aboutme", icon: "fa-solid fa-user" }
    ,{ label: "各リンク", link: "/links", icon: "fa-solid fa-link" }
    ,{ label: "ブログ", link: "/blog", icon: "fa-solid fa-pen-to-square" }
  ],

  // Home-related
  intro: "ボカロP、EDMコンポーザー「<strong>佐藤くま</strong>」です。<br>CD・グッズは<a href='https://kumajsato.booth.pm/' target='_blank'><i class='fa-solid fa-store'></i><strong>BOOTH</strong></a>にてご購入いただけます。",
  latestNewsTitle: "最新情報",
  latestVideoTitle: "最新動画",
  pickupVideoTitle: "🔥🔥🔥ピックアップ🔥🔥🔥",
  latestNews: [
    { date: "2025/09/01", content: "『カミサマコーリング feat. 知声』公開しました" }
    ,{ date: "2025/10/11", content: "ホームページを公開しました" }
    ,{ date: "2025/10/26", content: `音系・メディアミックス同人即売会 [M3]<a href='https://catalog.m3net.jp/2025f/circles.html?circleId=560308' target='_blank'><strong>【E-02a】</strong></a>に出展予定！` }
    ,{ date: "2025/11/29", content: `ボーカロイドonly event「THE VOC@LOiD M@STER６１」<strong>【F08】</strong>にて出展予定！` }
    ,{ date: "2025/10/15", content: "M3、ボーマスにて頒布するCD『アイムタフ feat. 知声 - EP』の情報を公開しました。" }
    ,{ date: "2025/10/27", content: "<a href='/#/blog/m3-autumn-2025'>M3秋2025出展報告</a>をブログに追加しました。" }
    ,{ date: "2025/10/27", content: "『アイムタフ！ feat. 知声 - EP』のストリーミング配信リンクを追加しました。" }
    ,{ date: "2025/10/27", content: "各作品の歌詞情報をこちらのHPで確認できるようにしました。" }
    ,{ date: "2025/12/01", content: "<a href='https://kumajsato.booth.pm/items/7706848' target='_blank'>BOOTHにて、『アイムタフ！ feat. 知声 - EP』の通販を開始いたしました。</a>" }
    ,{ date: "2025/12/01", content: "<a href='/#/blog/vomas-61'>ボーマス61出展報告</a>をブログに追加しました。" }
  ],

  // Contents-related
  contentsTabs: {
    youtube: " MV",
    videos: "MV",
    youtubeIcon: "fa-brands fa-youtube",
    streaming: "ストリーミング",
    streamingIcon: "fa-solid fa-compact-disc",
    other: "Streaming"
  },
  // label for lyrics link in Contents MV list
  contentsLyricsLink: "歌詞",
  contentsTracksLabel: "-収録楽曲-",
  // Streaming / album data for Contents page (managed in locale)
  contentsStreaming: [
    {
      image: process.env.PUBLIC_URL + '/images/cd_jacket/uni.png',
      title: "ユニ feat. 初音ミク, 知声 - EP",
      author: "佐藤くま",
      tracks: ["フィクション feat. 初音ミク", "ユニ feat. 初音ミク, 知声", "キッド feat. 初音ミク", "トーキョーシミュレーター feat. 知声"],
      year: "2022",
      spotify: "https://open.spotify.com/intl-ja/album/3H55VpG1vkT1ewFa3rF1Sl",
      apple: "https://music.apple.com/jp/album/uni-feat-hatsunemiku-chis-a-ep/1654591450",
      other: "https://nodee.net/a/6pvadib5"
    },
    {
      image: process.env.PUBLIC_URL + '/images/cd_jacket/coinlaundry.png',
      title: "世界の終わりとコインランドリー feat. 知声 - EP",
      author: "佐藤くま",
      tracks: ["みにくいほしのこ feat. 知声", "僕の郷 feat. 知声", "世界の終わりとコインランドリー feat. 知声", "誰かのための歌 feat. 知声"],
      year: "2023",
      spotify: "https://open.spotify.com/intl-ja/album/2iblpC4ZTXBSRUyQn1lT50",
      apple: "https://music.apple.com/jp/album/the-end-of-the-world-and-laundromats-ep/1719236307",
      other: "https://nodee.net/a/jzw0bs86"
    },
    {
      image: process.env.PUBLIC_URL + '/images/cd_jacket/imtough.png',
      title: "アイムタフ！ feat. 知声 - EP",
      author: "佐藤くま",
      tracks: ["月明かりじゃ物足んない feat. 知声", "クチダケ feat. 知声", "カミサマコーリング feat. 知声", "アイムタフ！ feat. 知声"],
      year: "2025",
      spotify: "https://open.spotify.com/intl-ja/album/25hCALKh3hBdjLqqdQrlzN",
      apple: "https://music.apple.com/jp/album/im-tough-feat-chis-a-ep/1847800703",
      other: "https://nodee.net/a/e1w9ecnyx8h2"
    }
  ],

  // About Me
  aboutMeSections: [
    {
      title: "名前",
      text: "<b>佐藤くま</b>"
    },
    {
      title: "プロフィール",
      text: `
          1996年10月11日、東京に生まれる。<br>
          20歳の時にAviciiやMarshmello、Skrillexに影響を受け、EDMを中心に音楽制作を開始。<br>
          25歳の時に初めてVOCALOIDを使用した楽曲『フィクション feat. 初音ミク』を発表。<br>
          Voisonaの「知声」の声に感銘を受け、ボカロPとしての活動を継続中。<br>
          同人音楽即売会「M3」やボカロオンリーイベント「THE VOC@LOiD M@スター」などでCDを頒布。
        `
    },
    {
      title: "得意ジャンル",
      text: "洋楽ポップス風<br>Hip-Hop<br>EDM<br>　- Moombahton<br>　- Twerk<br>　- House<br>　- Trap<br>　- Future Bass<br>"
    },
    {
      title: "活動来歴",
      text: `
         2022/07/28 『フィクション feat. 初音ミク』無色透明祭参加楽曲。(自らの投稿は2022/08/13)<br>
         2022/10/07 『ユニ feat. 初音ミク, 知声』 ボカコレ2022秋ルーキー参加楽曲。<br>
         2022/10/07 『トーキョーシミュレーター feat. 知声』 ボカコレ2022秋ルーキー参加楽曲。<br>
         2023/03/18 『みにくいほしのこ feat. 知声』 ボカコレ2023春ルーキー参加楽曲。<br>
         2023/06/17 『僕の郷 feat. 知声』 イラスト統一祭～ふかみ祭～参加楽曲。<br>
         2023/08/04 『世界の終わりとコインランドリー feat. 知声』 ボカコレ2023夏ルーキー参加楽曲。<br>
         2023/11/02 『誰かのための歌 feat. 知声』 無色透名祭Ⅱ参加楽曲。(自らの投稿は2023/11/06)<br>
         2023/12/16 『シロ feat. 知声』 イラスト統一祭～ゴマヒチ祭～参加楽曲。<br>
         2024/04/25 『月明かりじゃ物足んない feat. 知声』<br>
         2024/08/05 『声がする feat. 知声』ぼかえり参加楽曲。(niconicoのみの公開)<br>
         2024/12/23 『クチダケ feat. 知声』<br>
         2025/02/24 『アイムタフ！ feat. 知声』<br>
         2025/09/01 『カミサマコーリング feat. 知声』<br>
         `
    }
  ],

  // External links
  externalLinks: [
    { label: "BOOTH", id: "ペパロニドーナツ", url: "https://kumajsato.booth.pm/" , icon: "fa-solid fa-store" }
    ,{ label: "X(旧Twitter)", id: "@kumajsato", url: "https://x.com/kumajsato" , icon: "fa-brands fa-x-twitter" }
    ,{ label: "instagram", id: "@kumajsato", url: "https://www.instagram.com/kumajsato" , icon: "fa-brands fa-instagram" }
    ,{ label: "TikTok", id: "@kumajsato", url: "https://www.tiktok.com/@kumajsato" , icon: "fa-brands fa-tiktok" }
    ,{ label: "Youtube", id: "@kumajsato", url: "https://www.youtube.com/@kumajsato" , icon: "fa-brands fa-youtube" }
    ,{ label: "niconico", id: "14922039", url: "https://www.nicovideo.jp/user/14922039" , icon: "fa-solid fa-tv" }
    ,{ label: "piapro", id: "kumajsato", url: "https://piapro.jp/kumajsato" , icon: "fa-solid fa-music" }
    ,{ label: "SoundCloud", id: "kumajsato", url: "https://soundcloud.com/kumajsato" , icon: "fa-brands fa-soundcloud" }
    //,{ label: "Bandcamp", id: "Kuma J Sato", url: "https://kumajsato.bandcamp.com/" , icon: "fa-brands fa-bandcamp" }
  ],
  // ...any additional locale keys remain unchanged...
    // Lyrics page label/icon (not part of navButtons)
  lyricsSection: {
    label: "歌詞",
    icon: "fa-solid fa-pen-nib"
  },

};
export default ja;
