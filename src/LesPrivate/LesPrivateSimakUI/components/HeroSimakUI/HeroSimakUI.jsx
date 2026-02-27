import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./HeroSimakUI.css";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { ArrowRightCircleIcon } from "lucide-react";

const HeroSimakUI = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero__simakUI">
      <div className="hero__simakUI-overlay"></div>
      <div className="hero__simakUI-content">
        <div className="hero__simakUI-text">
          <h1 className="hero__simakUI-title">
            Program Intensif SIMAK UI — Bimbel & Les Privat Online Persiapan
            Masuk Universitas Indonesia
            <br />
            <span>
              Belajar Terarah, Mulai Lebih Dini, dan Raih Kesempatan Lolos UI
              Bersama Matrix Tutoring
            </span>
          </h1>

          <p className="hero__simakUI-description">
            Siapkan diri menghadapi <strong>ujian SIMAK UI</strong> dengan
            program intensif dari <strong>Matrix Tutoring</strong>. Dapatkan{" "}
            <strong>metode belajar terstruktur</strong>,{" "}
            <strong>tutor berpengalaman lulusan PTN terbaik</strong>, dan
            <strong>pendampingan personal</strong> untuk memahami materi,
            menguasai soal, serta meningkatkan peluang
            <strong>lolos Universitas Indonesia</strong> secara maksimal — bisa
            belajar dari rumah atau secara online!
          </p>

          <div className="hero__simakUI-buttons">
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
        <div className="hero__simakUI-image">
          <img
            loading="eager"
            src="/images/les-private/simak-ui/model-simak-ui.png"
            alt="Model Hero Program SIMAK UI"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSimakUI;
