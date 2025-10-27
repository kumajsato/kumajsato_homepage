import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Header, Footer } from './Home';

export default function Blog({ texts }) {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { slug } = useParams();

  // find blog nav button from locale navButtons array (fallbacks included)
  const blogButton = (texts && texts.navButtons && Array.isArray(texts.navButtons))
    ? (texts.navButtons.find(b => b.link === '/blog') || texts.navButtons.find(b => /blog/i.test(b.label)))
    : null;

  // current post metadata when viewing a single post
  const currentPost = slug ? posts.find(p => p.slug === slug) : null;

  // set document title for Blog page (localized)
  useEffect(() => {
    const isJapanese = navigator.language.startsWith('ja');
    if (slug && currentPost && currentPost.title) {
      document.title = `${currentPost.title} | ${isJapanese ? '佐藤くま' : 'Kuma J Sato'}`;
    } else {
      const label = blogButton && blogButton.label ? blogButton.label : 'Blog';
      document.title = isJapanese ? `${label} | 佐藤くま` : `${label} | Kuma J Sato`;
    }
  }, [slug, currentPost, texts, blogButton]);

  // responsive switch for header layout: row by default, column when width <= 800
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth <= 800);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // tag filter and sort state for listing
  const [selectedTag, setSelectedTag] = useState(null);
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' = newest first

  useEffect(() => {
    fetch('/blog/posts.json')
      .then(r => r.json())
      .then(data => {
        const sorted = data.slice().sort((a,b) => new Date(b.date) - new Date(a.date));
        setPosts(sorted);
      })
      .catch(err => console.error('posts.json load error', err));
  }, []);

  // Derive tag counts from posts
  const tagCount = {};
  posts.forEach(p => (p.tags || []).forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; }));
  const allTags = Object.keys(tagCount).sort((a,b) => tagCount[b] - tagCount[a]);

  useEffect(() => {
    if (!slug) {
      setContent('');
      return;
    }
    fetch(`/blog/${slug}.md`)
      .then(r => { if(!r.ok) throw new Error('not found'); return r.text(); })
      .then(md => setContent(md))
      .catch(() => setContent('# 404\n\n投稿が見つかりません'));
  }, [slug]);

  return (
    <div className="main-container flex flex-col min-h-screen">
      <Header texts={texts} />
      <main>
        <section className="w-full bg-white rounded shadow p-4 mb-8">
          <h2 className="section-title-wrap">
            {blogButton && blogButton.icon ? (
              <i className={`${blogButton.icon} section-icon`} aria-hidden="true"></i>
            ) : (
              <span className="section-icon">📝</span>
            )}
            {blogButton && blogButton.label ? blogButton.label : 'Blog'}
          </h2>

          <div className="blog-grid" style={{ display: 'flex', gap: 16, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>

            {/* Listing view */}
            {!slug && (
              <div style={{ width: '100%', maxWidth: 1024, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Tag filters and sort toggle */}
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        className={`genre-toggle-btn${selectedTag === tag ? ' active' : ''}`}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        title={`${tagCount[tag]} posts`}
                        aria-pressed={selectedTag === tag}
                      >{tag} ({tagCount[tag]})</button>
                    ))}
                  </div>

                  <div style={{ marginLeft: 'auto' }}>
                    <button className="tab-btn" onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')} aria-label="Toggle sort order" title={sortOrder === 'desc' ? 'Newest first' : 'Oldest first'}>
                      <i className={`fa-solid ${sortOrder === 'desc' ? 'fa-sort-amount-down' : 'fa-sort-amount-up'}`} aria-hidden="true"></i>
                    </button>
                  </div>
                </div>

                <aside className="blog-list" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'flex-start', width: '100%' }}>
                  {posts
                    .filter(p => !selectedTag || (p.tags || []).includes(selectedTag))
                    .slice()
                    .sort((a,b) => {
                      const da = new Date(a.date || 0).getTime();
                      const db = new Date(b.date || 0).getTime();
                      return sortOrder === 'desc' ? db - da : da - db;
                    })
                    .map(p => (
                      <div key={p.slug} className={`youtube-video blog-list-item`} style={{ maxWidth: 500, width: '100%', cursor: 'pointer' }} onClick={() => navigate(`/blog/${p.slug}`)}>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: 12, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', width: '100%', boxSizing: 'border-box' }}>
                          {p.thumbnail ? (
                            <img src={p.thumbnail} alt={p.title} style={{ width: 160, height: 160, objectFit: 'cover', borderRadius: 8, flex: '0 0 160px' }} />
                          ) : (
                            <div className="thumbnail-placeholder" role="img" aria-label="No image" style={{ width: 160, height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa', color: '#6b7280', borderRadius: 8, flex: '0 0 160px', fontWeight: 700 }}>NO IMAGE</div>
                          )}
                          <div style={{ flex: 1 }}>
                            <div className="font-bold blog-title" style={{ fontWeight: '700', marginBottom: 6 }}>{p.title}</div>
                            <div className="text-sm blog-date" style={{ marginBottom: 8 }}>{p.date}</div>
                            <div className="blog-excerpt" style={{ }}>{p.excerpt}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                </aside>
              </div>
            )}

            {/* Detail view */}
            {slug && (
              <article className="blog-content" style={{ flex: '1 1 100%', maxWidth: 1000, minWidth: 320, margin: '0 auto' }}>
                <div className="markdown-article" style={{ padding: '2em 5em', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  {/* Title and meta: title and (date+tags) in separate flex boxes; overall flex becomes column on narrow screens */}
                  <div className="blog-header-flex" style={{ display: 'flex', flexDirection: isNarrow ? 'column' : 'row', alignItems: isNarrow ? 'flex-start' : 'center', gap: 12, marginBottom: 12 }}>
                    <div className="blog-title-box" style={{ flex: '1 1 auto' }}>
                      <h1 className="blog-title-main" style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>{currentPost?.title ?? '...'}</h1>
                    </div>
                    <div className="blog-meta-box" style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: isNarrow ? 'flex-start' : 'flex-end' }}>
                      <div className="blog-date" style={{ color: '#6b7280', fontSize: '0.95rem' }}>{currentPost?.date ?? ''}</div>
                      <div className="blog-tags" style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: isNarrow ? 'flex-start' : 'flex-end' }}>
                        {(currentPost?.tags || []).map((t, i) => (
                          <span className="blog-tag" key={i} style={{ background: '#f3f4f6', padding: '4px 8px', borderRadius: 6, fontSize: '0.85rem' }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

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
