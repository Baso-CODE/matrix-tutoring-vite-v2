import { AnimatePresence, motion } from "framer-motion";
import { List, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./MoreModal.css";

const modalVariants = {
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

const MoreModal = ({ isOpen, onClose, otherMenus = [] }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="more-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={onClose}>
          <motion.div
            className="more-modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(event) => event.stopPropagation()}>
            <span className="more-modal-glow more-modal-glow-one" />
            <span className="more-modal-glow more-modal-glow-two" />

            <div className="more-modal-header">
              <div className="more-modal-header-left">
                <span className="more-modal-header-icon">
                  <List size={20} />
                </span>

                <div>
                  <span className="more-modal-eyebrow">Navigasi Tambahan</span>

                  <h3>Menu Lainnya</h3>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="more-modal-close-btn"
                aria-label="Tutup menu lainnya">
                <X size={20} />
              </button>
            </div>

            <ul className="more-modal-menu">
              {otherMenus.map(({ name, link, icon: Icon }) => (
                <li key={name} className="more-modal-item">
                  <Link to={link} className="more-modal-link" onClick={onClose}>
                    {Icon && (
                      <span className="more-modal-item-icon-wrapper">
                        <Icon className="more-modal-item-icon" />
                      </span>
                    )}

                    <span className="more-modal-item-text">{name}</span>

                    <span className="more-modal-item-shine" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MoreModal;
