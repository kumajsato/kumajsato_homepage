import React, { useEffect } from "react";
import { Header, Footer } from "./Home";

export default function Links({ texts }) {
  useEffect(() => {
    const isJapanese = navigator.language.startsWith("ja");
    document.title = isJapanese ? texts.navButtons[3].label + " | 佐藤くま" : texts.navButtons[3].label + " | Kuma J Sato";
  }, [texts]);

  return (
    <div className="main-container flex flex-col min-h-screen">
      <Header texts={texts} />
      <main className="flex-1 flex flex-col items-center justify-center w-full">
        <section className="w-full max-w-lg mx-auto bg-white rounded shadow p-4 mb-8">
          <div className="section-title-wrap" style={{ marginBottom: 8 }}>
            {texts.navButtons && texts.navButtons[3] && texts.navButtons[3].icon && (
              <i className={`${texts.navButtons[3].icon} section-icon`} aria-hidden="true"></i>
            )}
            <h2 className="text-xl font-bold mb-2" style={{ textAlign: 'center' }}>{texts.navButtons[3].label}</h2>
          </div>
          <div className="external-links-wrapper">
            {texts.externalLinks.map((link, idx) => (
              <a
                key={link.url + link.id}
                href={link.url}
                className="external-link-box"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textAlign: 'center' }}
              >
                <i className={link.icon} style={{ fontSize: '1.4em', verticalAlign: 'middle', display: 'inline-block' }}></i>
                <div style={{ display: 'inline-block', textAlign: 'center' }}>
                  {link.label}
                  {link.id && (
                    <span style={{ display: 'block', fontSize: '80%', color: '#888', marginTop: 4, textAlign: 'center' }}>{link.id}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
