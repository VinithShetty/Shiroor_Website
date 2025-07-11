import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const heroSlides = [
  {
    image: "/Matha.jpeg",
    title: "Welcome to Shiroor Mutt",
    subtitle: "A Sacred Journey of Spiritual Heritage",
    description: "Experience the divine presence and ancient wisdom that has guided souls for centuries",
    cta: "Explore Our Heritage"
  },
  {
    image: "sevas/Pooja.jpg",
    title: "Daily Sevas & Pujas",
    subtitle: "Participate in Sacred Rituals",
    description: "Join us in our daily spiritual practices and contribute to the divine service",
    cta: "View Sevas"
  },
  {
    image: "/timeline/eight-mathas.jpg",
    title: "Upcoming Events",
    subtitle: "Festivals & Celebrations",
    description: "Be part of our spiritual celebrations and community gatherings",
    cta: "See Events"
  }
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section ref={ref} className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Enhanced temple-like background texture with sculpture elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-800/10 to-yellow-800/15"></div>
        
        {/* Sculpture texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-400 via-stone-300 to-stone-200"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_2px,transparent_2px)] bg-[length:30px_30px]"></div>
        </div>

        {/* Temple vector silhouettes with low opacity */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-48 h-60">
            <div className="w-full h-full bg-gradient-to-t from-orange-400 via-red-400 to-yellow-400 clip-path-temple animate-pulse"></div>
          </div>
          <div className="absolute bottom-20 right-20 w-40 h-52">
            <div className="w-full h-full bg-gradient-to-t from-red-400 via-orange-400 to-yellow-400 clip-path-temple animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          <div className="absolute top-1/2 left-1/4 w-32 h-44">
            <div className="w-full h-full bg-gradient-to-t from-yellow-400 via-orange-400 to-red-400 clip-path-temple animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Ornate temple patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border-2 border-yellow-500 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-red-400 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full blur-xl animate-pulse"></div>
          {/* Temple spire-like shapes */}
          <div className="absolute top-1/4 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-orange-300 animate-bounce" style={{ animationDuration: '2s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-red-300 animate-pulse"></div>
        </div>
      </div>

      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-[8000ms] ${
              isVisible ? 'scale-100' : 'scale-110'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
          
          <div className="absolute inset-0 flex items-center z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className={`max-w-3xl transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
                  {slide.title}
                </h1>
                <h2 className={`text-2xl md:text-3xl text-orange-200 mb-6 font-semibold transition-all duration-1000 delay-200 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}>
                  {slide.subtitle}
                </h2>
                <p className={`text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl transition-all duration-1000 delay-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {slide.description}
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <Button 
                    size="lg" 
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    {slide.cta}
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-orange-300 text-black bg-white/90 hover:bg-orange-600 hover:text-white px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-white/25 transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Controls with enhanced shadows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 shadow-2xl hover:shadow-black/50 z-20 border border-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 shadow-2xl hover:shadow-black/50 z-20 border border-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators with enhanced animations */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-orange-500 shadow-lg shadow-orange-500/50 scale-125 animate-pulse" 
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};