import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpToLine } from "lucide-react";
import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Kembali ke atas"
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 18,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.8,
            y: 18,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          whileTap={{
            scale: 0.92,
          }}>
          <span className="scroll-to-top__shine"></span>
          <ArrowUpToLine />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
