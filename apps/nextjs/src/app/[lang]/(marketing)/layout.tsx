import Link from 'next/link';
import Script from 'next/script';
import type { Locale } from "~/config/i18n-config";
import { ShadcnHeader } from '~/components/shadcn-header';

export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  return (
    <>
      {/* Critical CSS loaded first to prevent flickering */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Critical styles for preventing layout shift */
        * {
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
        }
        
        .main-page-wrapper {
          visibility: visible !important;
          opacity: 1 !important;
          min-height: 100vh !important;
        }
        
        /* Ensure proper spacing for fixed header */
        main {
          padding-top: 2rem;
        }
      `}} />
      
      {/* Preload critical CSS resources */}
      <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" as="style" />
      <link rel="preload" href="/css/style.css" as="style" />
      <link rel="preload" href="/css/custom.css" as="style" />
      
      {/* External CSS - loaded after critical styles */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
      <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/custom.css" />
      <link rel="stylesheet" href="/css/responsive.css" />
      <link rel="stylesheet" href="/css/dark-theme.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/regular/style.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/fill/style.css" />
      
      <div className="main-page-wrapper bg-white text-dark min-h-screen" data-bs-theme="light">
        {/* ShadcnHeader */}
        <ShadcnHeader lang={lang} />

        {/* Page Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <div className="footer-three version-two">
          <div className="container">
            <div className="position-relative">
              <div className="row">
                <div className="col-xxl-5 col-lg-4 me-auto">
                  <div className="footer-intro mb-30 me-xxl-5 pe-xxl-4">
                    <h3>Subscribe to Kolektt <span>Newsletter</span>.</h3>
                    <form className="position-relative">
                      <input type="email" placeholder="Enter your email address" className="form-control" />
                      <button type="submit" className="tran3s"><i className="ph ph-paper-plane-right ms-auto"></i></button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-2 col-6">
                  <div className="footer-nav mb-40">
                    <ul className="footer-nav-link style-none">
                      <li><Link href={`/${lang}/about`}>About</Link></li>
                      <li><Link href={`/${lang}/bpm-collect`}>BPM Collect</Link></li>
                      <li><Link href={`/${lang}/hub`}>Hub</Link></li>
                      <li><Link href={`/${lang}/blog`}>Blog</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-6">
                  <div className="footer-nav mb-40">
                    <ul className="footer-nav-link style-none">
                      <li><Link href={`/${lang}/pricing`}>Pricing</Link></li>
                      <li><Link href="#">Privacy Policy</Link></li>
                      <li><Link href="#">Terms</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-2 col-lg-3">
                  <div className="footer-contact mb-20">
                    <p className="fw-500">Seoul, South Korea</p>
                    <Link href="#" className="tel fw-500 tran3s">support@kolektt.com</Link>
                    <ul className="style-none d-flex align-items-center social-icon">
                      <li><a href="#"><i className="ph-fill ph-facebook-logo"></i></a></li>
                      <li><a href="#"><i className="ph-fill ph-twitter-logo"></i></a></li>
                      <li><a href="#"><i className="ph-fill ph-instagram-logo"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bottom-footer">
              <div className="d-md-flex align-items-center justify-content-start">
                <p className="copyright-text m0"><span>@2025 Kolektt</span> All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scripts */}
      <Script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" strategy="beforeInteractive" />
      <Script src="/js/theme.js" strategy="lazyOnload" />
      
    </>
  );
}
