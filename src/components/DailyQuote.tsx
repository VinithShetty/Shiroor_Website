import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const DailyQuote = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-orange-100 to-yellow-50 relative overflow-hidden">
      {/* Rotating Chakra Images */}
      <img
        src="public/pics/images/chakra.png"
        alt="Chakra Mandala"
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 opacity-30 animate-spin-slow z-20"
        style={{ animationDuration: '18s' }}
      />
      <img
        src="public/pics/images/chakra.png"
        alt="Chakra Mandala"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 opacity-30 animate-spin-slow-reverse z-20"
        style={{ animationDuration: '18s' }}
      />
      {/* Enhanced temple-inspired background with sculpture textures */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-yellow-200/15 to-red-200/20"></div>
        
        {/* Sculpture texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-300 via-stone-200 to-stone-100"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        </div>

        {/* Temple vector silhouettes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-40">
            <div className="w-full h-full bg-gradient-to-t from-orange-400 to-yellow-400 clip-path-temple animate-pulse"></div>
          </div>
          <div className="absolute bottom-10 right-10 w-28 h-36">
            <div className="w-full h-full bg-gradient-to-t from-red-400 to-orange-400 clip-path-temple animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Decorative temple elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {/* Temple lotus patterns */}
          <div className="absolute top-8 left-8 w-16 h-16 border-4 border-orange-400 rounded-full animate-pulse">
            <div className="absolute inset-2 border-2 border-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="absolute bottom-8 right-8 w-20 h-20 border-4 border-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}>
            <div className="absolute inset-3 border-2 border-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          {/* Swirling patterns */}
          <div className="absolute top-1/2 left-10 w-32 h-1 bg-gradient-to-r from-orange-300 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-32 h-1 bg-gradient-to-l from-red-300 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mandala-like spiritual symbols */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 opacity-20">
          <div className="w-full h-full relative">
            {/* Outer mandala ring */}
            <div className="absolute inset-0 border-4 border-orange-300 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
              {/* Inner mandala patterns */}
              <div className="absolute inset-4 border-2 border-red-300 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <div className="absolute inset-4 border border-yellow-300 rounded-full animate-spin" style={{ animationDuration: '15s' }}>
                  {/* Central spiritual symbol */}
                  <div className="absolute inset-6 bg-gradient-to-br from-orange-300 to-red-300 rounded-full animate-pulse">
                    <div className="absolute inset-2 bg-gradient-to-tl from-yellow-300 to-orange-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mandala petals */}
            <div className="absolute top-0 left-1/2 w-2 h-8 bg-orange-300 rounded-full transform -translate-x-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-8 bg-red-300 rounded-full transform -translate-x-1/2 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute left-0 top-1/2 w-8 h-2 bg-yellow-300 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            <div className="absolute right-0 top-1/2 w-8 h-2 bg-orange-300 rounded-full transform -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
          </div>
        </div>

        {/* Main content with image and quote */}
        <div className="flex items-center gap-12 lg:gap-16">
          {/* Left side - Spiritual Guide Image */}
          <div className={`flex-shrink-0 transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img
                  src="public/pics/images/guru.png"
                  alt="Spiritual Guide"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-2xl opacity-20 -z-10 animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Quote */}
          <div className={`flex-1 text-right transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 text-6xl text-orange-300 font-serif animate-bounce" style={{ animationDuration: '2s' }}>"</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 italic leading-relaxed mb-6 transition-transform duration-300">
                The divine light within us is the same light that illuminates the entire universe. 
                Through devotion and service, we connect with this eternal truth.
              </blockquote>
              <div className="absolute -bottom-4 -left-4 text-6xl text-orange-300 font-serif rotate-180 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }}>"</div>
            </div>
            <div className={`mt-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-orange-700 font-semibold text-lg">Today's Spiritual Reflection</p>
              <p className="text-gray-600 mt-2 animate-pulse">From the teachings of our Guru Parampara</p>
            </div>
          </div>
        </div>

        {/* Additional mandala symbols around the content */}
        <div className="absolute -bottom-10 -left-10 w-20 h-20 opacity-10">
          <div className="w-full h-full border-2 border-orange-400 rounded-full animate-spin" style={{ animationDuration: '25s' }}>
            <div className="absolute inset-2 border border-red-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          </div>
        </div>
        <div className="absolute -top-10 -right-10 w-16 h-16 opacity-10">
          <div className="w-full h-full border-2 border-yellow-400 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
            <div className="absolute inset-2 border border-orange-400 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};