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