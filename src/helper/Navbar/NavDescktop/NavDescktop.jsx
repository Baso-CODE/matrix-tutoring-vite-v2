import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavDescktop.css";

export default function NavDescktop({ menu }) {
  const [isHover, setIsHover] = useState(false);
  const location = useLocation();

  const hasSubMenu = Boolean(menu?.subMenu?.length);
  const isActive = location.pathname === (menu.link || "#");

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      rotateX: -6,
      transition: {
        duration: 0.18,
        ease: "easeOut",
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.li
      className="menu-item"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      key={menu.name}>
      <Link to={menu.link} className={`menu-link ${isActive ? "active" : ""}`}>
        <span className="menu-link-text">{menu.name}</span>

        {hasSubMenu && (
          <ChevronDown
            className={`chevron-icon ${isHover ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}>
          <span className="sub-menu-glow sub-menu-glow-one" />
          <span className="sub-menu-glow sub-menu-glow-two" />

          <div
            className={`grid ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
            }`}>
            {menu.subMenu.map((submenu, i) => (
              <div className="menu-box" key={`${submenu.name}-${i}`}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="menu-heading">{menu.subMenuHeading[i]}</p>
                )}

                <Link to={submenu.link} className="menu-content">
                  <div className="icon-box-descktop">
                    {submenu.icon && <submenu.icon />}
                  </div>

                  <div className="menu-content-text">
                    <div className="submenu-name">{submenu.name}</div>

                    {submenu.desc && (
                      <p className="submenu-desc">{submenu.desc}</p>
                    )}
                  </div>

                  <span className="menu-content-shine" />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
