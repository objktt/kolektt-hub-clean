import Link from 'next/link';
import Script from 'next/script';
import type { Locale } from "~/config/i18n-config";

export default async function AboutPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  return (
    <>


        {/* Mission Section */}
        <div className="block-feature-mission bg-nine pt-130 lg-pt-80 pb-130 lg-pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="pe-lg-5">
                  <div className="title-six">
                    <h2 className="color-dark">Our Mission</h2>
                  </div>
                  <p className="fs-20 color-dark mb-40">
                    At Kolektt, we believe that every music collection tells a story. Our mission is to help 
                    collectors preserve, organize, and share their musical heritage through innovative technology.
                  </p>
                  <p className="fs-20 color-dark mb-40">
                    We're passionate about bridging the gap between analog collectors and digital tools, 
                    creating a platform where tradition meets innovation.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-center">
                  <div style={{fontSize: '120px', marginBottom: '20px'}}>🎵</div>
                  <p className="fs-18 color-dark" style={{opacity: '0.7', fontStyle: 'italic'}}>Music is our universal language</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="block-feature-values pt-130 lg-pt-80 pb-130 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 m-auto">
                <div className="text-center mb-80 lg-mb-40">
                  <div className="title-six">
                    <h2 className="color-dark">Our Values</h2>
                  </div>
                  <p className="fs-20 color-dark pt-25">What drives us every day</p>
                </div>
              </div>
            </div>
            
            <div className="row gx-xxl-5">
              <div className="col-lg-4 col-md-6">
                <div className="card-style-sixteen text-center mt-40">
                  <div className="icon tran3s d-flex align-items-center justify-content-center m-auto" 
                    style={{width: '80px', height: '80px', backgroundColor: '#e8f4fd', borderRadius: '50%', marginBottom: '30px'}}>
                    <span style={{fontSize: '36px'}}>🎯</span>
                  </div>
                  <h4 className="fw-bold mb-20">Precision</h4>
                  <p className="fs-18 color-dark">
                    We deliver accurate, reliable tools that collectors can depend on for their most treasured possessions.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-sixteen text-center mt-40">
                  <div className="icon tran3s d-flex align-items-center justify-content-center m-auto" 
                    style={{width: '80px', height: '80px', backgroundColor: '#e8f8f0', borderRadius: '50%', marginBottom: '30px'}}>
                    <span style={{fontSize: '36px'}}>🤝</span>
                  </div>
                  <h4 className="fw-bold mb-20">Community</h4>
                  <p className="fs-18 color-dark">
                    We foster connections between collectors, creating a supportive ecosystem for sharing and trading.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-sixteen text-center mt-40">
                  <div className="icon tran3s d-flex align-items-center justify-content-center m-auto" 
                    style={{width: '80px', height: '80px', backgroundColor: '#f4e8fd', borderRadius: '50%', marginBottom: '30px'}}>
                    <span style={{fontSize: '36px'}}>🚀</span>
                  </div>
                  <h4 className="fw-bold mb-20">Innovation</h4>
                  <p className="fs-18 color-dark">
                    We continuously push the boundaries of what's possible in music technology and collection management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="block-feature-story bg-nine pt-130 lg-pt-80 pb-130 lg-pb-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <div className="text-center mb-80 lg-mb-50">
                  <div className="title-six">
                    <h2 className="color-dark">Our Story</h2>
                  </div>
                </div>
                <div className="story-content">
                  <div className="row">
                    <div className="col-12">
                      <p className="fs-20 color-dark mb-40">
                        Kolektt was born from a simple observation: music collectors spend countless hours 
                        organizing their collections manually, often struggling with outdated tools and 
                        disconnected systems.
                      </p>
                      <p className="fs-20 color-dark mb-40">
                        Our founding team, comprised of music enthusiasts, technology experts, and UX designers, 
                        set out to create a platform that would respect the analog nature of collecting while 
                        leveraging cutting-edge digital tools.
                      </p>
                      <p className="fs-20 color-dark mb-40">
                        Today, Kolektt serves thousands of collectors worldwide, from vinyl enthusiasts to 
                        rare record dealers, providing them with the tools they need to catalog, analyze, 
                        and share their collections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="block-feature-different pt-130 lg-pt-80 pb-130 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 m-auto">
                <div className="text-center mb-80 lg-mb-40">
                  <div className="title-six">
                    <h2 className="color-dark">What Makes Us Different</h2>
                  </div>
                  <p className="fs-20 color-dark pt-25">Innovation that serves collectors</p>
                </div>
              </div>
            </div>
            
            <div className="row gx-xxl-5">
              <div className="col-lg-6 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#e8f4fd', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>📸</span>
                    </div>
                    <h4 className="fw-bold m-0">AI-Powered Recognition</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Our computer vision technology can identify album covers, automatically extracting 
                    metadata and organizing your collection with unprecedented accuracy.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#e8f8f0', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>📊</span>
                    </div>
                    <h4 className="fw-bold m-0">Smart Analytics</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Gain insights into your collection patterns, market values, and investment opportunities 
                    through our comprehensive analytics dashboard.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#f4e8fd', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>🔄</span>
                    </div>
                    <h4 className="fw-bold m-0">Trading Platform</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Connect with other collectors worldwide through our secure trading platform, 
                    complete with condition verification and price recommendations.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-6 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#fde8e8', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>🛡️</span>
                    </div>
                    <h4 className="fw-bold m-0">Data Security</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Your collection data is protected with enterprise-grade security measures, 
                    ensuring your valuable information stays safe and private.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section-about position-relative z-1 pt-130 lg-pt-80 pb-130 lg-pb-80" 
          style={{background: 'linear-gradient(135deg, #8A42FF 0%, #6B2FE8 100%)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10">
                <div className="text-center">
                  <h2 className="color-light font-Playfair wow fadeInUp mb-30">
                    Ready to Transform Your Collection?
                  </h2>
                  <p className="fs-20 color-light mb-50 opacity-75 wow fadeInUp" data-wow-delay="0.1s">
                    Join the Kolektt community and experience the future of music collecting
                  </p>
                  <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center" style={{gap: '20px'}}>
                    <Link 
                      href={`/${lang}/hub`}
                      className="btn-eighteen tran3s"
                      style={{
                        backgroundColor: '#fff',
                        color: '#8A42FF',
                        padding: '18px 32px',
                        borderRadius: '12px',
                        fontSize: '18px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'inline-block',
                        border: 'none'
                      }}
                    >
                      Get Started
                    </Link>
                    <Link 
                      href={`/${lang}/bpm-collect`}
                      className="btn-nineteen tran3s"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#fff',
                        padding: '16px 30px',
                        borderRadius: '12px',
                        fontSize: '18px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        display: 'inline-block',
                        border: '2px solid #fff'
                      }}
                    >
                      Try BPM Collect
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
