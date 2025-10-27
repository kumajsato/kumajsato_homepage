const en = {
  // Header-related
  navButtons: [
    { label: "Home", link: "/", icon: "fa-solid fa-house" },
    { label: "Contents", link: "/contents", icon: "fa-solid fa-film" },
    { label: "About Me", link: "/aboutme", icon: "fa-solid fa-user" },
    { label: "Links", link: "/links", icon: "fa-solid fa-link" },
    { label: "Blog", link: "/blog", icon: "fa-solid fa-pen-to-square" }
  ],

  // Home-related
  intro: "Vocaloid producer and EDM composer <strong>Kuma J Sato</strong>.<br>You can purchase CDs and goods at <a href='https://kumajsato.booth.pm/' target='_blank'><i class='fa-solid fa-store'></i><strong>BOOTH</strong></a>.",
  latestNewsTitle: "Latest News",
  latestVideoTitle: "Latest Video",
  pickupVideoTitle: "🔥🔥🔥Pickup🔥🔥🔥",
  latestNews: [
    { date: "2025/09/01", content: "'God's Calling feat. Chis-A' has been released." },
    { date: "2025/10/11", content: "Homepage published." },
    { date: "2025/10/26", content: "Scheduled to exhibit at M3 <a href='https://catalog.m3net.jp/2025f/circles.html?circleId=560308' target='_blank'><strong>[E-02a]</strong></a>!" },
    { date: "2025/10/15", content: "CD 'I'm Tough feat. Chis-A - EP' info for M3 and THE VOC@LOiD M@STER published." },
    { date: "2025/10/27", content: "<a href='/#/blog/m3-autumn-2025'>M3 Autumn 2025 exhibition report</a> added to the blog." },
    { date: "2025/10/27", content: "Streaming links for 'I'm Tough! feat. Chis-A - EP' have been added." },
    { date: "2025/11/29", content: "Scheduled to exhibit at Vocaloid-only event 'THE VOC@LOiD M@STER 61' <strong>[F08]</strong>!" }
  ],

  // Contents-related
  contentsTabs: {
    youtube: "YouTube",
    videos: "YouTube",
    youtubeIcon: "fa-brands fa-youtube",
    streaming: "Streaming",
    streamingIcon: "fa-solid fa-compact-disc",
    other: "Streaming"
  },
  // label for lyrics link in Contents MV list
  contentsLyricsLink: "Lyrics",
  contentsTracksLabel: "-Tracks-",

  // Streaming / album data for Contents page
  contentsStreaming: [
    {
      image: process.env.PUBLIC_URL + '/images/cd_jacket/uni.png',
      title: "Uni feat. HatsuneMiku, Chis-A - EP",
      author: "Kuma J Sato",
      tracks: ["Fiction feat. Hatsune Miku", "Uni feat. Hatsune Miku, Chis-A", "Kid feat. Hatsune Miku", "Tokyo Simulator feat. Chis-A"],
      year: "2022",
      spotify: "https://open.spotify.com/intl-ja/album/3H55VpG1vkT1ewFa3rF1Sl",
      apple: "https://music.apple.com/jp/album/uni-feat-hatsunemiku-chis-a-ep/1654591450",
      other: "https://nodee.net/a/6pvadib5"
    },
    {
      image: process.env.PUBLIC_URL + '/images/cd_jacket/coinlaundry.png',
      title: 'The End of the World and Laundromats feat. Chis-A - EP',
      author: 'Kuma J Sato',
      tracks: ["Minikui Hoshi no Ko feat. Chis-A", "Boku no Sato feat. Chis-A", "The End of the World and Laundromats feat. Chis-A", "The Song for Someone feat. Chis-A"],
      year: '2023',
      spotify: "https://open.spotify.com/intl-ja/album/2iblpC4ZTXBSRUyQn1lT50",
      apple: "https://music.apple.com/jp/album/the-end-of-the-world-and-laundromats-ep/1719236307",
      other: "https://nodee.net/a/jzw0bs86"
    },
    {
      image: process.env.PUBLIC_URL + '/images/cd_jacket/imtough.png',
      title: "I'm Tough feat. Chis-A - EP",
      author: 'Kuma J Sato',
      tracks: ["Moonlight just isn't enough feat. Chis-A", "Kuchidake feat. Chis-A", "God's Calling feat. Chis-A", "I'm Tough! feat. Chis-A"],
      year: '2025',
      spotify: "https://open.spotify.com/intl-ja/album/25hCALKh3hBdjLqqdQrlzN",
      apple: "https://music.apple.com/jp/album/im-tough-feat-chis-a-ep/1847800703",
      other: "https://nodee.net/a/e1w9ecnyx8h2"
    }
  ],

  // About Me
  aboutMeSections: [
    {
      title: "Name",
      text: "<b>Kuma J Sato</b>"
    },
    {
      title: "Profile",
      text: `
        Born on October 11, 1996 in Tokyo.<br>
        Started producing music mainly EDM at age 20, influenced by Avicii, Marshmello, and Skrillex.<br>
        Released first VOCALOID song 'Fiction feat. Hatsune Miku' at age 25.<br>
        Deeply moved by Voisona's voice 'Chis-A', continues activities as a Vocaloid producer.<br>
        Distributes CDs at doujin music events such as 'M3' and Vocaloid-only events like 'THE VOC@LOiD M@STER'.
      `
    },
    {
      title: "Specialties",
      text: "Western pop style<br>Hip-Hop<br>EDM<br>　- Moombahton<br>　- Twerk<br>　- House<br>　- Trap<br>　- Future Bass<br>"
    },
    {
      title: "Activity History",
      text: `
         2022/07/28 'Fiction feat. Hatsune Miku' participated in Mushoku Toumei Festival. (Own post: 2022/08/13)<br>
         2022/10/07 'Uni feat. Hatsune Miku, Chis-A' participated in Bokakore 2022 Autumn Rookie.<br>
         2022/10/07 'Tokyo Simulator feat. Chis-A' participated in Bokakore 2022 Autumn Rookie.<br>
         2023/03/18 'Minikui Hoshinoko feat. Chis-A' participated in Bokakore 2023 Spring Rookie.<br>
         2023/06/17 'Boku no Sato feat. Chis-A' participated in Illustration Unification Festival ~Fukami Festival~.<br>
         2023/08/04 'The End of the World and Laundromats feat. Chis-A' participated in Bokakore 2023 Summer Rookie.<br>
         2023/11/02 'The Song for Someone feat. Chis-A' participated in Mushoku Toumei Festival II. (Own post: 2023/11/06)<br>
         2023/12/16 'Shiro feat. Chis-A' participated in Illustration Unification Festival ~Gomahichi Festival~.<br>
         2024/04/25 'Moonlight just isn't enough feat. Chis-A'<br>
         2024/08/05 'There's a voice feat. Chis-A' participated in Bokaeiri. (Published only on niconico)<br>
         2024/12/23 'Kuchidake feat. Chis-A'<br>
         2025/02/24 'I'm Tough! feat. Chis-A'<br>
         2025/09/01 'God's Calling feat. Chis-A'<br>
         `
    }
  ],

  // External links
  externalLinks: [
    { label: "BOOTH", id: "Peparoni Donuts", url: "https://kumajsato.booth.pm/", icon: "fa-solid fa-store" },
    { label: "X (formerly Twitter)", id: "@kumajsato", url: "https://x.com/kumajsato", icon: "fa-brands fa-x-twitter" },
    { label: "instagram", id: "@kumajsato", url: "https://www.instagram.com/kumajsato", icon: "fa-brands fa-instagram" },
    { label: "TikTok", id: "@kumajsato", url: "https://www.tiktok.com/@kumajsato", icon: "fa-brands fa-tiktok" },
    { label: "Youtube", id: "@kumajsato", url: "https://www.youtube.com/@kumajsato", icon: "fa-brands fa-youtube" },
    { label: "niconico", id: "14922039", url: "https://www.nicovideo.jp/user/14922039", icon: "fa-solid fa-tv" },
    { label: "piapro", id: "kumajsato", url: "https://piapro.jp/kumajsato", icon: "fa-solid fa-music" },
    { label: "SoundCloud", id: "kumajsato", url: "https://soundcloud.com/kumajsato", icon: "fa-brands fa-soundcloud" }
  ],
};
export default en;
