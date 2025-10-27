// 動画リスト（タイトル・投稿日・ジャンル付き、ジャンルは配列）
const videos = [
  {
    url: "https://www.youtube.com/embed/80QI2RC7-PM",
    title: { ja: "フィクション feat. 初音ミク", en: "Fiction feat. Hatsune Miku" },
    date: "2022/08/13",
    genre: ["Twerk"]
  },
  {
    url: "https://www.youtube.com/embed/HQv6P9Ujpzw",
    title: { ja: "ユニ feat. 初音ミク, 知声", en: "Uni feat. Hatsune Miku, Chis-A" },
    date: "2022/10/09",
    genre: ["Hip-Hop"]
  },
  {
    url: "https://www.youtube.com/embed/xCUPh-FGJ1A",
    title: { ja: "トーキョーシミュレーター feat. 知声", en: "Tokyo Simulator feat. Chis-A" },
    date: "2022/10/09",
    genre: ["House"]
  },
  {
    url: "https://www.youtube.com/embed/5GaIMHYLwf8",
    title: { ja: "みにくいほしのこ feat. 知声", en: "Minikui Hoshi no Ko feat. Chis-A" },
    date: "2023/03/18",
    genre: ["Future Bass"]
  },
  {
    url: "https://www.youtube.com/embed/5BFT27Fe6TU",
    title: { ja: "僕の郷 feat. 知声", en: "Boku no Sato feat. Chis-A" },
    date: "2023/06/17",
    genre: ["Future Bass"]
  },
  {
    url: "https://www.youtube.com/embed/-PmUTd8UWzE",
    title: { ja: "世界の終わりとコインランドリー feat. 知声", en: "The End of the World and Laundromats feat. Chis-A" },
    date: "2023/08/04",
    genre: ["House"]
  },
  {
    url: "https://www.youtube.com/embed/e_Z5HnUAMa0",
    title: { ja: "誰かのための歌 feat. 知声", en: "The Song for Someone feat. Chis-A" },
    date: "2023/11/06",
    genre: ["Moombahton"]
  },
  {
    url: "https://www.youtube.com/embed/qlVuoNXzUBc",
    title: { ja: "シロ feat. 知声", en: "Shiro feat. Chis-A" },
    date: "2023/12/16",
    genre: ["Moombahton"]
  },
  {
    url: "https://www.youtube.com/embed/_VWyLgYY9gU",
    title: { ja: "月明かりじゃ物足んない feat. 知声", en: "Moonlight just isn't enough feat. Chis-A" },
    date: "2024/04/25",
    genre: ["House"]
  },
  {
    url: "https://www.youtube.com/embed/sqaKnJG7Iww",
    title: { ja: "クチダケ feat. 知声", en: "Kuchidake feat. Chis-A" },
    date: "2024/12/23",
    genre: ["House"]
  },
  {
    url: "https://www.youtube.com/embed/NlkQWj8gtWw",
    title: { ja: "アイムタフ！ feat. 知声", en: "I'm Tough! feat. Chis-A" },
    date: "2025/02/24",
    genre: ["Hip-Hop", "Future Bass"]
  },
  {
    url: "https://www.youtube.com/embed/GkPwlH5uRes",
    title: { ja: "カミサマコーリング feat. 知声", en: "God's Calling feat. Chis-A" },
    date: "2025/09/01",
    genre: ["Hip-Hop"]
  }
];

// ピックアップ動画データ
export const pickup_video = {
  url: "https://www.youtube.com/embed/bDXe_quHHzI",
  title: { ja: "【M3秋2025】佐藤くまM3出展情報【E-02a】", en: "[M3 Autumn 2025] Kuma J Sato Exhibition Info [E-02a]" },
  date: "2025/10/26",
  genre: ["出展情報"]
};

export default videos;
