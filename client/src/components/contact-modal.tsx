import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Rocket, Sparkles, Code, Globe, MessageSquare } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const services = [
    { id: "platform", name: "Applications", icon: Rocket },
    { id: "spatial", name: "AI-Powered Solutions", icon: Sparkles },
    { id: "ecosystem", name: "Software Training & Bootcamps", icon: Globe },
    { id: "consulting", name: "Consultancy & Strategy", icon: MessageSquare }
  ];

  // --- SUBMIT HANDLER ---
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.company || !formData.project) {
    alert("Please fill all required fields and select a project");
    return;
  }

  const to = "wemakespace1@gmail.com"; 
  const subject = encodeURIComponent(
    `A New Project for WeMakeSpace — ${formData.project}`
  );

  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.project}
Budget: ${formData.budget || "Not specified"}

Message:
${formData.company}
  `);

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  setSuccess(true);
  setFormData({ name: "", email: "", company: "", project: "", budget: "" });
};


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl min-h-full"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl my-4 sm:my-6 bg-neutral-900 border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-white transition-colors z-10 rounded-full"
              aria-label="Close"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side */}
              <div className="p-4 sm:p-6 md:p-12 bg-primary/5 flex flex-col justify-between md:border-r md:border-white/5 border-transparent">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-8">
                    <Code className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tighter uppercase leading-none mb-3 sm:mb-6">
                    Talk to <br/><span className="text-primary italic">US.</span>
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-light leading-relaxed">
                    Tell us about your vision. We'll help you build the digital space your business deserves.
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-bold mt-4">
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
              <div className="p-4 sm:p-6 md:p-12 overflow-y-auto max-h-[85vh]">
                <form className="space-y-5 sm:space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  {/* Services */}
                  <div className="space-y-3 sm:space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      What are we building?
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, project: service.id })}
                          className={`min-h-[44px] p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all text-left flex flex-col gap-1 sm:gap-2 ${
                            formData.project === service.id
                              ? "bg-primary border-primary text-white"
                              : "bg-white/5 border-white/10 text-muted-foreground hover:border-primary/50"
                          }`}
                        >
                          <service.icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                          <span className="text-xs sm:text-sm font-bold leading-tight">{service.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="space-y-4 sm:space-y-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 text-base sm:text-lg md:text-xl focus:border-primary outline-none transition-colors min-h-[48px]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 text-base sm:text-lg md:text-xl focus:border-primary outline-none transition-colors min-h-[48px]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <textarea
                      placeholder="Tell us about the project..."
                      rows={3}
                      className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 text-base sm:text-lg md:text-xl focus:border-primary outline-none transition-colors resize-none min-h-[80px]"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Budget (optional)"
                      className="w-full bg-transparent border-b border-white/10 py-3 sm:py-4 text-base sm:text-lg md:text-xl focus:border-primary outline-none transition-colors min-h-[48px]"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full min-h-[48px] py-4 sm:py-5 md:py-6 rounded-full font-black text-base sm:text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-3 sm:gap-4 transition-all ${
                      loading
                        ? "bg-white/20 text-white cursor-not-allowed"
                        : "bg-primary text-white hover:shadow-[0_0_30px_rgba(255,94,54,0.4)]"
                    }`}
                  >
                    {loading ? "Sending..." : "Send Signal"} <Send size={20} />
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
