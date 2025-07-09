import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: historyRef, isVisible: historyVisible } = useScrollAnimation();
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
          heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Shiroor Mutt</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            A sacred institution preserving centuries of spiritual wisdom and serving humanity through divine grace
          </p>
        </div>
      </section>

      {/* History Section */}
      <section ref={historyRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            historyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Sacred Heritage</h2>
          </div>

          <div className={`prose prose-lg max-w-4xl mx-auto text-gray-700 leading-relaxed transition-all duration-1000 ${
            historyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="mb-6 text-xl">
              Shriroor Mutt stands as a beacon of spiritual wisdom and devotion, carrying forward centuries of sacred traditions. 
              Our institution was founded with the divine mission of preserving and propagating the eternal teachings of our 
              spiritual masters, serving as a bridge between the ancient wisdom and contemporary seekers.
            </p>
            
            <p className="mb-6 text-lg">
              Through generations of dedicated service, the Mutt has remained committed to fostering spiritual growth, 
              cultural preservation, and community welfare. Our lineage of spiritual guides has illuminated the path for 
              countless devotees, offering guidance through the timeless principles of dharma, devotion, and selfless service.
            </p>
            
            <p className="mb-6 text-lg">
              The Mutt serves as a sanctuary for those seeking spiritual solace and wisdom. Our daily activities include 
              traditional pujas, spiritual discourses, community gatherings, and various sevas that benefit society at large. 
              We believe in the transformative power of devotion and the importance of maintaining our sacred traditions 
              while adapting to the needs of modern times.
            </p>
            
            <p className="text-lg">
              Today, Shriroor Mutt continues to be a source of inspiration and guidance for devotees worldwide. Through our 
              digital presence and global outreach programs, we strive to share the divine teachings with seekers everywhere, 
              maintaining our commitment to spiritual service and cultural preservation for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-20 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            philosophyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-600">Guiding principles that illuminate our spiritual path</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { symbol: "सत्", title: "Satya (Truth)", desc: "Living in alignment with eternal truth and righteousness" },
              { symbol: "शिव", title: "Shiva (Auspiciousness)", desc: "Cultivating auspiciousness and divine grace in all endeavors" },
              { symbol: "सुन्दर", title: "Sundaram (Beauty)", desc: "Recognizing and manifesting divine beauty in all creation" }
            ].map((item, index) => (
              <Card key={index} className={`text-center hover:shadow-xl transition-all duration-500 ${
                philosophyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`} style={{ transitionDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">{item.symbol}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription>
                    {item.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;