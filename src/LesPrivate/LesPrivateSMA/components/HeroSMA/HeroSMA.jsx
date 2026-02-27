import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./HeroSMA.css";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { ArrowRightCircleIcon } from "lucide-react";

const HeroSMA = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero__sma">
      <div className="hero__sma-overlay"></div>
      <div className="hero-sma-content">
        <div className="hero-sma-text">
          <h1 className="hero-sma-title">
            Les Privat SMA Terbaik — Bantu Siswa Siap Ujian Sekolah & Masuk PTN
            Favorit
            <br />
            <span>
              Raih Nilai Tinggi dan Wujudkan Impian Masuk Kampus Terbaik!
            </span>
          </h1>

          <p className="hero-sma-description">
            Program <strong>les privat SMA</strong> dari Edumatrix Indonesia
            dirancang untuk membantu siswa memahami materi pelajaran dengan
            mudah, menghadapi <strong>ujian sekolah dan UTBK SNBT</strong>,
            serta <strong>persiapan masuk universitas terbaik</strong>.
            Didampingi oleh <strong>guru privat SMA berpengalaman</strong> dan
            metode belajar yang terstruktur, kami siap meningkatkan prestasi
            akademik siswa dan membantu mereka meraih{" "}
            <strong>kampus impian</strong>.
          </p>

          <div className="hero-sma-buttons">
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
        <div className="hero-sma-image">
          <img
            src="/images/les-private/sma/model-SMA.png"
            alt="Model Les Privat Program SMP"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSMA;
