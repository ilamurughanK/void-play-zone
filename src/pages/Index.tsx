import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <GamesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
