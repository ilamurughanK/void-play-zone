import { GamepadIcon, Facebook, Twitter, Youtube, Twitch, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitch, href: "#", label: "Twitch" },
  ];

  return (
    <footer className="bg-gaming-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GamepadIcon className="h-8 w-8 text-neon-cyan" />
              <span className="text-xl font-orbitron font-bold text-neon-cyan">
                NexusGaming
              </span>
            </div>
            <p className="text-muted-foreground font-exo max-w-md">
              Enter the future of gaming with cutting-edge titles, an elite community, 
              and next-generation gaming experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#games" className="text-muted-foreground hover:text-neon-cyan transition-colors font-exo">Featured Games</a></li>
              <li><a href="#news" className="text-muted-foreground hover:text-neon-cyan transition-colors font-exo">Latest News</a></li>
              <li><a href="#community" className="text-muted-foreground hover:text-neon-cyan transition-colors font-exo">Community</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-exo">Support</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-orbitron font-semibold text-foreground mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gaming-surface rounded-lg hover:bg-primary/20 hover:text-neon-cyan transition-all duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:drop-shadow-[0_0_8px_hsl(var(--neon-cyan))]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-exo text-sm">
            © 2024 NexusGaming. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-exo">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-neon-cyan transition-colors font-exo">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;