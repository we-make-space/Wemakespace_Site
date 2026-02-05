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

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side */}
              <div className="p-6 md:p-12 bg-primary/5 flex flex-col justify-between md:border-r md:border-white/5 border-transparent">
                <div>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-8">
                    <Code className="text-white" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-black tracking-tighter uppercase leading-none mb-6">
                    Talk to <br/><span className="text-primary italic">US.</span>
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
              <div className="p-6 md:p-12 overflow-y-auto max-h-[80vh]">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Services */}
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      What are we building?
                    </label>
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

                  {/* Inputs */}
                  <div className="space-y-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-primary outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-primary outline-none transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <textarea
                      placeholder="Tell us about the project..."
                      rows={3}
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-primary outline-none transition-colors resize-none"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Budget (optional)"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl focus:border-primary outline-none transition-colors"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 md:py-6 rounded-full font-black text-lg md:text-xl uppercase tracking-widest flex items-center justify-center gap-4 transition-all ${
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
