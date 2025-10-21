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
  // タブ状態（'videos' or 'streaming'）
  const [activeTab, setActiveTab] = useState('videos');

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
      <main>
      <section className="flex-1 flex flex-col items-center justify-center w-full">
        {/* タイトルとタブ */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="section-title-wrap" style={{ marginBottom: 8 }}>
            {texts.navButtons && texts.navButtons[1] && texts.navButtons[1].icon && (
              <i className={`${texts.navButtons[1].icon} section-icon`} aria-hidden="true"></i>
            )}
            <h2 className="text-xl font-bold mb-2" style={{ textAlign: 'center' }}>{texts.navButtons[1].label}</h2>
          </div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 18 }} role="tablist" aria-label="Contents Tabs">
            <button
              className={`tab-btn${activeTab === 'videos' ? ' active' : ''}`}
              onClick={() => setActiveTab('videos')}
              role="tab"
              aria-selected={activeTab === 'videos'}
            >
              {texts.contentsTabs && texts.contentsTabs.youtubeIcon && (
                <i className={`${texts.contentsTabs.youtubeIcon} tab-icon`} aria-hidden="true" style={{ marginRight: 8 }}></i>
              )}
              {((texts.contentsTabs && (texts.contentsTabs.youtube || texts.contentsTabs.videos)) || 'YouTube')}
            </button>

            <button
              className={`tab-btn${activeTab === 'streaming' ? ' active' : ''}`}
              onClick={() => setActiveTab('streaming')}
              role="tab"
              aria-selected={activeTab === 'streaming'}
            >
              {texts.contentsTabs && texts.contentsTabs.streamingIcon && (
                <i className={`${texts.contentsTabs.streamingIcon} tab-icon`} aria-hidden="true" style={{ marginRight: 8 }}></i>
              )}
              {((texts.contentsTabs && (texts.contentsTabs.streaming || texts.contentsTabs.other)) || 'Streaming')}
            </button>
          </div>
        </div>

        {/* タブ切替内容 */}
        {activeTab === 'videos' && (
          <>
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
          </>
        )}

        {activeTab === 'streaming' && (
          <div style={{ width: '100%', maxWidth: 1024, padding: 0 }}>
            {/* Streaming items grid */}
            {/* prepare items */}
            {(() => {
              const items = (texts.contentsStreaming && texts.contentsStreaming.length > 0) ? texts.contentsStreaming : [
                {
                  image: process.env.PUBLIC_URL + '/images/サムネ.png',
                  title: 'Sample Album',
                  author: 'Kuma J Sato',
                  tracks: ['Track A', 'Track B', 'Track C'],
                  year: '2025',
                  spotify: 'https://open.spotify.com/',
                  apple: 'https://music.apple.com/',
                  other: ''
                }
              ];
              return (
                <div className="streaming-grid">
                  {items.map((item, idx) => (
                    <div className="streaming-card" key={idx}>
                      {/* Jacket image column */}
                      <img className="streaming-image" src={item.image} alt={item.title} />

                      {/* Meta column: title / author / year */}
                      <div className="streaming-meta">
                        <div className="streaming-title">{item.title}</div>
                        <div className="streaming-author">{item.author}</div>
                        <div className="streaming-year">{item.year}</div>
                      </div>

                      {/* Tracks column */}
                      {item.tracks && (
                        <div>
                          <div className="streaming-tracks-label" style={{ fontWeight: 700, marginBottom: 6 }}>{texts.contentsTracksLabel || '-Tracks-'}</div>
                          <ol className="streaming-tracks" aria-label={`${item.title} tracks`}>
                            {item.tracks.map((t, i) => <li key={i}>{t}</li>)}
                          </ol>
                        </div>
                      )}

                      {/* Links column */}
                      <div className="streaming-links" style={{ marginTop: 10 }}>
                        {item.apple && (
                          <a href={item.apple} target="_blank" rel="noopener noreferrer" className="stream-link apple"><i className="fa-brands fa-apple" aria-hidden="true"></i> <span>Apple Music</span></a>
                        )}
                        {item.spotify && (
                          <a href={item.spotify} target="_blank" rel="noopener noreferrer" className="stream-link spotify"><i className="fa-brands fa-spotify" aria-hidden="true"></i> <span>Spotify</span></a>
                        )}
                        {item.other && (
                          <a href={item.other} target="_blank" rel="noopener noreferrer" className="stream-link other"><i className="fa-solid fa-link" aria-hidden="true"></i> <span>Other</span></a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}
      </section>
      </main>
     
      <Footer />
    </div>
  );
}
