import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryImages = [
  {
    src: "/pics/images/timeline/udupi-temple.jpg",
    alt: "Temple Architecture",
    category: "Architecture"
  },
  {
    src: "/pics/images/timeline/modernization.jpg",
    alt: "Sacred Rituals",
    category: "Rituals"
  },
  {
    src: "/pics/images/festival.jpg",
    alt: "Festival Celebrations",
    category: "Festivals"
  },
  {
    src: "/pics/images/timeline/digital-era.jpg",
    alt: "Daily Life",
    category: "Daily Life"
  },
  {
    src: "/pics/images/events/gather.jpg",
    alt: "Spiritual Gatherings",
    category: "Gatherings"
  },
  {
    src: "/pics/images/patterns/traditional-decor.jpg",
    alt: "Sacred Texts",
    category: "Texts"
  },
  {
    src: "/pics/images/sevas/deepa.jpg",
    alt: "Temple Interior",
    category: "Architecture"
  },
  {
    src: "/pics/images/sevas/Pooja.jpg",
    alt: "Evening Aarti",
    category: "Rituals"
  },
  {
    src: "/pics/images/events/pilli.jpg",
    alt: "Cultural Performance",
    category: "Festivals"
  }
];

export const ExpandablePhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const categories = ["All", "Architecture", "Rituals", "Festivals", "Daily Life", "Gatherings", "Texts"];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const displayedImages = isExpanded ? filteredImages : filteredImages.slice(0, 6);

  const handleExpandGallery = () => {
    setIsExpanded(true);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-yellow-50/20 to-red-50/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sacred Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Glimpses of our spiritual journey and divine moments
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-500 shadow-lg hover:shadow-orange-500/50 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white border border-white/30"
                  : "bg-white text-gray-700 hover:bg-orange-100 border-2 border-orange-200 hover:border-orange-400"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-xl hover:shadow-orange-500/50 transition-all duration-700 bg-white/90 backdrop-blur-lg border-2 border-gray-200 hover:border-orange-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              } ${isExpanded && index >= 6 ? 'animate-fade-in' : ''}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-95 transition-all duration-700 filter group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-semibold text-lg">{image.alt}</h3>
                  <p className="text-orange-200 text-sm animate-pulse">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isExpanded && filteredImages.length > 6 && (
          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <Button 
              onClick={handleExpandGallery}
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 shadow-xl hover:shadow-orange-500/50 transition-all duration-500 text-white font-bold border border-white/20"
            >
              View Complete Gallery
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};