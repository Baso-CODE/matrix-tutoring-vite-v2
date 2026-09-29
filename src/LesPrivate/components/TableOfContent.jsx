import { Maximize2, Minimize2 } from "lucide-react";
import { useState } from "react";
import "./TableOfContents.css";

const TableOfContents = ({ title = "Table of Contents", items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="container-TOC">
      <div className={`toc-container ${isOpen ? "open" : ""}`}>
        <span className="toc-glow toc-glow-one" />
        <span className="toc-glow toc-glow-two" />

        <div className="toc-container-content">
          <div className="toc-header">
            <h2 className="toc-title">
              <span className="toc-icon">📑</span>
              {title}
            </h2>

            <button
              type="button"
              className="toc-toggle"
              onClick={toggleOpen}
              aria-label={isOpen ? "Tutup daftar isi" : "Buka daftar isi"}
              aria-expanded={isOpen}>
              {isOpen ? <Minimize2 /> : <Maximize2 />}
            </button>
          </div>

          <div className={`toc-content-wrapper ${isOpen ? "open" : ""}`}>
            <ul className="toc-list">
              {items.map((item, index) => (
                <li key={index} className="toc-item">
                  <a href={item.href} className="toc-link">
                    <span className="toc-item-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="toc-item-text">{item.text}</span>
                  </a>

                  {item.subItems?.length > 0 && (
                    <ul className="toc-sublist">
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex} className="toc-subitem">
                          <a href={subItem.href} className="toc-sublink">
                            <span className="toc-sub-dot" />
                            <span>{subItem.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
