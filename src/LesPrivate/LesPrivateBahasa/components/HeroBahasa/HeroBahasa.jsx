import "./HeroBahasa.css";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { ArrowRightCircleIcon } from "lucide-react";
const HeroBahasa = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="">
      <div className="hero__bahasa">
        <div className="hero__bahasa-overlay"></div>
        <div className="hero__bahasa-content">
          {/* Bagian teks */}
          <div className="hero__bahasa-text">
            <h1 className="hero__bahasa-title">
              Belajar Bahasa Asing Online dari Rumah — Kuasai Bahasa Inggris,
              Korea, Jepang & Mandarin
              <br />
              <span>
                Buka peluang global bersama Tutor Profesional dari Matrix
                Tutoring!
              </span>
            </h1>

            <p className="hero__bahasa-description">
              Program <strong>kursus bahasa asing online</strong> Matrix
              Tutoring dirancang untuk membantu kamu{" "}
              <strong>
                menguasai bahasa Inggris, Jepang, Korea, dan Mandarin
              </strong>{" "}
              dengan metode interaktif dan materi terstruktur. Dipandu oleh{" "}
              <strong>tutor berpengalaman</strong>, kamu akan mahir berbicara,
              menulis, mendengar, dan membaca, sehingga lebih siap menghadapi
              ujian, studi ke luar negeri, maupun perkembangan karier
              profesional.
            </p>

            <div className="hero__bahasa-buttons">
              <Link
                to={contactData?.link_cta}
                className="button_no-link-direction">
                <ReusableButton
                  text="Konsultasi Sekarang!"
                  bgColor="#ffffff"
                  borderColor="#007bff"
                  textColor="#007bff"
                  icon={<ArrowRightCircleIcon />}
                />
              </Link>
            </div>
          </div>

          {/* Bagian gambar */}
          <div className="hero__bahasa-image">
            <img
              loading="eager"
              src="/images/les-private/bahasa-asing/BG2.png"
              alt="Model Hero Les Privat Program Bahasa Asing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBahasa;
