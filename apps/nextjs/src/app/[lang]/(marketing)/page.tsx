import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import type { Locale } from "~/config/i18n-config";
import ShutterButton from '~/components/ShutterButton';
import { Iphone15Pro } from '~/components/ui/iphone-15-pro';
import Testimonials from '~/components/ui/testimonials';
import KolekttPricing from '~/components/ui/kolektt-pricing';

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  return (
    <>
      
      {/* Hero & Demo Container */}
      <div id="hero-demo-container" className="relative pt-20">
          <div id="ball" className="absolute w-5 h-5 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full z-10 shadow-lg shadow-purple-500/40"></div>
          <div id="square" className="absolute w-[18px] h-[18px] bg-gradient-to-br from-orange-500 to-pink-600 z-10 shadow-lg shadow-orange-500/40"></div>
          
          {/* Hero Banner */}
          <div id="hero" className="px-[5%] z-10 relative">
            <div className="bg-white relative rounded-[40px] overflow-hidden min-h-[600px] flex items-center">
              <div id="hero-three" className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true"></div>
              <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
                <div className="flex justify-center">
                  <div className="w-full lg:w-2/3 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-9xl font-bold text-gray-900 leading-tight mb-6">All your collections begin here.</h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-10">Piku delivered blazing performance, fast striking word soludtion</p>
                    <div className="flex justify-center gap-3 mt-4">
                      <button type="button"
                        className="px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-lg tracking-wider border-none outline-none bg-black hover:bg-gray-800 active:bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" fill="#fff" className="inline mr-2" viewBox="0 0 22.773 22.773">
                          <path
                            d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                            data-original="#000000" />
                        </svg>
                        <div className="leading-tight">
                          <p className="text-xs text-white leading-tight text-left font-medium mb-0">Download on the</p>
                          <span className="text-sm font-semibold">App Store</span>
                        </div>
                      </button>

                      <button type="button"
                        className="px-4 py-2 cursor-pointer inline-flex items-center rounded-lg text-white text-lg tracking-wider border-none outline-none bg-black hover:bg-gray-800 active:bg-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" fill="#fff" className="inline mr-2" viewBox="0 0 64 64">
                          <path fill="#57cef3" d="M7 3v58l33-29z" data-original="#57cef3" />
                          <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" data-original="#fff200" />
                          <path fill="#48ff48" d="M36 32 7 3h4l34 20z" data-original="#48ff48" />
                          <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" data-original="#ff6c58" />
                          <path fill="#f33"
                            d="M9.1 64c-1.9 0-3.6-1-4.5-2.6L8 58.2v.7c0 .3.1.6.3.8L24 44c7.4 0 14.1-1.2 18.3-3.1l5.8-3.4v4.6L11.7 63.3c-.7.5-1.6.7-2.6.7z"
                            data-original="#ff3333" />
                          <path fill="#0779e4"
                            d="M9.1 4C8.5 4 8 4.5 8 5.1V36c0 4.4 7.2 8 16 8L5.5 62.5c-.9-.9-1.5-2.2-1.5-3.6V5.1C4 2.3 6.3 0 9.1 0z"
                            data-original="#0779e4" />
                          <path fill="#314a52"
                            d="M8.3 4.3c.2-.2.5-.3.8-.3.2 0 .4.1.6.2l45.5 26.6c.5.2.8.7.8 1.2s-.3 1-.7 1.3l-11.4 6.6 2.9 2.9 10.4-6.1c1.7-1 2.7-2.8 2.7-4.7s-1-3.8-2.7-4.7L11.7.7C11 .2 10.1 0 9.1 0 7.7 0 6.4.6 5.5 1.5z"
                            data-original="#314a52" />
                        </svg>
                        <div className="leading-tight">
                          <p className="text-xs text-white leading-tight text-left font-medium mb-0">Get it on</p>
                          <span className="text-sm font-semibold">Google Play</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Snap Section */}
          <section className="px-[5%] mt-5">
            <div className="bg-black pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
              <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="lg:pr-12">
                      <div className="mb-8">
                        <h2 className="text-4xl lg:text-5xl xl:text-9xl font-bold text-white mb-4">Snap</h2>
                      </div>
                      <p className="text-2xl text-white mb-10">Easy registration with album photography</p>
                      <p className="text-xl text-white mb-10">
                        Simply take a photo of your album cover and let our AI do the rest. 
                        Our advanced computer vision technology instantly recognizes albums 
                        and automatically fills in all the metadata.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="text-center flex justify-center items-center relative">
                      <div className="w-[347px] relative">
                        <Iphone15Pro src="https://placehold.co/900x1600?text=Camera+Recognition" />
                        
                        {/* Feature Cards - Responsive Layout */}
                        
                        {/* Mobile: Zigzag Cards */}
                        <div className="lg:hidden">
                          {/* Top Left Card */}
                          <div className="absolute left-[-40px] top-[10%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">📸</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">One-tap photo capture</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Simply point and shoot to start</p>
                            </div>
                          </div>
                          
                          {/* Top Right Card */}
                          <div className="absolute right-[-40px] top-[25%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">🤖</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">AI-powered recognition</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Advanced ML identifies albums</p>
                            </div>
                          </div>
                          
                          {/* Bottom Left Card */}
                          <div className="absolute left-[-40px] top-[40%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">⚡</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Instant metadata retrieval</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Get all details in 2 seconds</p>
                            </div>
                          </div>
                          
                          {/* Bottom Right Card */}
                          <div className="absolute right-[-40px] top-[55%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">🎯</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">95%+ accuracy rate</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Industry-leading precision</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Desktop: Zigzag Cards */}
                        <div className="hidden lg:block">
                          {/* Top Left Card */}
                          <div className="absolute left-[-130px] top-[10%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">📸</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">One-tap photo capture</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Simply point and shoot to start recognition</p>
                            </div>
                          </div>
                          
                          {/* Top Right Card */}
                          <div className="absolute right-[-130px] top-[25%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">🤖</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">AI-powered recognition</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Advanced ML identifies any album instantly</p>
                            </div>
                          </div>
                          
                          {/* Bottom Left Card */}
                          <div className="absolute left-[-130px] top-[40%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">⚡</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Instant metadata retrieval</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Get all details in under 2 seconds</p>
                            </div>
                          </div>
                          
                          {/* Bottom Right Card */}
                          <div className="absolute right-[-130px] top-[55%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">🎯</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">95%+ accuracy rate</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Industry-leading precision and reliability</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Collect Section */}
          <section className="px-[5%] mt-10">
            <div className="bg-gray-50 pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
              <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="w-full lg:w-1/2 lg:order-last">
                    <div className="lg:pl-12">
                      <div className="mb-8">
                        <h2 className="text-4xl lg:text-5xl xl:text-9xl font-bold text-gray-900 mb-4">Collect</h2>
                      </div>
                      <p className="text-2xl text-gray-700 mb-10">Systematic collection management</p>
                      <p className="text-xl text-gray-600 mb-10">
                        Organize your collection like never before. Track condition, rarity, 
                        market value, and personal notes. Generate insights about your 
                        collecting patterns and discover gaps in your collection.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 lg:order-first">
                    <div className="text-center flex justify-center items-center relative">
                      <div className="w-[347px] relative">
                        <Iphone15Pro src="https://placehold.co/900x1600?text=Smart+Organization" />
                        
                        {/* Feature Cards - Responsive Layout */}
                        
                        {/* Mobile: Zigzag Cards */}
                        <div className="lg:hidden">
                          {/* Top Left Card */}
                          <div className="absolute left-[-40px] top-[10%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">📊</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Advanced analytics dashboard</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Deep insights into trends</p>
                            </div>
                          </div>
                          
                          {/* Top Right Card */}
                          <div className="absolute right-[-40px] top-[25%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">💰</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Real-time market valuations</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Live pricing updates</p>
                            </div>
                          </div>
                          
                          {/* Bottom Left Card */}
                          <div className="absolute left-[-40px] top-[40%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">🏆</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Condition tracking system</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Monitor wear and quality</p>
                            </div>
                          </div>
                          
                          {/* Bottom Right Card */}
                          <div className="absolute right-[-40px] top-[55%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">🧠</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Smart collection insights</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">AI-powered recommendations</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Desktop: Zigzag Cards */}
                        <div className="hidden lg:block">
                          {/* Top Left Card */}
                          <div className="absolute left-[-130px] top-[10%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">📊</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Advanced analytics dashboard</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Deep insights into your collection trends</p>
                            </div>
                          </div>
                          
                          {/* Top Right Card */}
                          <div className="absolute right-[-130px] top-[25%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">💰</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Real-time market valuations</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Live pricing updates from global markets</p>
                            </div>
                          </div>
                          
                          {/* Bottom Left Card */}
                          <div className="absolute left-[-130px] top-[40%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">🏆</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Condition tracking system</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Monitor wear and quality over time</p>
                            </div>
                          </div>
                          
                          {/* Bottom Right Card */}
                          <div className="absolute right-[-130px] top-[55%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">🧠</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Smart collection insights</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">AI-powered recommendations and gaps</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trade Section */}
          <section className="px-[5%] mt-10">
            <div className="bg-black pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden">
              <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="w-full lg:w-1/2">
                    <div className="lg:pr-12">
                      <div className="mb-8">
                        <h2 className="text-4xl lg:text-5xl xl:text-9xl font-bold text-white mb-4">Trade</h2>
                      </div>
                      <p className="text-2xl text-white mb-10">Exchange with other collectors</p>
                      <p className="text-xl text-white mb-10">
                        Connect with collectors worldwide through our secure trading platform. 
                        Get fair market prices, verify authenticity, and trade with confidence. 
                        Build your network and discover rare finds.
                      </p>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="text-center flex justify-center items-center relative">
                      <div className="w-[347px] relative">
                        <Iphone15Pro src="https://placehold.co/900x1600?text=Safe+Trading" />
                        
                        {/* Feature Cards - Responsive Layout */}
                        
                        {/* Mobile: Zigzag Cards */}
                        <div className="lg:hidden">
                          {/* Top Left Card */}
                          <div className="absolute left-[-40px] top-[10%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">🌍</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Global collector network</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Connect with collectors worldwide</p>
                            </div>
                          </div>
                          
                          {/* Top Right Card */}
                          <div className="absolute right-[-40px] top-[25%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">🔒</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Secure escrow system</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Safe transactions with protection</p>
                            </div>
                          </div>
                          
                          {/* Bottom Left Card */}
                          <div className="absolute left-[-40px] top-[40%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-violet-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">✔️</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Authenticity verification</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Expert verification for items</p>
                            </div>
                          </div>
                          
                          {/* Bottom Right Card */}
                          <div className="absolute right-[-40px] top-[55%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg max-w-[140px] text-left">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">💲</span>
                                </div>
                                <div className="text-xs font-bold text-gray-900">Fair market pricing</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Transparent pricing based on data</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Desktop: Zigzag Cards */}
                        <div className="hidden lg:block">
                          {/* Top Left Card */}
                          <div className="absolute left-[-130px] top-[10%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">🌍</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Global collector network</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Connect with collectors worldwide</p>
                            </div>
                          </div>
                          
                          {/* Top Right Card */}
                          <div className="absolute right-[-130px] top-[25%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">🔒</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Secure escrow system</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Safe transactions with built-in protection</p>
                            </div>
                          </div>
                          
                          {/* Bottom Left Card */}
                          <div className="absolute left-[-130px] top-[40%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">✔️</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Authenticity verification</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Expert verification for genuine items</p>
                            </div>
                          </div>
                          
                          {/* Bottom Right Card */}
                          <div className="absolute right-[-130px] top-[55%]">
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl max-w-[200px] text-left">
                              <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-sm">💲</span>
                                </div>
                                <div className="text-sm font-bold text-gray-900">Fair market pricing</div>
                              </div>
                              <p className="text-xs text-gray-600 text-left">Transparent pricing based on real data</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>


      {/* Smart Technology Section */}
      <div className="px-[5%] mt-20">
        <div className="bg-gray-50 pt-20 lg:pt-16 pb-20 lg:pb-16 rounded-[40px] overflow-hidden">
          <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-[600px]">
              <div className="w-full lg:w-1/2 lg:order-last">
                <div className="lg:ml-12 xl:pl-8 flex flex-col justify-center">
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Smart technology for analog collectors</h2>
                  </div>

                    <div className="mb-10" id="accordionThree">
                      <div>
                        <h2>
                          <button className="w-full text-left py-4 flex items-center justify-between font-semibold text-gray-800 text-xl hover:text-gray-900" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <span>Smart Recognition Engine</span>
                            <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionThree">
                          <div className="pb-4">
                            <p className="text-xl text-gray-700 m-0">Computer vision and ML instantly identify album covers via camera, automatically matching artist, release year, tracklist, and pressing info with 95%+ accuracy, including rare editions.</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200">
                        <h2>
                          <button className="w-full text-left py-4 flex items-center justify-between font-semibold text-gray-800 text-xl hover:text-gray-900" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span>Metadata Collection System</span>
                            <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionThree">
                          <div className="pb-4">
                            <p className="text-xl text-gray-700 m-0">Continuously collects record data through user behaviors - registration, ratings, trading. Real-time updates on condition, quality, rarity, and market prices build the world's most accurate vinyl database.</p>
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-gray-200">
                        <h2>
                          <button className="w-full text-left py-4 flex items-center justify-between font-semibold text-gray-800 text-xl hover:text-gray-900" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <span>AI Investment Advisor</span>
                            <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionThree">
                          <div className="pb-4">
                            <p className="text-xl text-gray-700 m-0">Analyzes your collection patterns to recommend investment-worthy records. Considers market trends, price volatility, and rarity to grow asset value. Beta users saw 23% collection value increase in 6 months.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link href="#" className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold">Explore More <i className="ph ph-arrow-right ml-2"></i></Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:order-first">
                  <div className="relative mt-16 lg:mt-0">
                    <div className="h-[500px] lg:h-[600px] bg-gray-50 rounded-lg flex items-center justify-center p-5">
                      <img src="/images/assets/04_01.png" alt="Smart Technology Analytics" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Ecosystem Section */}
        <div className="px-[5%] relative z-10 mt-36 lg:mt-20">
          <div className="bg-black rounded-[40px] py-20 lg:py-24">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <div className="w-full xl:w-2/3 lg:w-5/6">
                  <div className="text-center mb-20 lg:mb-10">
                    <div className="mb-8">
                      <h2 className="text-4xl lg:text-5xl font-bold text-white">Complete your collection ecosystem</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <div className="bg-white rounded-3xl p-8 h-full aspect-square flex flex-col">
                      <div className="border border-gray-200 rounded-2xl p-4 h-full relative flex flex-col">
                        <div className="flex items-center mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 m-0">BPM Collect</h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center mb-4">
                          <div className="h-[200px] bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                            <span className="text-5xl">🎵</span>
                          </div>
                        </div>
                        <p className="text-xl mb-3 text-gray-700">From record registration to management with camera-based automatic recognition.</p>
                        <Link href={`/${lang}/bpm-collect`} className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold mt-auto">
                          <span>Go to BPM Collect</span> <i className="ph ph-arrow-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white rounded-3xl p-8 h-full aspect-square flex flex-col">
                      <div className="border border-gray-200 rounded-2xl p-4 h-full relative flex flex-col">
                        <div className="flex items-center mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 m-0">Kolektt Hub</h3>
                        </div>
                        <div className="flex-1 flex items-center justify-center mb-4">
                          <div className="h-[200px] bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                            <span className="text-5xl">🏢</span>
                          </div>
                        </div>
                        <p className="text-xl mb-3 text-gray-700">Community, trading, and insights all in one place.</p>
                        <Link href={`/${lang}/hub`} className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold mt-auto">
                          <span>Go to Kolektt Hub</span> <i className="ph ph-arrow-right ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Animated Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <div className="px-[5%] relative z-10 mt-36 xl:mt-32 lg:mt-20">
          <div className="bg-black rounded-[40px] py-20 lg:py-24">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <KolekttPricing />
            </div>
          </div>
        </div>

        {/* Download Section */}
        <section className="px-[5%] mt-20">
          <div className="bg-gray-50 text-center pt-32 lg:pt-20 pb-32 lg:pb-20 rounded-[40px] overflow-hidden relative">
            <div className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8">
              <div className="relative z-10">
                <div className="flex justify-center">
                  <div className="w-full lg:w-5/6">
                    <div className="mb-10">
                      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">700k+ Customers have Kolektt. Try it Now!</h2>
                      <p className="text-2xl text-gray-700 mb-12 opacity-80">
                        Join hundreds of thousands of collectors who trust Kolektt to manage, 
                        organize, and trade their vinyl collections. Download now and discover 
                        why we're the #1 choice for record collectors worldwide.
                      </p>
                    </div>
                    
                    {/* Download Statistics */}
                    <div className="grid md:grid-cols-3 gap-4 mb-16 lg:mb-10">
                      <div>
                        <div className="text-center">
                          <h3 className="text-4xl font-bold text-gray-900 mb-2">700k+</h3>
                          <p className="text-gray-700 mb-0 opacity-80">Active Users</p>
                        </div>
                      </div>
                      <div>
                        <div className="text-center">
                          <h3 className="text-4xl font-bold text-gray-900 mb-2">50M+</h3>
                          <p className="text-gray-700 mb-0 opacity-80">Albums Cataloged</p>
                        </div>
                      </div>
                      <div>
                        <div className="text-center">
                          <h3 className="text-4xl font-bold text-gray-900 mb-2">4.9★</h3>
                          <p className="text-gray-700 mb-0 opacity-80">App Store Rating</p>
                        </div>
                      </div>
                    </div>

                    {/* Download Buttons */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                      <button type="button"
                        className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg border-none min-w-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" fill="#fff" className="mr-3" viewBox="0 0 22.773 22.773">
                          <path
                            d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zm4.901 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
                            data-original="#000000" />
                        </svg>
                        <div className="text-left">
                          <p className="mb-1 text-xs text-white leading-tight">Download on the</p>
                          <span className="text-lg font-semibold text-white">App Store</span>
                        </div>
                      </button>

                      <button type="button"
                        className="flex items-center text-white bg-black hover:bg-gray-800 transition-colors px-6 py-4 rounded-lg border-none min-w-[200px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" fill="#fff" className="mr-3" viewBox="0 0 64 64">
                          <path fill="#57cef3" d="M7 3v58l33-29z" data-original="#57cef3" />
                          <path fill="#fff200" d="m36 32 8-10 15 10-15 10z" data-original="#fff200" />
                          <path fill="#48ff48" d="M36 32 7 3h4l34 20z" data-original="#48ff48" />
                          <path fill="#ff6c58" d="M36 32 7 61h4l34-20z" data-original="#ff6c58" />
                        </svg>
                        <div className="text-left">
                          <p className="mb-1 text-xs text-white leading-tight">Get it on</p>
                          <span className="text-lg font-semibold text-white">Google Play</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute top-[10%] left-[5%] w-[100px] h-[100px] rounded-full blur-[40px] z-0 bg-gradient-to-br from-purple-500/10 to-purple-700/10"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[150px] h-[150px] rounded-full blur-[50px] z-0 bg-gradient-to-br from-orange-500/10 to-pink-600/10"></div>
          </div>
        </section>
      
      {/* Page-specific scripts for home page */}
      <Script src="https://unpkg.com/three@0.158.0/build/three.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/components/image-swiper.js" strategy="lazyOnload" />
      <Script src="/components/iphone-15-pro.js" strategy="lazyOnload" />
    </>
  );
}
