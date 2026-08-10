import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import "./LesPrivateSimakUIHeader.css";

const LesPrivateSimakUIHeader = ({ location }) => {
  return (
    <section className="simak-header-container-all">
      <div className="simak-header-wrapper">
        {/* Bagian Teks di Kiri */}
        <div className="simak-header-text-content">
          <h2 id="les-privat-simak-ui">
            Les Privat Simak UI Fokus Intensif Persiapan Ujian Mandiri
            Universitas Indonesia
          </h2>
          <p>
            Matrix Tutoring memiliki Layanan Program Intensif Privat Simak UI
            persiapan Ujian Mandiri UI dengan dua pilihan sistem belajar, yaitu
            Privat Offline dan Online. Pembelajaran dengan sistem Privat Offline
            (Guru les privat datang ke rumah) dapat menjangkau Anda yang
            berlokasi di Jakarta, Bogor, Depok, Tangerang, Tangsel, Bekasi,
            Bandung, Bali, Medan, Semarang, Surabaya, dan Yogyakarta. Sementara
            itu, Privat Online (via Zoom/Google Meet) dapat menjangkau seluruh
            wilayah di Indonesia hingga Luar Negeri.
          </p>
        </div>

        {/* Bagian Gambar di Kanan */}
        <div className="simak-header-image-box">
          <img
            loading="lazy"
            src="/images/les-private/simak-ui/SIMAK-UI-5x4.webp"
            alt={`Les Privat Simak UI Program Intensif ${
              location ? "di " + location : "Indonesia"
            } - Matrix Tutoring`}
          />
        </div>
      </div>

      {/* Konten Tambahan di Bawah */}
      <div className="simak-header-additional-content">
        {/* content 1 */}
        <Content1 />
        <br />
        <br />

        {/* Content 2 */}
        <Content2 />
        <br />
        <br />

        {/* Content 3 */}
        <Content3 />
      </div>
    </section>
  );
};

export default LesPrivateSimakUIHeader;
