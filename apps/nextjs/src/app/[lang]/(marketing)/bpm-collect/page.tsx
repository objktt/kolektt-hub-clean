import Link from 'next/link';
import Script from 'next/script';
import type { Locale } from "~/config/i18n-config";
import { Iphone15Pro } from '~/components/ui/iphone-15-pro';

export default async function BpmCollectPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  return (
    <>

        {/* Hero Section */}
        <div className="hero-banner-bpm position-relative z-1 pt-200 xl-pt-150 lg-pt-120 pb-150 xl-pb-120 lg-pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="hero-text-wrapper pe-xl-5">
                  <div className="text-center text-lg-start">
                    <div style={{fontSize: '80px', marginBottom: '20px'}}>🎵</div>
                    <h1 className="hero-heading color-dark font-Playfair wow fadeInUp">
                      BPM <span style={{color: '#8A42FF'}}>Collect</span>
                    </h1>
                    <p className="fs-20 color-dark pt-25 pb-35 md-pb-20 wow fadeInUp" data-wow-delay="0.1s">
                      Professional BPM analysis and music collection management. Analyze tempo, organize your tracks, and discover the perfect beat for every moment.
                    </p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start" style={{gap: '20px'}}>
                      <Link 
                        href={`/${lang}/hub`}
                        className="btn-eighteen tran3s"
                        style={{
                          backgroundColor: '#8A42FF',
                          color: '#fff',
                          padding: '18px 32px',
                          borderRadius: '12px',
                          fontSize: '18px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'inline-block',
                          border: 'none'
                        }}
                      >
                        Start Analyzing
                      </Link>
                      <Link 
                        href={`/${lang}/about`}
                        className="btn-nineteen tran3s"
                        style={{
                          backgroundColor: 'transparent',
                          color: '#8A42FF',
                          padding: '16px 30px',
                          borderRadius: '12px',
                          fontSize: '18px',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'inline-block',
                          border: '2px solid #8A42FF'
                        }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="text-center mt-5 mt-lg-0">
                  <div className="w-[347px] mx-auto">
                    <Iphone15Pro src="https://placehold.co/900x1600?text=BPM+Analysis" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="block-feature-how-it-works bg-nine pt-130 lg-pt-80 pb-130 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 m-auto">
                <div className="text-center mb-80 lg-mb-40">
                  <div className="title-six">
                    <h2 className="color-dark">How BPM Collect Works</h2>
                  </div>
                  <p className="fs-20 color-dark pt-25">Three simple steps to analyze your music</p>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card-style-twenty text-center mt-40">
                  <div className="step-number d-flex align-items-center justify-content-center m-auto mb-30" 
                    style={{width: '80px', height: '80px', backgroundColor: '#8A42FF', borderRadius: '50%', color: '#fff', fontSize: '24px', fontWeight: 'bold'}}>1</div>
                  <h4 className="fw-bold mb-20">Upload or Record</h4>
                  <p className="fs-18 color-dark">
                    Upload your audio files or record directly through our app. Supports MP3, WAV, FLAC and more formats.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-twenty text-center mt-40">
                  <div className="step-number d-flex align-items-center justify-content-center m-auto mb-30" 
                    style={{width: '80px', height: '80px', backgroundColor: '#8A42FF', borderRadius: '50%', color: '#fff', fontSize: '24px', fontWeight: 'bold'}}>2</div>
                  <h4 className="fw-bold mb-20">AI Analysis</h4>
                  <p className="fs-18 color-dark">
                    Our advanced AI algorithms analyze tempo, rhythm patterns, and musical characteristics in real-time.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-twenty text-center mt-40">
                  <div className="step-number d-flex align-items-center justify-content-center m-auto mb-30" 
                    style={{width: '80px', height: '80px', backgroundColor: '#8A42FF', borderRadius: '50%', color: '#fff', fontSize: '24px', fontWeight: 'bold'}}>3</div>
                  <h4 className="fw-bold mb-20">Organize & Export</h4>
                  <p className="fs-18 color-dark">
                    Get detailed BPM data, organize by tempo ranges, and export to your favorite DJ software or DAW.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="block-feature-bpm pt-130 lg-pt-80 pb-130 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 m-auto">
                <div className="text-center mb-80 lg-mb-40">
                  <div className="title-six">
                    <h2 className="color-dark">BPM Collect Features</h2>
                  </div>
                  <p className="fs-20 color-dark pt-25">Everything you need for professional music analysis</p>
                </div>
              </div>
            </div>
            
            <div className="row gx-xxl-5">
              <div className="col-lg-4 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#e8f4fd', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>⚡</span>
                    </div>
                    <h4 className="fw-bold m-0">Instant BPM Detection</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Accurate tempo analysis in seconds with advanced audio processing algorithms and machine learning.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#e8f8f0', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>📊</span>
                    </div>
                    <h4 className="fw-bold m-0">Advanced Analytics</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Deep analysis of rhythm patterns, time signatures, musical structure, and harmonic content.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#f4e8fd', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>📁</span>
                    </div>
                    <h4 className="fw-bold m-0">Smart Organization</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Automatically organize tracks by BPM ranges, genres, keys, and custom musical characteristics.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#fde8e8', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>🎚️</span>
                    </div>
                    <h4 className="fw-bold m-0">Batch Processing</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Process hundreds of tracks simultaneously for efficient workflow and large library analysis.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#fff3e0', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>🎯</span>
                    </div>
                    <h4 className="fw-bold m-0">Genre Classification</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    AI-powered genre detection and automatic tagging system with 95% accuracy across 100+ genres.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="card-style-seventeen border-30 mb-40">
                  <div className="d-flex align-items-center mb-25">
                    <div className="icon d-flex align-items-center justify-content-center" 
                      style={{width: '60px', height: '60px', backgroundColor: '#e8f0ff', borderRadius: '12px', marginRight: '20px'}}>
                      <span style={{fontSize: '28px'}}>💾</span>
                    </div>
                    <h4 className="fw-bold m-0">Export & Integration</h4>
                  </div>
                  <p className="fs-18 color-dark m-0">
                    Export data to Serato, rekordbox, Traktor, Logic, Ableton and 50+ other DJ and production platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="feedback-section-bpm bg-nine pt-130 lg-pt-80 pb-130 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-9 m-auto">
                <div className="text-center mb-80 lg-mb-40">
                  <div className="title-six">
                    <h2 className="color-dark">Trusted by Music Professionals</h2>
                  </div>
                  <p className="fs-20 color-dark pt-25">See what DJs and producers say about BPM Collect</p>
                </div>
              </div>
            </div>
            
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="feedback-block-bmp bg-white text-center mb-40" style={{
                  padding: '40px 30px',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Quote Icon */}
                  <div className="quote-icon mb-20">
                    <div style={{fontSize: '24px', color: '#8A42FF'}}>“</div>
                  </div>
                  
                  <blockquote className="fs-18 color-dark mb-30 flex-grow-1" style={{
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    margin: '0 0 30px 0'
                  }}>
                    BPM Collect revolutionized my DJ sets. The accuracy is incredible and batch processing saved me weeks of work.
                  </blockquote>
                  
                  <div className="client-info">
                    {/* Avatar placeholder */}
                    <div className="avatar mb-20" style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#8A42FF',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 15px auto',
                      color: '#fff',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}>
                      MC
                    </div>
                    <h5 className="fw-bold color-dark mb-5">DJ Mike Chen</h5>
                    <p className="fs-14 color-dark opacity-75 mb-0">Seoul Club DJ</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="feedback-block-bmp bg-white text-center mb-40" style={{
                  padding: '40px 30px',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Quote Icon */}
                  <div className="quote-icon mb-20">
                    <div style={{fontSize: '24px', color: '#8A42FF'}}>“</div>
                  </div>
                  
                  <blockquote className="fs-18 color-dark mb-30 flex-grow-1" style={{
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    margin: '0 0 30px 0'
                  }}>
                    As a music producer, I need precise BPM data. This tool delivers every time with lightning speed.
                  </blockquote>
                  
                  <div className="client-info">
                    {/* Avatar placeholder */}
                    <div className="avatar mb-20" style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#10B981',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 15px auto',
                      color: '#fff',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}>
                      SK
                    </div>
                    <h5 className="fw-bold color-dark mb-5">Sarah Kim</h5>
                    <p className="fs-14 color-dark opacity-75 mb-0">Electronic Producer</p>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-4 col-md-6">
                <div className="feedback-block-bmp bg-white text-center mb-40" style={{
                  padding: '40px 30px',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  {/* Quote Icon */}
                  <div className="quote-icon mb-20">
                    <div style={{fontSize: '24px', color: '#8A42FF'}}>“</div>
                  </div>
                  
                  <blockquote className="fs-18 color-dark mb-30 flex-grow-1" style={{
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    margin: '0 0 30px 0'
                  }}>
                    The genre classification is spot-on. It automatically organized my 10,000+ track library perfectly.
                  </blockquote>
                  
                  <div className="client-info">
                    {/* Avatar placeholder */}
                    <div className="avatar mb-20" style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: '#F59E0B',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 15px auto',
                      color: '#fff',
                      fontSize: '24px',
                      fontWeight: 'bold'
                    }}>
                      AR
                    </div>
                    <h5 className="fw-bold color-dark mb-5">Alex Rodriguez</h5>
                    <p className="fs-14 color-dark opacity-75 mb-0">Music Collector</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section-bpm position-relative z-1 pt-130 lg-pt-80 pb-130 lg-pb-80" 
          style={{background: 'linear-gradient(135deg, #8A42FF 0%, #6B2FE8 100%)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10">
                <div className="text-center">
                  <h2 className="color-light font-Playfair wow fadeInUp mb-30">
                    Ready to analyze your music?
                  </h2>
                  <p className="fs-20 color-light mb-50 opacity-75 wow fadeInUp" data-wow-delay="0.1s">
                    Join thousands of DJs, producers, and music enthusiasts using BPM Collect
                  </p>
                  
                  {/* Stats Row */}
                  <div className="row mb-50">
                    <div className="col-md-4">
                      <div className="stat-item text-center">
                        <h3 className="color-light mb-2" style={{fontSize: '36px', fontWeight: 'bold'}}>50M+</h3>
                        <p className="color-light opacity-75">Tracks Analyzed</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stat-item text-center">
                        <h3 className="color-light mb-2" style={{fontSize: '36px', fontWeight: 'bold'}}>95%</h3>
                        <p className="color-light opacity-75">Accuracy Rate</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="stat-item text-center">
                        <h3 className="color-light mb-2" style={{fontSize: '36px', fontWeight: 'bold'}}>100K+</h3>
                        <p className="color-light opacity-75">Active Users</p>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/${lang}/hub`}
                    className="btn-eighteen tran3s"
                    style={{
                      backgroundColor: '#fff',
                      color: '#8A42FF',
                      padding: '20px 40px',
                      borderRadius: '12px',
                      fontSize: '20px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'inline-block',
                      border: 'none'
                    }}
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
