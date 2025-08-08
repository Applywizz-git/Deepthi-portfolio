import { ExternalLink, Github, Shield, Cloud, Network, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Ad Campaign Routing & Delivery Validation",
      description: "Simulated and validated routing logic for ad campaign delivery across segmented networks, improving delivery accuracy and reducing failures. Identified proxy and NAT issues that impacted campaign loads.",
      image: "src/assets/project1.png",
      technologies: ["TCP/IP", "Wireshark", "NAT", "Postman", "ADZU Platform"],
      features: [
        "End-to-end routing simulation",
        "NAT/proxy misconfiguration detection", 
        "API timeout and header mismatch logging"
        // "Compliance reporting dashboard"
      ],
      icon: Shield,
      category: "Security"
    },
    {
      title: "API & Endpoint Security Testing for Ad Operations",
      description: "Tested and secured RESTful APIs used in campaign workflows with a focus on access control, token validation, and payload integrity. Helped reduce API failure rates and strengthen endpoint protection.",
      image: "src/assets/project2.png",
      technologies: ["Postman", "REST APIs", "JWT", "Role-based Access", "Python"],
      features: [
        "Token expiration & invalid credential testing",
        "RBAC and authentication validation",
        "Payload and response error analysis"
      ],
      icon: Cloud,
      category: "Cloud"
    },
    {
      title: "Automation of Network Login Verification Flows",
      description: "Automated VPN-authenticated login test flows to validate access control and session handling across multiple user roles. Ensured secure login behavior under load and MFA policies.",
      image: "src/assets/project3.png",
      technologies: ["Selenium", "TestNG", "Bash", "VPN", "MFA"],
      features: [
        "Automated login test scripts",
        "Session timeout and policy validation",
        "MFA and role-specific checks"
      ],
      icon: Network,
      category: "Networking"
    },
    {
      title: "Student Network Usage Insights Dashboard",
      description: "Created dashboards to visualize network usage patterns by analyzing login logs, bandwidth trends, and anomalies. Simulated NOC-style monitoring for proactive insights.",
      image: "src/assets/project4.png",
      technologies: ["SQL", "Python", "Wireshark", "Excel", "Log" ,"Parsing"],
      features: [
        "Session duration and bandwidth charts",
        "Peak-hour traffic visualization",
        "Anomaly detection and risk scoring"
      ],
      icon: Lock,
      category: "Security"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing key infrastructure and security implementations that drive business value
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-project group fade-in active"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
                    <project.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="px-2 py-1 bg-card/90 text-xs rounded-full border border-card-border backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-card-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start">
                        <div className="w-1 h-1 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-card-secondary text-primary text-xs rounded border border-card-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="btn-hero-secondary text-xs"
                    onClick={() => console.log('View Details')}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs"
                    onClick={() => console.log('View Documentation')}
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Documentation
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;