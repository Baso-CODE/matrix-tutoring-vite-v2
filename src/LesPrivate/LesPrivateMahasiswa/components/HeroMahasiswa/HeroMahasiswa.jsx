import { Link } from "react-router-dom";
import { selectContactCsData } from "../../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../../lib/hooks";
import "./HeroMahasiswa.css";
import ReusableButton from "../../../../helper/Button/ReusableButton/ReusableButton";
import { ArrowRightCircleIcon } from "lucide-react";
const HeroMahasiswa = () => {
  const contactData = useAppSelector(selectContactCsData);
  return (
    <section className="hero__mahasiswa">
      <div className="hero__mahasiswa-overlay"></div>
      <div className="hero__mahasiswa-content">
        <div className="hero__mahasiswa-text">
          <h1 className="hero__mahasiswa-title">
            Les Privat Mahasiswa & Kuliah Online Terbaik — Bimbingan Tugas,
            Ujian, dan Skripsi
            <br />
            <span>
              Dapatkan pendampingan langsung dari Tutor Profesional agar
              kuliahmu lebih mudah & terarah!
            </span>
          </h1>

          <p className="hero__mahasiswa-description">
            LPS Education menyediakan program{" "}
            <strong>les privat untuk mahasiswa</strong> dengan metode belajar
            terstruktur,
            <strong>tutor berpengalaman</strong>, dan bimbingan yang disesuaikan
            dengan kebutuhanmu. Kami siap membantu dalam{" "}
            <strong>
              tugas kuliah, persiapan ujian, hingga penyusunan skripsi
            </strong>
            , agar kamu bisa kuliah dengan percaya diri dan berprestasi lebih
            tinggi.
          </p>

          <div className="hero__mahasiswa-buttons">
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
        <div className="hero__mahasiswa-image">
          <img
            src="/images/les-private/mahasiswa/model-mahasiswa.png"
            alt="Model Hero Les Privat Program SMP"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroMahasiswa;
