import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Niloy Majumder",
    role: "AI & ML Developer",
    bio: "Passionate about artificial intelligence and machine learning, building intelligent systems that push boundaries.",
    social: {
      github: "https://github.com/niloymajumder",
    },
  },
  {
    name: "Joy G. Majumder",
    role: "Web3 & Rust Developer",
    bio: "Crafting decentralized solutions and high-performance systems with Rust and Web3 technologies.",
    social: {
      github: "https://github.com/Joy-Majumder",
    },
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-20 w-64 h-64 bg-coral/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-coral text-sm font-medium uppercase tracking-widest mb-4 block">
              The Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Minds Behind the Magic
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate team of developers dedicated to building thoughtful digital products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="group card-3d"
              >
                <div className="card-3d-inner h-full p-8 rounded-2xl glass-3d shadow-3d-hover text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-coral transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-coral text-sm font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {member.social && (
                    <div className="flex justify-center gap-3">
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-card/50 border border-border flex items-center justify-center hover:border-coral hover:text-coral transition-all duration-300 shadow-3d-hover"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-card/50 border border-border flex items-center justify-center hover:border-coral hover:text-coral transition-all duration-300 shadow-3d-hover"
                        >
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-card/50 border border-border flex items-center justify-center hover:border-coral hover:text-coral transition-all duration-300 shadow-3d-hover"
                        >
                          <Twitter size={18} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 rounded-2xl glass-3d shadow-3d">
              <p className="text-muted-foreground mb-2">
                Want to join us?
              </p>
              <p className="text-foreground font-medium">
                We're always looking for passionate builders.{" "}
                <a href="mailto:paperfrogs-hq@outlook.com" className="text-coral hover:underline">
                  Get in touch →
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
