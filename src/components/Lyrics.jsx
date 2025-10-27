import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Header, Footer } from './Home';

export default function Lyrics({ texts }) {
  const [items, setItems] = useState([]);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { slug } = useParams();

  // get localized section label/icon for Lyrics (not in navButtons)
  const lyricsSection = texts && texts.lyricsSection ? texts.lyricsSection : null;

  useEffect(() => {
    fetch('/lyrics/lyrics.json')
      .then(r => r.json())
      .then(data => setItems(data.sort((a,b)=> new Date(b.date) - new Date(a.date))))
      .catch(err => console.error('lyrics list load error', err));
  }, []);

  useEffect(() => {
    if (!slug) {
      setContent('');
      return;
    }
    fetch(`/lyrics/${slug}.md`)
      .then(r => { if(!r.ok) throw new Error('not found'); return r.text(); })
      .then(md => setContent(md))
      .catch(() => setContent('# 404\n\n歌詞が見つかりません'));
  }, [slug]);

  // find current lyric item (to get youtube embed if present)
  const currentItem = items.find(i => i.slug === slug);

  const toYouTubeEmbed = (url) => {
    if (!url) return '';
    try {
      if (url.includes('youtube.com/embed')) return url;
      if (url.includes('watch?v=')) {
        const id = url.split('v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      return url;
    } catch (e) {
      return url;
    }
  };

  // set document title from current item title when viewing a lyric
  useEffect(() => {
    const isJapanese = navigator.language.startsWith('ja');
    if (slug && currentItem && currentItem.title) {
      document.title = `${currentItem.title} | ${isJapanese ? '佐藤くま' : 'Kuma J Sato'}`;
    } else if (texts && texts.navButtons && texts.navButtons[0]) {
      document.title = `${texts.navButtons[0].label} | ${isJapanese ? '佐藤くま' : 'Kuma J Sato'}`;
    }
  }, [slug, currentItem, texts]);

  return (
    <div className="main-container flex flex-col min-h-screen">
      <Header texts={texts} />
      <main>
        <section className="w-full bg-white rounded shadow p-4 mb-8">
          <h2 className="section-title-wrap">
            {lyricsSection && lyricsSection.icon ? (
              <i className={`${lyricsSection.icon} section-icon`} aria-hidden="true"></i>
            ) : (
              <span className="section-icon">🎵</span>
            )}
            {lyricsSection && lyricsSection.label ? lyricsSection.label : 'Lyrics'}
          </h2>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>
            {!slug && (
              <aside style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', width: '100%', maxWidth: 1024 }}>
                {items.map(i => (
                  <div key={i.slug} className={`youtube-video blog-list-item`} style={{ maxWidth: 500, width: '100%', cursor: 'pointer' }} onClick={() => navigate(`/lyrics/${i.slug}`)}>
                    <div style={{ padding: 12, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                      <div style={{ fontWeight: 700, marginBottom: 6 }}>{i.title}</div>
                      <div style={{ color: '#6b7280', marginBottom: 8 }}>{i.date}</div>
                      <div>{i.excerpt}</div>
                    </div>
                  </div>
                ))}
              </aside>
            )}
            {slug && (
              <article style={{ flex: '1 1 100%', maxWidth: 800, minWidth: 320, margin: '0 auto' }}>
                {/* If current lyric item has a youtube link, render embed at top (same style as Contents MV) */}
                {currentItem && currentItem.youtube && (
                  <div className="youtube-video" style={{ margin: '0 auto 12px auto' }}>
                    <iframe
                      src={toYouTubeEmbed(currentItem.youtube)}
                      title={`${currentItem.title} - video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100%', height: '280px', borderRadius: '12px', border: 'none' }}
                    ></iframe>
                  </div>
                )}

                {/* Display title from JSON above the markdown content */}
                {currentItem && currentItem.title && (
                  <div className="lyric-page-title" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: 12, textAlign: 'center' }}>
                    {currentItem.title}
                  </div>
                )}

                <div className="markdown-article" style={{ padding: 16, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', margin: '0 auto', maxWidth: 500 }}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} children={content} />
                </div>
              </article>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
