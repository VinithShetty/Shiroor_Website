import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const sevas = [
  {
    title: "Daily Puja Seva",
    description: "Participate in the daily worship rituals and offerings",
    amount: "₹501",
    image: "/pics/images/Dailypooja.png",
    popular: true
  },
  {
    title: "Anna Daan Seva",
    description: "Provide meals to devotees and visitors",
    amount: "₹1001",
    image: "/pics/images/sevas/anna-dana.jpg",
    popular: false
  },
  {
    title: "Gopuja Seva",
    description: "Support the care and feeding of holy cows",
    amount: "₹2001",
    image: "/pics/images/Gopooja.jpg",
    popular: false
  }
];

export const FeaturedSevas = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Temple-like background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-yellow-50/60 to-red-50/40"></div>
        {/* Ornate temple decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 border-8 border-orange-300 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-red-300 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }}></div>
          {/* Temple pillar-like structures */}
          <div className="absolute top-10 right-1/3 w-8 h-96 bg-gradient-to-b from-orange-200 to-red-200 opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 left-1/3 w-6 h-64 bg-gradient-to-t from-yellow-200 to-orange-200 opacity-40 animate-bounce" style={{ animationDuration: '3s' }}></div>
        </div>
        {/* Decorative mandala patterns */}
        <div className="absolute top-1/4 right-20 w-40 h-40 opacity-10">
          <div className="w-full h-full border-4 border-orange-400 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute inset-4 border-2 border-red-400 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
              <div className="absolute inset-4 border border-yellow-400 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sacred Sevas & Donations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participate in our sacred services and contribute to the spiritual welfare of the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sevas.map((seva, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-2xl transition-all duration-700 group bg-white/90 backdrop-blur-lg border-2 border-orange-100 hover:border-orange-300 hover:shadow-orange-200/50 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {seva.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-lg animate-bounce border border-white/30">
                  Popular
                </div>
              )}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={seva.image}
                  alt={seva.title}
                  className="w-full h-full object-cover group-hover:scale-95 transition-all duration-700 filter group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-red-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{seva.title}</CardTitle>
                <CardDescription className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{seva.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors duration-300">{seva.amount}</span>
                  <Link to={`/donate?seva=${encodeURIComponent(seva.title)}&amount=${seva.amount.replace('₹', '')}`}>
                    <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 text-white font-semibold border border-white/20">
                      Donate Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <Link to="/sevas">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 px-8 shadow-2xl hover:shadow-orange-500/50 transition-all duration-500 text-white font-bold border border-white/20">
              View All Sevas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};