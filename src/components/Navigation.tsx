import { Button } from "@/components/ui/button";
import { Menu, X, GamepadIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "#home", type: "anchor" },
    { name: "Games", href: "#games", type: "anchor" },
    { name: "News", href: "#news", type: "anchor" },
    { name: "Community", href: "/community", type: "route" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <GamepadIcon className="h-8 w-8 text-neon-cyan" />
            <span className="text-xl font-orbitron font-bold text-neon-cyan">
              NexusGaming
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-neon-cyan transition-colors duration-200 font-exo"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-neon-cyan transition-colors duration-200 font-exo"
                >
                  {item.name}
                </a>
              )
            ))}
            <Button variant="gaming" size="sm">
              Play Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-neon-cyan"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-neon-cyan transition-colors duration-200 font-exo px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-neon-cyan transition-colors duration-200 font-exo px-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <Button variant="gaming" size="sm" className="w-fit mx-2">
                Play Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;