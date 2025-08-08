import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>© {currentYear} JDeepti Reddy</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground mt-4 md:mt-0">
            <span>Built with Passion</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-accent" />
            <span>Powered by Collaboration</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;