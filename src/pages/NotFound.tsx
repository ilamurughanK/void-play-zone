import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-8xl font-orbitron font-black text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text mb-4">
            404
          </h1>
          <h2 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground font-exo">
            The page you're looking for doesn't exist in our gaming universe.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="neon" className="w-full sm:w-auto">
              <Home className="h-4 w-4" />
              Return Home
            </Button>
          </Link>
          <Button 
            variant="gaming" 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
