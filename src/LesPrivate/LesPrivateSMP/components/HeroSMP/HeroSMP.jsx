import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./HeroSMP.css";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { ArrowRightCircleIcon } from "lucide-react";

const HeroSMP = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero-smp">
      <div className="hero-smp-overlay"></div>
      <div className="hero-smp-content">
        <div className="hero-smp-text">
          <h1 className="hero-smp-title">
            Les Privat SMP Terbaik — Bantu Anak Pahami Pelajaran & Siap Ujian!
            <br />
            <span>
              Nilai Naik, Prestasi Meningkat Bersama Guru Profesional!
            </span>
          </h1>

          <p className="hero-smp-description">
            Program <strong>les privat SMP</strong> dari Edumatrix Indonesia
            membantu siswa lebih mudah memahami pelajaran sekolah dengan{" "}
            <strong>guru privat berpengalaman</strong>. Dengan metode belajar
            yang terstruktur, interaktif, dan disesuaikan dengan kebutuhan
            setiap siswa, kami mendampingi anak untuk{" "}
            <strong>siap menghadapi ujian sekolah</strong>,
            <strong>meningkatkan nilai rapor</strong>, serta meraih prestasi
            akademik terbaik.
          </p>

          <div className="hero-smp-buttons">
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
        <div className="hero-smp-image">
          <img
            src="/images/les-private/smp/model-smp.png"
            alt="Model Les Privat Program SMP"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSMP;
