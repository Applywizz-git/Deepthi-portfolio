import { Download, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile1.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Network Infrastructure Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div> */}
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary-light rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="fade-in active text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-card/50 border border-card-border rounded-full text-sm font-medium text-muted mb-4 backdrop-blur-sm">
                Welcome to my professional portfolio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold mb-6 tracking-tight">
              <span className="gradient-text">JDeepti Reddy </span>
              <br />
              <span className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-muted">
                 Network Engineer
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Designing secure, automated network infrastructures with cloud integration. 
              Skilled in networking protocols, API security, cloud platforms (AWS & Azure), monitoring, and automation in Agile environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="btn-hero-primary group w-full sm:w-auto"
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="btn-hero-secondary group w-full sm:w-auto"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
              <div className="card-tech text-center group">
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">2+</div>
                <div className="text-muted-foreground text-sm">Years Experience</div>
              </div>
              <div className="card-tech text-center group">
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-muted-foreground text-sm">Network Uptime</div>
              </div>
              <div className="card-tech text-center group">
                <div className="text-2xl lg:text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-muted-foreground text-sm">Projects Deployed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="fade-in active flex justify-center lg:justify-end">
            <div className="relative pt-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl mt-300 pt-300"></div>
              <Avatar className="relative w-80 h-96 border-4 border-card-border shadow-2xl">
                <AvatarImage 
                  src={profileImage} 
                  alt="Alex Johnson - IT & Network Engineer" 
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl font-bold gradient-text">AJ</AvatarFallback>
              </Avatar>
              {/* Floating decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
              <div className="absolute bottom-8 left-4 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary"
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;