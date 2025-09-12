import { Button } from "@/components/ui/button";
import { Play, Zap } from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Futuristic gaming environment"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gaming-dark/50 via-gaming-dark/30 to-gaming-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gaming-surface/80 rounded-full border border-primary/30">
          <Zap className="h-4 w-4 text-neon-cyan" />
          <span className="text-sm font-exo text-neon-cyan">Next-Gen Gaming Experience</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 leading-tight">
          Enter the{" "}
          <span className="text-transparent bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text">
            Future
          </span>
          <br />
          of Gaming
        </h1>

        <p className="text-xl md:text-2xl font-exo text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience cutting-edge games, join an elite community, and compete in 
          next-generation virtual worlds where legends are born.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="neon" 
            className="text-lg px-8 py-4 h-auto font-orbitron font-semibold group"
          >
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Play Now
          </Button>
          <Button 
            size="lg" 
            variant="gaming" 
            className="text-lg px-8 py-4 h-auto font-exo"
          >
            Explore Games
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-orbitron font-bold text-neon-cyan">50K+</div>
            <div className="text-sm font-exo text-muted-foreground">Active Players</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-orbitron font-bold text-neon-purple">100+</div>
            <div className="text-sm font-exo text-muted-foreground">Epic Games</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-orbitron font-bold text-neon-blue">24/7</div>
            <div className="text-sm font-exo text-muted-foreground">Online Support</div>
          </div>
        </div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-cyan rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-neon-purple rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-neon-blue rounded-full opacity-50 animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;