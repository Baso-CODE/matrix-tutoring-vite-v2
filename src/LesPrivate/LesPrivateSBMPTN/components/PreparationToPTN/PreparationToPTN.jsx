import "./PreparationToPTN.css";

const PreparationToPTN = ({ location }) => {
  return (
    <section className="container-all">
      <div className="prep-ptn-wrapper">
        {/* Bagian Teks di Kiri */}
        <div className="prep-ptn-text-content">
          <h2>Les Privat UTBK SNBT – Persiapan Tembus Masuk PTN Impian</h2>
          <p>
            Masuk Perguruan Tinggi Negeri (PTN) favorit adalah impian besar bagi
            hampir semua siswa SMA/SMK/MA di Indonesia. PTN tidak hanya
            menawarkan kualitas pendidikan yang tinggi, tetapi juga membuka
            peluang karier yang lebih luas di masa depan. Namun, persaingan UTBK
            SNBT semakin tahun semakin ketat. Ribuan bahkan ratusan ribu siswa
            bersaing setiap tahunnya memperebutkan kursi terbatas di jurusan
            favorit.
          </p>
          <p>
            Dalam kondisi seperti ini, belajar mandiri sering kali tidak cukup.
            Materi UTBK SNBT berbeda dengan ujian sekolah biasa karena lebih
            menekankan pada kemampuan berpikir kritis, logika, penalaran, serta
            strategi menyelesaikan soal dalam waktu cepat. Oleh karena itu,
            siswa membutuhkan bimbingan belajar yang terarah, personal, dan
            intensif agar cita-cita masuk PTN Impian dapat terwujud.
          </p>
        </div>

        {/* Bagian Gambar di Kanan */}
        <div className="prep-ptn-image-box">
          <img
            src="/images/les-private/sbmptn/UTBK-5x4.webp"
            alt={`Les Privat UTBK SNBT Preparation To PTN ${
              location ? "di " + location : "Indonesia"
            } - Matrix Tutoring`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x360/007bff/ffffff?text=Les+Privat+UTBK+SNBT";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PreparationToPTN;
