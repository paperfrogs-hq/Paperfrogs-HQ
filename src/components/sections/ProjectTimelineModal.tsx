import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
}

interface ProjectTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName: string;
  timeline: TimelineEvent[];
  upcomingMilestones: TimelineEvent[];
}

export const ProjectTimelineModal = ({
  isOpen,
  onClose,
  projectName,
  timeline,
  upcomingMilestones,
}: ProjectTimelineModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-2xl pointer-events-auto"
            >
              <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 pointer-events-none" />

              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-foreground">
                    {projectName} <span className="text-coral">Timeline</span>
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
                  >
                    <X className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
                  </button>
                </div>

                <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-6">Project Journey</h3>
                    <div className="space-y-4">
                      {timeline.map((event, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="relative flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-coral shadow-lg shadow-coral/50" />
                            {index < timeline.length - 1 && (
                              <div className="w-1 h-12 bg-gradient-to-b from-coral to-coral/30 mt-1" />
                            )}
                          </div>
                          <div className="pt-1 pb-4">
                            <p className="text-coral font-semibold text-sm">{event.date}</p>
                            <p className="text-foreground text-lg mt-1">{event.title}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <h3 className="text-xl font-bold text-foreground mb-6">Upcoming Milestones</h3>
                    <div className="space-y-4">
                      {upcomingMilestones.map((milestone, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: (timeline.length + index) * 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="relative flex flex-col items-center">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 shadow-lg shadow-violet-500/50" />
                            {index < upcomingMilestones.length - 1 && (
                              <div className="w-1 h-12 bg-gradient-to-b from-violet-400/50 to-violet-400/10 mt-1" />
                            )}
                          </div>
                          <div className="pt-1 pb-4">
                            <p className="text-violet-400 font-semibold text-sm">{milestone.date}</p>
                            <p className="text-foreground text-lg mt-1">{milestone.title}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
