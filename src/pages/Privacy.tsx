import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
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
              Privacy <span className="text-coral">Policy</span>
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Paperfrogs HQ, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our products.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect information about you in a variety of ways. The information we may collect on the website includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 pl-4">
                  <li>Personal Data: name, email address, and other contact information</li>
                  <li>Usage Data: browser type, IP address, pages visited, and time spent</li>
                  <li>Device Data: device type, operating system, and unique identifiers</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We use collected information for several purposes, including to provide our services, improve user experience, and communicate with you about updates or changes to our services.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-foreground">Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, so we cannot guarantee absolute security.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us through the contact page.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm text-muted-foreground pt-8 border-t border-border"
              >
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
