import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const newsItems = [
  {
    title: "Upcoming Navaratri Celebrations",
    excerpt: "Join us for nine days of devotional festivities celebrating the Divine Mother",
    date: "December 15, 2024",
    category: "Festivals",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=250&fit=crop"
  },
  {
    title: "New Dharmic Education Program",
    excerpt: "Introducing comprehensive courses on Vedic philosophy and spiritual practices",
    date: "December 10, 2024",
    category: "Education",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop"
  },
  {
    title: "Annual Seva Recognition Ceremony",
    excerpt: "Honoring our dedicated volunteers and their selfless service to the community",
    date: "December 5, 2024",
    category: "Community",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop"
  }
];

export const LatestNews = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-orange-50 relative overflow-hidden">
      {/* Temple-inspired background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/80 via-yellow-100/60 to-red-100/40"></div>
        {/* Temple architecture patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          {/* Temple dome shapes */}
          <div className="absolute top-20 left-20 w-32 h-16 bg-gradient-to-b from-orange-200 to-orange-300 rounded-t-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-20 bg-gradient-to-b from-red-200 to-red-300 rounded-t-full opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
          {/* Temple pillars */}
          <div className="absolute top-0 left-1/4 w-4 h-full bg-gradient-to-b from-orange-200/30 to-yellow-200/30 animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-6 h-full bg-gradient-to-b from-red-200/20 to-orange-200/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          {/* Ornate patterns */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 border-4 border-orange-300/30 rounded-full animate-spin" style={{ animationDuration: '25s' }}>
              <div className="absolute inset-2 border-2 border-yellow-300/40 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our community activities and spiritual events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-2xl transition-all duration-700 group bg-white/95 backdrop-blur-lg border-2 border-orange-200 hover:border-orange-400 hover:shadow-orange-300/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-95 transition-all duration-700 filter group-hover:brightness-110"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse border border-white/30">
                  {item.category}
                </div>
                {/* Animated overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/20 via-transparent to-yellow-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Floating elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
              <CardHeader className="relative z-10">
                <div className="text-sm text-gray-500 mb-2 group-hover:text-orange-600 transition-colors duration-300">{item.date}</div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-all duration-300">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {item.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-600 hover:text-white shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 font-semibold border-2">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 text-white font-bold border border-white/20">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};