import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Major Update: Neon Velocity Gets New Racing Modes",
      excerpt: "Experience three new racing modes including time trials, elimination races, and the highly anticipated battle royale mode.",
      date: "December 8, 2024",
      readTime: "3 min read",
      category: "Game Update",
      featured: true
    },
    {
      id: 2,
      title: "Esports Championship 2024 Registration Opens",
      excerpt: "Join the ultimate gaming competition with $500K prize pool. Registration open for all featured games.",
      date: "December 5, 2024",
      readTime: "2 min read",
      category: "Esports",
      featured: false
    },
    {
      id: 3,
      title: "Neural Strike: The Future of FPS Gaming",
      excerpt: "Dive deep into the revolutionary AI-powered combat system that's changing how we experience first-person shooters.",
      date: "December 3, 2024",
      readTime: "5 min read",
      category: "Review",
      featured: false
    },
    {
      id: 4,
      title: "Community Spotlight: Player Achievements",
      excerpt: "Celebrating our top players and their incredible achievements across all games in our platform.",
      date: "December 1, 2024",
      readTime: "4 min read",
      category: "Community",
      featured: false
    }
  ];

  return (
    <section id="news" className="py-20 px-4 bg-gaming-card/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Latest{" "}
            <span className="text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text">
              News
            </span>
          </h2>
          <p className="text-xl font-exo text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest gaming news, updates, and community highlights
          </p>
        </div>

        {/* Featured News */}
        {newsItems
          .filter(item => item.featured)
          .map(item => (
            <div key={item.id} className="card-gaming rounded-xl p-8 mb-12 bg-gradient-to-r from-gaming-card to-gaming-surface">
              <div className="flex items-start justify-between mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm font-exo font-semibold rounded-full border border-neon-cyan/30">
                  Featured
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span className="font-exo">{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span className="font-exo">{item.readTime}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground mb-4 hover:text-neon-cyan transition-colors cursor-pointer">
                {item.title}
              </h3>
              <p className="text-muted-foreground font-exo text-lg mb-6 leading-relaxed">
                {item.excerpt}
              </p>
              <Button variant="neon" className="group">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems
            .filter(item => !item.featured)
            .map(item => (
              <article key={item.id} className="card-gaming rounded-xl overflow-hidden group cursor-pointer">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gaming-surface text-neon-purple text-xs font-exo font-semibold rounded-full border border-neon-purple/30">
                      {item.category}
                    </span>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Clock className="h-3 w-3" />
                      <span className="font-exo">{item.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-orbitron font-semibold text-foreground mb-3 group-hover:text-neon-cyan transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-exo text-sm mb-4 line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Calendar className="h-3 w-3" />
                      <span className="font-exo">{item.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-neon-cyan hover:text-neon-cyan hover:bg-neon-cyan/10 p-2">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="gaming" size="lg" className="px-8">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;