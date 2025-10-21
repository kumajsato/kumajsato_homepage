import React, { useEffect } from "react";
import { Header, Footer } from "./Home";

export default function AboutMe({ texts }) {
  useEffect(() => {
    const isJapanese = navigator.language.startsWith('ja');
    document.title = isJapanese ? texts.navButtons[2].label + ' | 佐藤くま' : texts.navButtons[2].label + ' | Kuma J Sato';
  }, [texts]);

  return (
    <div className="main-container flex flex-col min-h-screen">
      <Header texts={texts} />
      <main className="flex-1 flex flex-col items-center justify-center">
        {/* 自己紹介欄 */}
        <section className="w-full max-w-lg mx-auto bg-white rounded shadow p-4 mb-8">
          <div className="section-title-wrap" style={{ marginBottom: 8 }}>
            {texts.navButtons && texts.navButtons[2] && texts.navButtons[2].icon && (
              <i className={`${texts.navButtons[2].icon} section-icon`} aria-hidden="true"></i>
            )}
            <h2 className="text-xl font-bold mb-2" style={{ textAlign: 'center' }}>{texts.navButtons[2].label}</h2>
          </div>
          <div className="aboutme-flex" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
            <img src={require('../icon_human_300.png')} alt="プロフィール画像" style={{ maxWidth: 300, width: '100%', height: 'auto'}} />
            <div className="home-intro text-gray-700" style={{ flex: '1 1 200px', minWidth: 200 }}>
              <div className="aboutme-table" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {texts.aboutMeSections.map((section, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '18px', marginBottom: 0 }}>
                    <div className="font-bold text-lg aboutme-title" style={{ minWidth: 90, maxWidth: 120, textAlign: 'right', paddingRight: 8 }}>{section.title}</div>
                    <div style={{ flex: 1, textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: section.text }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
