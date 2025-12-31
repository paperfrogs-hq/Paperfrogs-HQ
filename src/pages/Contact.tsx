import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Github, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Get in <span className="text-coral">Touch</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-16 leading-relaxed">
              Have a question, suggestion, or want to collaborate? We'd love to hear from you. Reach out to the Paperfrogs HQ team.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur glass-3d shadow-3d-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you as soon as possible.
                </p>
                <a
                  href="mailto:hello@paperfrogs.dev"
                  className="inline-flex items-center gap-2 text-coral hover:text-coral/80 transition-colors duration-300 font-medium"
                >
                  hello@paperfrogs.dev
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur glass-3d shadow-3d-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                  <Github className="w-6 h-6 text-coral" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">GitHub</h3>
                <p className="text-muted-foreground mb-4">
                  Check out our projects and contribute on GitHub.
                </p>
                <a
                  href="https://github.com/paperfrogs-hq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-coral hover:text-coral/80 transition-colors duration-300 font-medium"
                >
                  @paperfrogs-hq
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 rounded-2xl border border-border bg-gradient-to-br from-coral/10 to-transparent glass-3d shadow-3d-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-coral" />
                <h3 className="text-xl font-semibold text-foreground">Let's Build Together</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have feedback, want to collaborate, or just want to say hello, we're always open to hearing from the community. Let's create something thoughtful together.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
