import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "Networking & Protocols", level: 95 },
    { name: "Routing & Switching", level: 90 },
    { name: "Network Security", level: 88 },
    { name: "Cloud Platforms", level: 85 },
    { name: "Monitoring & Troubleshooting", level: 92 },
    { name: "Scripting and Automation", level: 90 },
    { name: "Operating System", level: 87 },
    { name: "Tools & Platforms", level: 88 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficiency across enterprise networking, cloud platforms, and security technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="fade-in active"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-card-foreground font-medium">{skill.name}</span>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className={`skill-progress ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${0.2 * index}s`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
  <h3 className="text-3xl font-bold text-center mb-12">
    <span className="gradient-text">Certifications</span>
  </h3>

  {/* ✅ WRAP the grid with a container and set max-width */}
  <div className="mx-auto max-w-6xl px-4">
    {/* ✅ CHANGE grid-cols from 4 to 3 and add justify-center */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {[
        { name: "Cisco Networking Basics Specialization", issuer: "Coursera" },
        { name: "CompTIA Network+", issuer: "Linkedin Learning" },
        { name: "Windows Server Management and Security", issuer: "Linkedin Learning" },
      ].map((cert, index) => (
        // ✅ SET width for each card with max-w-sm and center it
        <div
          key={cert.name}
          className="w-full max-w-ms mx-auto card-tech text-center group fade-in active transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-2xl font-bold text-primary-foreground">
              {cert.name.charAt(0)}
            </span>
          </div>
          <h4 className="font-semibold text-card-foreground mb-1">{cert.name}</h4>
          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
        </div>
      ))}
    </div>
  </div>
</div>
</div>
    </section>
  );
};

export default Skills;