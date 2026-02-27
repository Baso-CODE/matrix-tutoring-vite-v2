import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./HeroSNBT.css";

const HeroSNBT = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero__snbt">
      <div className="hero__snbt-overlay"></div>
      <div className="hero__snbt-content">
        <div className="hero__snbt-text">
          <h1 className="hero__snbt-title">
            Program Intensif UTBK SNBT 2026 — Bimbel Online & Les Privat Masuk
            PTN Favorit
            <br />
            <span>
              Belajar Terarah, Kuasai Soal UTBK, dan Raih Kampus Impianmu!
            </span>
          </h1>

          <p className="hero__snbt-description">
            Persiapkan diri menghadapi <strong>UTBK SNBT 2026</strong> bersama{" "}
            <strong>Matrix Tutoring</strong>. Dapatkan{" "}
            <strong>strategi belajar terarah</strong>,{" "}
            <strong>tutor berpengalaman</strong>, dan
            <strong>tryout berkala</strong> yang membantu kamu memahami pola
            soal dan meningkatkan skor. Dengan{" "}
            <strong>program intensif online maupun tatap muka</strong>, peluang
            lolos ke <strong>PTN impian</strong>
            kini lebih besar dari sebelumnya!
          </p>

          <div className="hero__snbt-buttons">
            <Link
              to={contactData?.link_cta}
              className="button_no-link-direction">
              <ReusableButton
                text="Daftar Program SNBT Sekarang!"
                bgColor="#ffffff"
                borderColor="#007bff"
                textColor="#007bff"
                icon={<ArrowRightCircleIcon />}
              />
            </Link>
          </div>
        </div>

        {/* Bagian gambar */}
        <div className="hero__snbt-image">
          <img
            src="/images/les-private/sbmptn/model-program-utbk.png"
            alt="Model Hero Program SNBT UTBK 2026"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSNBT;
