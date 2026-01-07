import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Rocket, Sparkles, Code, Globe, MessageSquare } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: ""
  });

  const services = [
    { id: "platform", name: "Platform Engineering", icon: Rocket },
    { id: "spatial", name: "Spatial UI/UX", icon: Sparkles },
    { id: "ecosystem", name: "Digital Ecosystem", icon: Globe },
    { id: "consulting", name: "Strategy", icon: MessageSquare }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 text-muted-foreground hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Left Side: Brand/Info */}
              <div className="p-12 bg-primary/5 flex flex-col justify-between border-r border-white/5">
                <div>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-8">
                    <Code className="text-white" />
                  </div>
                  <h2 className="text-5xl font-display font-black tracking-tighter uppercase leading-none mb-6">
                    Start your <br/><span className="text-primary italic">Resonance.</span>
                  </h2>
                  <p className="text-xl text-muted-foreground font-light leading-relaxed">
                    Tell us about your vision. We'll help you build the digital space your business deserves.
                  </p>
                </div>
                
                <div className="space-y-4 text-sm text-muted-foreground uppercase tracking-widest font-bold">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>Avg. Response: 4 Hours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span>Availability: Q1 2026</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-12 overflow-y-auto max-h-[80vh]">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">What are we building?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, project: service.id })}
                          className={`p-4 rounded-2xl border transition-all text-left flex flex-col gap-2 ${
                            formData.project === service.id 
                              ? "bg-primary border-primary text-white" 
                              : "bg-white/5 border-white/10 text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          <service.icon size={20} />
                          <span className="text-sm font-bold">{service.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-primary outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-primary outline-none transition-colors"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <textarea 
                        placeholder="Tell us about the project..."
                        rows={3}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-primary outline-none transition-colors resize-none"
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <button 
                    className="w-full py-6 bg-primary text-white rounded-full font-black text-xl uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,94,54,0.4)] transition-all flex items-center justify-center gap-4"
                  >
                    Send Signal <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
