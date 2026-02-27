import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./HeroTK.css";
import { ArrowRightCircleIcon } from "lucide-react";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";

const HeroTK = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero-tk__new">
      <div className="hero-tk__new-overlay"></div>
      <div className="hero-tk__new-content">
        {/* Bagian teks */}
        <div className="hero-tk__new-text">
          <h1 className="hero-tk__new-title">
            Les Privat Calistung & TK Terbaik — Bantu Anak Cepat Bisa Membaca,
            Menulis, dan Berhitung!
            <br />
            <span>Belajar Seru dan Menyenangkan Bersama Guru Profesional!</span>
          </h1>

          <p className="hero-tk__new-description">
            Program <strong>les privat Calistung (Baca, Tulis, Hitung)</strong>{" "}
            Edumatrix dirancang khusus untuk anak usia TK agar lebih siap masuk
            SD. Dengan <strong>guru les TK berpengalaman</strong> dan metode
            belajar yang interaktif, anak akan belajar dengan gembira, cepat
            memahami pelajaran, serta mengembangkan kemampuan dasar akademik dan
            kemandirian sejak dini.
          </p>

          <div className="hero-tk__new-buttons">
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
        <div className="hero-tk__new-image">
          <img
            src="/images/les-private/tk/model-TK.png"
            alt="Model Les Privat Program TK"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroTK;
