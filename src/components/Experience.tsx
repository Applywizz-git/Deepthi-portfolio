import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Network Support Engineer",
      company: "Annalect",
      location: "Hyderabad, India",
      period: "2021 - 2023",
      description: [
        "Delivered end-to-end network validation for ad campaigns using TCP/IP and routing simulations, reducing failures by 18%.",
        "Resolved DNS and SSL issues to enhance secure delivery and lower escalations.",
        "Tested REST APIs and RBAC flows, contributing to 99.9% uptime post-release.",
        "Automated login verification and firewall checks, improving session stability by 25%.",
        "Collaborated on VLAN access control fixes, reducing authentication failures by 30%."
      ],
      technologies: ["Wireshark", "Postman", "Selenium", "TestNG", "JIRA"]
    }
  ];

  const educationData = [
    {
      degree: "Master of Computer Information Systems",
      institution: "New England College",
      location: "Henniker, NH",
      period: "2023 – 2025",
      details: "Focused on cloud infrastructure, enterprise systems, and automation in modern IT environments."
    },
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Narasaraopet Engineering College",
      location: "India",
      period: "2017 – 2021",
      details: "Built strong fundamentals in programming, networking, and system design."
    }
  ];

  return (
    <>
      {/* Experience Section */}
      <section id="experience" className="py-10 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building robust, secure, and scalable network infrastructures across diverse industries
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-3xl px-4">
                  <div className="card-tech fade-in active" style={{ animationDelay: `${0.2 * index}s` }}>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="flex items-center text-primary text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-card-foreground mb-2">{exp.title}</h3>

                    <div className="flex items-center text-primary mb-4">
                      <Building className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-card-secondary text-primary text-xs rounded-full border border-card-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-3xl px-4">
                  <div className="card-tech fade-in active" style={{ animationDelay: `${0.2 * index}s` }}>
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="flex items-center text-primary text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-card-foreground mb-2">{edu.degree}</h3>

                    <div className="flex items-center text-primary mb-4">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span className="font-semibold">{edu.institution}</span>
                    </div>

                    <p className="text-muted-foreground text-sm">{edu.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
