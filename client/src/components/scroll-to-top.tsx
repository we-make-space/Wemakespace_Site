import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const SCROLL_THRESHOLD = 400;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-2 ring-background/80 backdrop-blur-sm hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background min-h-[48px] min-w-[48px]"
        >
          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronUp className="h-6 w-6" strokeWidth={2.5} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
