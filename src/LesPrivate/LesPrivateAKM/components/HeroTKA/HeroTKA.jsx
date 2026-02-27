import { ArrowRightCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./HeroTKA.css";

const HeroTKA = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero__tka">
      <div className="hero__tka-overlay"></div>
      <div className="hero__tka-content">
        <div className="hero__tka-text">
          <h1 className="hero__tka-title">
            Bimbingan TKA Terbaik — Persiapan Tes Kompetensi Akademik untuk
            Masuk PTN Impian
            <br />
            <span>
              Latihan Intensif, Materi Terstruktur, dan Pembahasan Mendalam
            </span>
          </h1>

          <p className="hero__tka-description">
            Program <strong>bimbingan TKA</strong> dari Edumatrix Indonesia
            membantu siswa menghadapi
            <strong> Tes Kompetensi Akademik</strong> dengan percaya diri. Kami
            menyediakan <strong>latihan soal intensif</strong>,
            <strong>strategi belajar efektif</strong>, serta pendampingan{" "}
            <strong>guru berpengalaman</strong> agar siswa siap bersaing di
            seleksi <strong>masuk Perguruan Tinggi Negeri (PTN)</strong> seperti
            UI, UGM, ITB, dan lainnya. Bersama{" "}
            <strong>Edumatrix Indonesia</strong>, wujudkan impian kuliah di
            kampus terbaik!
          </p>

          <div className="hero__tka-buttons">
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
        <div className="hero__tka-image">
          <img
            loading="eager"
            src="/images/les-private/ksm/model-program-tka.png"
            alt="Model Hero Les Privat Program TKA"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroTKA;
