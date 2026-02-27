import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./HeroSD.css";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { ArrowRightCircleIcon } from "lucide-react";

const HeroSD = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero-sd">
      <div className="hero-sd-overlay"></div>
      <div className="hero-sd-content">
        <div className="hero-sd-text">
          <h1 className="hero-sd-title">
            Les Privat SD Terbaik untuk Bantu Anak Lebih Cepat Paham Pelajaran
            Sekolah!
            <br />
            <span>
              Belajar Jadi Lebih Mudah dan Menyenangkan Bersama Tutor
              Berpengalaman!
            </span>
          </h1>

          <p className="hero-sd-description">
            Dapatkan pengalaman belajar yang menyenangkan dengan{" "}
            <strong>guru les privat SD profesional</strong> dari Edumatrix
            Indonesia. Program ini dirancang untuk membantu anak memahami
            pelajaran sekolah dengan cara yang lebih mudah dan efektif. Melalui{" "}
            <strong>pendekatan personal dan metode interaktif</strong>, anak
            akan lebih fokus, percaya diri, dan siap meraih prestasi di sekolah.
          </p>

          <div className="hero-sd-buttons">
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
        <div className="hero-sd-image">
          <img
            src="/images/les-private/sd/model-sd.png"
            alt="Model Les Privat Program SD"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSD;
