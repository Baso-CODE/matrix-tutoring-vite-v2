import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";
import { Menus } from "../../utils";
import NavDescktop from "../NavDescktop/NavDescktop";
import "./Nav.css";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const contactData = useAppSelector(selectContactCsData);

  const handleConsultationClick = () => {
    if (!contactData?.link_cta) return;

    window.open(contactData.link_cta, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="main-navbar">
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/" aria-label="Matrix Tutoring Home">
              <img
                loading="eager"
                src="/images/logo-matrix-tutoring-putih.png"
                alt="Matrix Tutoring"
                className="logo-nav"
              />
            </Link>
          </div>

          <ul className="desktop-menu">
            {Menus.map((menu) => (
              <NavDescktop menu={menu} key={menu.name} />
            ))}
          </ul>

          <div className="auth-menu">
            <div className="button-container">
              <button
                type="button"
                className="button-with-icon"
                onClick={handleConsultationClick}
                aria-label="Chat dengan Matrix Tutoring">
                <span className="button-with-icon__shine" />

                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true">
                  <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                </svg>

                <span className="button-with-icon__text">Chat Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
