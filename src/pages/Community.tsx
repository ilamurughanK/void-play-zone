import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Trophy, Calendar, Mic, Video } from "lucide-react";

const Community = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Global Chat",
      description: "Connect with players worldwide in real-time discussions",
      status: "Coming Soon"
    },
    {
      icon: Users,
      title: "Gaming Groups",
      description: "Join specialized groups for your favorite games",
      status: "Beta"
    },
    {
      icon: Trophy,
      title: "Tournaments",
      description: "Participate in competitive gaming events",
      status: "Active"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Stay updated with community gaming events",
      status: "Active"
    },
    {
      icon: Mic,
      title: "Voice Chat",
      description: "High-quality voice communication for teams",
      status: "Coming Soon"
    },
    {
      icon: Video,
      title: "Live Streams",
      description: "Watch and broadcast gaming sessions",
      status: "Beta"
    }
  ];

  const recentActivity = [
    { user: "CyberNinja_99", action: "achieved first place in Neural Strike Championship", time: "2 hours ago" },
    { user: "QuantumRacer", action: "completed Neon Velocity speed run in record time", time: "4 hours ago" },
    { user: "StarCommander", action: "joined Cosmic Warfare tournament", time: "6 hours ago" },
    { user: "NeonGamer", action: "shared gameplay highlights", time: "8 hours ago" },
    { user: "TechWarrior", action: "created new gaming group", time: "12 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-orbitron font-black mb-6">
              Gaming{" "}
              <span className="text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text">
                Community
              </span>
            </h1>
            <p className="text-xl font-exo text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with fellow gamers, join tournaments, and be part of the ultimate gaming ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="neon" size="lg" className="px-8">
                Join Community
              </Button>
              <Button variant="gaming" size="lg" className="px-8">
                Browse Groups
              </Button>
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
              Community Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityFeatures.map((feature, index) => (
                <div key={index} className="card-gaming p-6 text-center">
                  <div className="mx-auto mb-4 w-16 h-16 bg-gaming-surface rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-neon-cyan" />
                  </div>
                  
                  <h3 className="font-orbitron font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-exo text-sm mb-4">
                    {feature.description}
                  </p>
                  
                  <span className={`inline-block px-3 py-1 text-xs font-exo font-semibold rounded-full ${
                    feature.status === 'Active' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : feature.status === 'Beta'
                      ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                      : 'bg-muted/20 text-muted-foreground border border-muted/30'
                  }`}>
                    {feature.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-16 px-4 bg-gaming-card/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-cyan mb-2">50K+</div>
                <div className="text-sm font-exo text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-purple mb-2">1.2K</div>
                <div className="text-sm font-exo text-muted-foreground">Gaming Groups</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-blue mb-2">24/7</div>
                <div className="text-sm font-exo text-muted-foreground">Online Support</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-orbitron font-bold text-neon-cyan mb-2">150+</div>
                <div className="text-sm font-exo text-muted-foreground">Weekly Events</div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-orbitron font-bold text-center mb-12">
              Recent Activity
            </h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="card-gaming p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                      <span className="text-neon-cyan font-exo font-semibold text-sm">
                        {activity.user[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-exo text-foreground">
                        <span className="text-neon-cyan font-semibold">{activity.user}</span>{" "}
                        {activity.action}
                      </p>
                    </div>
                  </div>
                  <div className="text-muted-foreground text-sm font-exo">
                    {activity.time}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="gaming" size="lg">
                View All Activity
              </Button>
            </div>
          </div>
        </section>

        {/* Community Guidelines Placeholder */}
        <section className="py-16 px-4 bg-gaming-card/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-orbitron font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-lg font-exo text-muted-foreground mb-8">
              Be part of an inclusive, competitive, and fun gaming environment. 
              Our community features are currently in development, with exciting updates coming soon!
            </p>
            <div className="bg-gaming-surface p-8 rounded-xl border border-neon-cyan/30">
              <MessageCircle className="h-16 w-16 text-neon-cyan mx-auto mb-4 opacity-60" />
              <h3 className="font-orbitron font-semibold text-foreground mb-2">
                Chat & Forums Coming Soon
              </h3>
              <p className="text-muted-foreground font-exo text-sm">
                Advanced community features including real-time chat, forums, and social features are in active development.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Community;