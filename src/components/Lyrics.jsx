import React, { useEffect, useState, useCallback } from 'react';
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

  // prepare metadata display (composer/lyricist/arranger/author/date/year) with simple i18n
  const isJapanese = navigator.language.startsWith('ja');
  const metaLabels = {
    composer: isJapanese ? '作曲' : 'Composer',
    arranger: isJapanese ? '編曲' : 'Arranger',
    author: isJapanese ? '作曲/編曲' : 'Author',
    lyricist: isJapanese ? '作詞' : 'Lyricist',
    mixing: isJapanese ? 'MIX' : 'Mixing',
    illust: isJapanese ? 'イラスト' : 'Illust',
    movie: isJapanese ? '映像' : 'Movie',
    date: isJapanese ? '公開日' : 'Published',
    event: isJapanese ? '参加イベント' : 'Event'
  };
  // show author (作/編) before lyricist (作詞)
  const metaKeys = ['composer', 'author', 'lyricist', 'arranger', 'mixing', 'illust', 'movie', 'date', 'event'];

  // helper to resolve localized field: accepts either a string or an object like {ja: '日本語', en: 'English'}
  const resolveLocalized = useCallback((obj) => {
    if (obj == null) return null;
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'object') {
      if (isJapanese) return obj.ja || obj.jp || obj['日本語'] || obj.en || Object.values(obj)[0];
      return obj.en || obj['en-US'] || obj.ja || Object.values(obj)[0];
    }
    return String(obj);
  }, [isJapanese]);

  const currentMeta = currentItem
    ? metaKeys
        .filter(k => currentItem[k] !== undefined && currentItem[k] !== null && resolveLocalized(currentItem[k]) !== null)
        .map(k => ({ key: k, label: metaLabels[k] || k, value: resolveLocalized(currentItem[k]) }))
    : [];

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
      const resolvedTitle = resolveLocalized(currentItem.title) || currentItem.title;
      document.title = `${resolvedTitle} | ${isJapanese ? '佐藤くま' : 'Kuma J Sato'}`;
    } else if (texts && texts.navButtons && texts.navButtons[0]) {
      document.title = `${texts.navButtons[0].label} | ${isJapanese ? '佐藤くま' : 'Kuma J Sato'}`;
    }
  }, [slug, currentItem, texts, resolveLocalized]);

  return (
    <div className="main-container flex flex-col min-h-screen">
      <Header texts={texts} />
      <main>
        <section className="w-full bg-white rounded shadow p-4 mb-8">
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>
            {!slug && (
              <aside style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', width: '100%', maxWidth: 1024 }}>
                {items.map(i => (
                  <div key={i.slug} className={`youtube-video blog-list-item`} style={{ maxWidth: 500, width: '100%', cursor: 'pointer' }} onClick={() => navigate(`/lyrics/${i.slug}`)}>
                    <div style={{ padding: 12, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                      <div style={{ fontWeight: 800, marginBottom: 6 }}>{resolveLocalized(i.title)}</div>
                      <div style={{ color: '#6b7280', marginBottom: 8 }}>{i.date}</div>
                      {i.excerpt && <div>{i.excerpt}</div>}
                    </div>
                  </div>
                ))}
              </aside>
            )}
            {slug && (
              <article style={{ flex: '1 1 100%', maxWidth: 800, minWidth: 320, margin: '0 auto' }}>

                {/* Display title from JSON above the markdown content (moved above embed) */}
                {currentItem && currentItem.title && (
                  <div className="lyric-page-title" style={{ fontSize: '1.5rem', fontWeight: 900, margin: 12, textAlign: 'center' }}>
                    {resolveLocalized(currentItem.title)}
                  </div>
                )}

                {/* If current lyric item has a youtube link, render embed (now below title) */}
                {currentItem && currentItem.youtube && (
                  <div className="youtube-video" style={{ margin: '0 auto 12px auto' }}>
                    <iframe
                      src={toYouTubeEmbed(currentItem.youtube)}
                      title={`${resolveLocalized(currentItem.title) || currentItem.title} - video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ width: '100%', height: '280px', borderRadius: '12px', border: 'none' }}
                    ></iframe>
                  </div>
                )}

                {/* render metadata (composer/lyricist/arranger/etc) between embed and markdown */}
                {currentMeta && currentMeta.length > 0 && (
                  <div className="lyric-meta" style={{ maxWidth: 500, margin: '0 auto 12px auto', padding: 12, borderRadius: 10, display: 'flex', gap: '0.5em', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {currentMeta.map(m => (
                      <div key={m.key} style={{ minWidth: 120, textAlign: 'center' }}>
                        <div style={{ fontSize: '0.85rem'}}>{m.label}</div>
                        <div style={{ fontWeight: 700 }}>{m.value}</div>
                      </div>
                    ))}
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
