import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Users } from "lucide-react";

// Import game images
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";

const GamesSection = () => {
  const games = [
    {
      id: 1,
      title: "Neon Velocity",
      description: "High-speed cyberpunk racing through futuristic cityscapes with customizable vehicles and intense multiplayer action.",
      image: game1,
      rating: 4.8,
      players: "12K+",
      genre: "Racing"
    },
    {
      id: 2,
      title: "Cosmic Warfare",
      description: "Strategic space battles with massive fleets, advanced technology, and epic interstellar conflicts.",
      image: game2,
      rating: 4.7,
      players: "8.5K+",
      genre: "Strategy"
    },
    {
      id: 3,
      title: "Neural Strike",
      description: "Immersive FPS experience in cyberpunk environments with advanced weaponry and tactical gameplay.",
      image: game3,
      rating: 4.9,
      players: "15K+",
      genre: "FPS"
    },
    {
      id: 4,
      title: "Cyber Legends",
      description: "RPG adventure combining magic and technology in a vast futuristic world full of mysteries.",
      image: game4,
      rating: 4.6,
      players: "9K+",
      genre: "RPG"
    }
  ];

  return (
    <section id="games" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            Featured{" "}
            <span className="text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text">
              Games
            </span>
          </h2>
          <p className="text-xl font-exo text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of cutting-edge games designed for the ultimate gaming experience
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="group card-gaming rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-xs font-exo font-semibold rounded-full border border-neon-purple/30">
                    {game.genre}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-exo">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-neon-cyan" />
                    <span className="text-sm font-exo">{game.players}</span>
                  </div>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-semibold text-foreground mb-3 group-hover:text-neon-cyan transition-colors">
                  {game.title}
                </h3>
                <p className="text-muted-foreground font-exo text-sm mb-4 leading-relaxed">
                  {game.description}
                </p>
                <div className="flex gap-3">
                  <Button variant="neon" size="sm" className="flex-1">
                    Play Now
                  </Button>
                  <Button variant="gaming" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="gaming" size="lg" className="px-8">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;