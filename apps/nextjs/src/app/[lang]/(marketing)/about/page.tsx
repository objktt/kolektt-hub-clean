"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MinimalistHero } from '@saasfly/ui/minimalist-hero';
import { MinimalistHeroRight } from '@saasfly/ui/minimalist-hero-right';
import { ShapeConnectAnimation } from '@saasfly/ui/shape-connect-animation';
import { ImageSection } from '@saasfly/ui/image-section';
import type { Locale } from "~/config/i18n-config";

export default function AboutPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {

  return (
    <div className="relative bg-black text-white">
      {/* MinimalistHero Section */}
      <div className="relative z-20 mb-40">
        <MinimalistHero
          mainText="In a world increasingly shaped by AI, we seek to restore balance. Technology should not only accelerate speed but also deepen meaning, and we design to bring humanity back to the forefront."
          overlayText={{
            part1: 'Between Taste,',
            part2: 'Humanity, & Beyond'
          }}
          leftImage="/images/media/01.png"
          className="bg-black text-white"
        />
      </div>

      {/* Shape Connect Animation */}
      <div className="relative z-20">
        <ShapeConnectAnimation />
      </div>

      {/* Our Philosophy */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-white">Our Philosophy</h2>
        <div className="prose prose-lg mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
            Today, algorithms and automation define much of our lives. 
            But in this process, meaning and human connection are often lost.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            At Objktt Studio, we believe technology should amplify humanity, not replace it. 
            We don't just solve problems — we peel away layers of complexity, 
            returning to the essence of each subject and creating solutions 
            that feel natural, human, and enduring over time.
          </p>
        </div>
      </section>

      {/* Why the "t" section */}
      <div className="relative z-20">
        <MinimalistHeroRight
          mainText="The final 't' in Kolektt and Objktt represents time. It signifies that what we create is not a fixed object, but a subject that unfolds and evolves across moments. Kolektt reflects how a collector's taste grows over time, while Objktt represents a studio that approaches every problem with awareness of time and context."
          overlayText={{
            part1: 'Why the "t"',
            part2: 'in Kolektt / Objktt'
          }}
          rightImage="/images/media/02.png"
          className="bg-black text-white"
        />
      </div>

      {/* Shape Connect Animation */}
      <div className="relative z-20">
        <ShapeConnectAnimation />
      </div>

      {/* Our Vision */}
      <section className="relative z-20 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">Our Vision</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              Taste is personal. Humanity is universal. 
              And Beyond is where new possibilities emerge.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              We stand at the intersection of these three elements — 
              creating experiences that honor individual taste, nurture human connection, 
              and evolve gracefully as they move forward. 
              From there, we venture beyond.
            </p>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="relative z-20 bg-black py-32 lg:py-40 pb-48 lg:pb-56 overflow-hidden min-h-[800px]">
        {/* Background Image */}
        <div className="absolute left-4 top-4 w-[403px] h-[403px] md:w-[484px] md:h-[484px] lg:w-[605px] lg:h-[605px] xl:w-[806px] xl:h-[806px] opacity-70 z-0 md:left-[100px] md:top-[50px]">
          <Image
            src="/images/media/03.png"
            alt="The Ecosystem"
            fill
            className="object-contain filter grayscale hover:opacity-90 transition-opacity duration-300"
            priority={false}
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 text-white leading-tight">The Ecosystem</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              The philosophy of Objktt Studio comes to life through Kolektt, 
              a platform designed to grow and change naturally over time.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Kolektt App Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Kolektt App</h3>
              <p className="text-blue-400 mb-4 font-medium text-sm uppercase tracking-wide">For individual collectors</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Catalog, share, and explore vinyl collections as they evolve and expand.
              </p>
              <Link 
                href={`/${lang}`} 
                className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
              >
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* BPM Collect Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">BPM Collect</h3>
              <p className="text-green-400 mb-4 font-medium text-sm uppercase tracking-wide">For DJs and vinyl enthusiasts</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Analyze BPM, map energy and duration, and design performances that connect music with experience.
              </p>
              <Link 
                href={`/${lang}/bpm-collect`} 
                className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors group"
              >
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Kolektt Hub Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white">Kolektt Hub</h3>
              <p className="text-purple-400 mb-4 font-medium text-sm uppercase tracking-wide">For record store owners</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Manage inventory, sales, and customer relationships with lifecycle-aware tools.
              </p>
              <Link 
                href={`/${lang}/hub`} 
                className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors group"
              >
                Learn More 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shape Connect Animation */}
      <div className="relative z-20">
        <ShapeConnectAnimation />
      </div>

      {/* About Objktt Studio */}
      <section className="relative z-20 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">About Objktt Studio</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
              Objktt Studio is a collective of designers, developers, and music lovers 
              dedicated to solving problems by returning to their essence, 
              while pacing every solution with sensitivity to context and growth.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              We merge design, technology, and music to create products that are 
              functional, soulful, and lasting. 
              Rather than chasing fleeting trends or blind automation, 
              we focus on what makes us human — taste, emotion, and connection — 
              allowing these qualities to deepen and evolve over time.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Team - Recruiting */}
      <section className="relative z-20 bg-black text-white py-20 lg:py-28">
        <div className="w-[90%] mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              We're looking for passionate individuals who share our vision of creating meaningful products that bridge music, technology, and humanity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:hello@kolektt.kr?subject=Job Application - Objktt Studio"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-lg font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-200"
              >
                hello@kolektt.kr
              </a>
              <Link 
                href={`/${lang}`} 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-black transition-all duration-200"
              >
                Explore Kolektt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
