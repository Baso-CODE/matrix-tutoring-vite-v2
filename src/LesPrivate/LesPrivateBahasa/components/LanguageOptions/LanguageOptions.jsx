import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./LanguageOptions.css";

// Data bahasa yang akan ditampilkan
const languageItems = [
  { image: "/images/bahasa/inggris.webp", name: "Bahasa Inggris" },
  { image: "/images/bahasa/china.webp", name: "Bahasa Mandarin" },
  { image: "/images/bahasa/jepang.webp", name: "Bahasa Jepang" },
  { image: "/images/bahasa/korea.webp", name: "Bahasa Korea" },
  { image: "/images/bahasa/german.webp", name: "Bahasa Jerman" },
  { image: "/images/bahasa/prancis.webp", name: "Bahasa Prancis" },
  { image: "/images/bahasa/arabic.webp", name: "Bahasa Arab" },
  { image: "/images/bahasa/indonesia.webp", name: "BIPA (Bahasa Indonesia)" },
];

const LanguageOptions = ({ location }) => {
  const contactData = useAppSelector(selectContactCsData);

  return (
    <div id="language-options-section" className="lang-opt-section">
      <div className="lang-opt-container">
        <h2 className="lang-opt-title">
          Pilihan Bahasa Asing yang Kami Tawarkan
        </h2>
        <p className="lang-opt-subtitle">
          Temukan bahasa impian Anda dan mulai perjalanan belajar bersama kami
          dengan beragam pilihan bahasa populer.
        </p>

        <div className="lang-opt-grid">
          {languageItems.map((item, index) => (
            <div className="lang-opt-card" key={index}>
              <img
                src={item.image}
                alt={`Icon Les Privat Bahasa ${item.name} ${
                  location ? `di ${location}` : "Indonesia"
                }`}
                loading="lazy"
                className="lang-opt-card-logo"
              />
              {/* Nama Bahasa */}
              <div className="lang-opt-card-header">{item.name}</div>
              {/* Tombol Aksi */}
              <Link className="lang-opt-card-button" to={contactData?.link_cta}>
                Daftar Sekarang
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageOptions;
