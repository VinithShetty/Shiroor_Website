import { Hero } from "@/components/Hero";
import { FeaturedSevas } from "@/components/FeaturedSevas";
import { DailyQuote } from "@/components/DailyQuote";
import { LatestNews } from "@/components/LatestNews";
import { ExpandablePhotoGallery } from "@/components/ExpandablePhotoGallery";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Sanskrit/Kannada Title */}
      <div className="bg-orange-800 text-white py-2 text-center">
        <h1 className="text-lg md:text-xl font-semibold tracking-wide">|| ಶ್ರೀ ವಿಠ್ಠಲೋ ವಿಜಯತೇ ||</h1>
      </div>
      <Navigation />
      <Hero />
      <DailyQuote />
      <FeaturedSevas />
      <ExpandablePhotoGallery />
      <LatestNews />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;