import React, { useEffect, useState } from "react";
import { Header, Footer } from "./Home";
import videos from "../videos";

export default function Contents({ texts }) {
  useEffect(() => {
    const isJapanese = navigator.language.startsWith("ja");
    document.title = isJapanese ? texts.navButtons[1].label + " | 佐藤くま" : texts.navButtons[1].label + " | Kuma J Sato";
  }, [texts]);

  // ジャンル一覧（動画数順でソート）
  const genreCount = {};
  videos.forEach(v => v.genre.forEach(g => { genreCount[g] = (genreCount[g] || 0) + 1; }));
  const allGenres = Object.keys(genreCount).sort((a, b) => genreCount[b] - genreCount[a]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  // フィルタ
  let filteredVideos = videos;
  if (selectedGenre) {
    filteredVideos = filteredVideos.filter(v => v.genre.includes(selectedGenre));
  }
  // デフォルトでリストの後ろから（新しい順）表示
  filteredVideos = filteredVideos.slice().reverse();

  return (
    <div className="main-container flex flex-col min-h-screen">
      <Header texts={texts} />
      <section className="flex-1 flex flex-col items-center justify-center w-full">
        <h2 className="text-xl font-bold mb-2" style={{ textAlign: 'center' }}>{texts.navButtons[1].label}</h2>
        {/* ジャンル選択ボタン */}
        <div style={{ marginBottom: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {allGenres.map(genre => (
            <button
              key={genre}
              className={`genre-toggle-btn${selectedGenre === genre ? ' active' : ''}`}
              onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
            >{genre}</button>
          ))}
        </div>
        <div className="youtube-wrapper flex flex-wrap justify-center gap-6 w-full">
          {filteredVideos.map((video, idx) => (
            <div className="youtube-video" style={{ maxWidth: 500, width: '100%' }} key={video.url+idx}>
              <iframe
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '280px', borderRadius: '12px', border: 'none' }}
              ></iframe>
              <div style={{ marginTop: 8, textAlign: 'center' }}>
                <div className="font-bold text-base" style={{ fontWeight: 'bold' }}>{video.title}</div>
                <div className="text-sm text-gray-500">{video.date} | {video.genre.join(", ")}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
