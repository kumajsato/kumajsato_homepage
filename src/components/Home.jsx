import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import videos from "../videos";

export function Header({ texts }) {
  return (
    <header className="w-full flex flex-col items-center py-8">
      <div style={{ width: '75%', maxWidth: 420, margin: '0 auto', padding: '2% 0', pointerEvents: 'none' }}>
        <Link to="/" style={{ display: 'block', pointerEvents: 'auto', margin: '0 10%' }}>
          <LogoSVG style={{ width: '100%', maxWidth: 250, minWidth: 80, display: 'block', margin: '0 auto' }} />
        </Link>
      </div>
      <nav className="header-nav mt-6">
        {texts.navButtons.map((btn, i) => (
          <Link key={i} to={btn.link} className="nav-btn">
            <span className="nav-btn-inner" style={{ display: 'block', alignItems: 'center', justifyContent: 'center' }}>
              {/* アイコンをページごとに表示 */}
              {i === 0 && <i className="fa-solid fa-house" style={{ marginTop: 8, marginBottom: 8 }}></i>}
              {i === 1 && <i className="fa-solid fa-film" style={{ marginTop: 8, marginBottom: 8 }}></i>}
              {i === 2 && <i className="fa-solid fa-user" style={{ marginTop: 8, marginBottom: 8 }}></i>}
              {i === 3 && <i className="fa-solid fa-link" style={{ marginTop: 8, marginBottom: 8 }}></i>}
              <span className="nav-btn-label">{btn.label}</span>
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      &copy; 2025 Kuma J Sato. All rights reserved.
    </footer>
  );
}

export function LogoSVG(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 100" width={props.width || 480} height={props.height || 104} {...props}>
      <g>
        <path d="M88.67,81.7c7.08-8.63,11.33-19.67,11.33-31.7s-4.23-23-11.27-31.62l-31.66,31.69,31.6,31.63Z"/>
        <path d="M42.93,50.07L81.66,11.31C73.04,4.24,62.02,0,50,0,22.39,0,0,22.39,0,50s22.39,50,50,50c11.98,0,22.97-4.22,31.58-11.24l-38.65-38.69Z"/>
      </g>
      <path d="M175,.25v54.75s-10,0-10,0V.25c-25.27,2.51-45,23.82-45,49.75,0,27.61,22.39,50,50,50s50-22.39,50-50c0-25.93-19.73-47.24-45-49.75Z"/>
      <g>
        <path d="M321.65,11.34C313.03,4.28,302.01.04,289.99.04s-23.04,4.24-31.66,11.3l31.66,31.63,31.66-31.63Z"/>
        <path d="M289.99,57.1l-38.73-38.69c-7.04,8.62-11.27,19.62-11.27,31.62,0,27.61,22.39,50,50,50s50-22.39,50-50c0-12-4.23-23.01-11.27-31.62l-38.73,38.69Z"/>
      </g>
      <g>
        <path d="M378.36,88.68c8.64,7.07,19.69,11.32,31.73,11.32s23.04-4.21,31.64-11.23l-31.73-31.7-31.64,31.61Z"/>
        <path d="M410,42.93l38.8,38.77c7-8.57,11.2-19.53,11.2-31.52C460,22.57,437.75,0,410.09,0s-50.09,22.39-50.09,50c0,11.99,4.23,23,11.29,31.61l38.71-38.68Z"/>
      </g>
    </svg>
  );
}

export default function Home({ texts }) {
  useEffect(() => {
    const isJapanese = navigator.language.startsWith('ja');
    document.title = isJapanese ? texts.navButtons[0].label + ' | 佐藤くま' : texts.navButtons[0].label + ' | Kuma J Sato';
  }, [texts]);

  // 最新情報をdate順で最新3件のみ表示
  const latestNewsSorted = texts.latestNews
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="main-container flex flex-col min-h-screen">
      <Header texts={texts} />
      {/* 自己紹介欄 */}
      <section className="home-intro w-full text-center text-gray-700 mb-8">
        <p dangerouslySetInnerHTML={{ __html: texts.intro }} />
      </section>
      {/* 最新情報欄 */}
      <section className="w-full bg-white rounded shadow p-4 mb-8">
        <h2 className="text-xl font-bold mb-2" style={{ textAlign: 'center' }}>{texts.latestNewsTitle}</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }} className="home-latest-news-section text-gray-700 space-y-2">
          {latestNewsSorted.map((news, i) => (
            <li key={i} className="flex flex-row items-center w-full" style={{ borderBottom: i !== latestNewsSorted.length - 1 ? '1px solid #DDDDDD' : 'none', paddingBottom: 6, marginBottom: 6 }}>
              <span className="font-semibold text-sm text-gray-500" style={{ minWidth: 100, maxWidth: 120, flexShrink: 0, textAlign: 'right', whiteSpace: 'nowrap' }}>{news.date} : </span>
              <span style={{ minWidth: 10, display: 'inline-block' }}></span>
              <span className="text-base" style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: news.content }} />
            </li>
          ))}
        </ul>
      </section>
      {/* 最新動画欄 */}
      <section className="w-full bg-white rounded shadow p-4 mb-8">
        <h2 className="text-xl font-bold mb-2" style={{ textAlign: 'center' }}>{texts.latestVideoTitle}</h2>
        <div className="youtube-wrapper" style={{ justifyContent: 'center' }}>
          <div className="youtube-video" style={{ maxWidth: 500, width: '100%' }}>
            <iframe
              src={videos[videos.length-1].url}
              title={videos[videos.length-1].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '280px', borderRadius: '12px', border: 'none' }}
            ></iframe>
            <div style={{ marginTop: 8, textAlign: 'center' }}>
              <div className="font-bold text-base" style={{ fontWeight: 'bold' }}>{videos[videos.length-1].title}</div>
              <div className="text-sm text-gray-500">{videos[videos.length-1].date} | {videos[videos.length-1].genre.join(", ")}</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
