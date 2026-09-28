import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "lucide-react";
import "./ProgramModal.css";

const programModalVariants = {
  hidden: {
    y: "100%",
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    y: "0%",
    opacity: 1,
    scale: 1,
  },
};

function ProgramModal({ isOpen, onClose, programSubMenu = [] }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="program-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}>
          <motion.div
            className="program-modal-content"
            variants={programModalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}>
            <span className="program-modal-glow program-modal-glow-one" />
            <span className="program-modal-glow program-modal-glow-two" />

            <div className="program-modal-header">
              <div className="program-modal-header-left">
                <span className="program-modal-header-icon">
                  <List size={20} />
                </span>

                <div>
                  <span className="program-modal-eyebrow">Pilih Program</span>

                  <h3>Program Lainnya</h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="program-modal-close-btn"
                aria-label="Tutup modal program">
                <X size={20} />
              </button>
            </div>

            <div className="program-modal-list">
              {programSubMenu.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.link}
                  target={subItem.link?.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    subItem.link?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="program-modal-item"
                  onClick={onClose}>
                  {subItem.icon && (
                    <span className="program-modal-item-icon-wrapper">
                      <subItem.icon className="program-modal-item-icon" />
                    </span>
                  )}

                  <div className="program-modal-item-text-wrapper">
                    <span className="program-modal-item-name">
                      {subItem.name}
                    </span>

                    {subItem.desc && (
                      <span className="program-modal-item-desc">
                        {subItem.desc}
                      </span>
                    )}
                  </div>

                  <span className="program-modal-item-shine" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProgramModal;
