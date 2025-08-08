import { Shield, Cloud, Server, Cpu } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: " Network Security",
      description: "Configured firewalls, ACLs, and endpoint security using Wireshark and pfSense"
    },
    {
      icon: Cloud,
      title: "Cloud & Virtualization",
      description: "Worked with AWS, Azure, and VMware for secure, cloud-ready environments."
    },
    {
      icon: Server,
      title: "Infrastructure Automation",
      description: "Worked with AWS, Azure, and VMware for secure, cloud-ready environments.."
    },
    {
      icon: Cpu,
      title: "Network Engineering",
      description: "Handled VLANs, DNS/SSL issues, API testing, and cross-platform connectivity."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="fade-in active">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 2 years of experience in IT infrastructure and network support, I’ve worked on improving enterprise networks and securing APIs.
                 Skilled in DNS/SSL troubleshooting, VLAN checks, and firewall analysis across hybrid environments. Focused on automation, validation, and delivering stable, secure system
              </p>
            </div>
            
            <div className="fade-in active" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy driving system stability and performance by combining tools like Wireshark, Postman, and Selenium to uncover bottlenecks and security flaws.
                 I collaborate effectively in Agile teams, contributing to high-impact infrastructure initiatives alongside DevOps and backend engineering teams.
              </p>
            </div>

            <div className="fade-in active" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently focused on automating network checks, securing hybrid infrastructures (AWS & Azure), 
                and scripting efficient solutions with Python and Bash.

              </p>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-tech group fade-in active"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;