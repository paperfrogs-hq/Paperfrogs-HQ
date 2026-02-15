import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  social?: {
    github?: string;
    linkedin?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Niloy Majumder",
    role: "AI & ML Developer",
    bio: "Passionate about artificial intelligence and machine learning, building intelligent systems that push boundaries.",
    social: {
      github: "https://github.com/niloymajumder",
      linkedin: "https://www.linkedin.com/in/niloymajumderr/",
    },
  },
  {
    name: "Joy G. Majumdar",
    role: "Web3 & Rust Developer",
    bio: "Crafting decentralized solutions and high-performance systems with Rust and Web3 technologies.",
    social: {
      github: "https://github.com/Joy-Majumder",
      linkedin: "https://www.linkedin.com/in/joy0x1",
    },
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-28 lg:py-36 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-coral" />
              <span className="text-xs font-mono text-coral uppercase tracking-[0.2em]">
                Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
              The people behind it all
            </h2>
            <p className="text-muted-foreground max-w-lg">
              A small, passionate team dedicated to building thoughtful digital products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="border border-border rounded-xl p-7 hover:border-foreground/20 hover:bg-card/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-xs font-mono text-coral">
                        {member.role}
                      </p>
                    </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {member.social && (
                    <div className="flex items-center gap-2 justify-center">
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
                        >
                          <Github size={12} />
                          GitHub
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-xs text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
                        >
                          <Linkedin size={12} />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 max-w-4xl mx-auto"
          >
            <div className="border border-dashed border-border rounded-xl p-7 flex flex-col items-center justify-center gap-4 text-center">
              <div>
                <p className="text-foreground font-medium mb-1">Want to join us?</p>
                <p className="text-sm text-muted-foreground">
                  We're always looking for passionate builders.
                </p>
              </div>
              <a
                href="mailto:hello@paperfrogs.dev"
                className="inline-flex items-center gap-2 text-sm text-coral font-medium hover:opacity-80 transition-opacity"
              >
                Get in touch
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
