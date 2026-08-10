import "./FokusPembelajaranSNBT.css";

const FokusPembelajaranSNBT = ({ location }) => {
  return (
    <section className="fokus-snbt-section" id="Learnhing_Focus_SNBT">
      <div className="fokus-snbt-container">
        <h2>Fokus Pembelajaran UTBK SNBT</h2>
        <p>
          Pada Seleksi Nasional Berbasis Tes (SNBT) ada 7 materi ujian atau
          subtest yang diujikan yang terdiri dari dua komponen besar, yaitu Tes
          Potensi Skolastik dan Tes Literasi.
        </p>

        <div className="fokus-snbt-row">
          {/* Kolom Kiri: Tes Skolastik */}
          <div className="fokus-snbt-col">
            <div className="fokus-snbt-img-box">
              <img
                src="/images/les-private/sbmptn/test-skolistik.png"
                alt={`Les Privat UTBK SNBT Tes Potensi Skolastik ${
                  location ? `${location}` : "Indonesia"
                } - Matrix Tutoring`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/800x350/007bff/ffffff?text=Tes+Potensi+Skolastik+UTBK+SNBT";
                }}
              />
            </div>
          </div>

          {/* Kolom Kanan: Tes Literasi */}
          <div className="fokus-snbt-col">
            <div className="fokus-snbt-img-box">
              <img
                src="/images/les-private/sbmptn/test-literasi.png"
                alt={`Les Privat UTBK SNBT Tes Potensi Literasi ${
                  location ? `${location}` : "Indonesia"
                } - Matrix Tutoring`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/800x350/007bff/ffffff?text=Tes+Literasi+UTBK+SNBT";
                }}
              />
            </div>
          </div>
        </div>

        <p>
          Sesi belajar Les Privat UTBK SNBT bisa difokuskan untuk mempelajari
          semua subtes UTBK atau fokus pada satu atau beberapa subtest (mapel)
          tertentu. Secara umum, 7 subtes UTBK SNBT secara garis besar dapat
          digolongkan ke dalam 3 mata pelajaran, yaitu Matematika, Bahasa
          Indonesia, dan Bahasa Inggris.
        </p>

        <p>
          Dalam pembelajaran Les Privat UTBK SNBT, siswa privat akan mendapatkan
          3 tutor yang berbeda, yaitu tutor Matematika, Bahasa Indonesia, dan
          Bahasa Inggris. Tutor Matematika akan mendampingi siswa belajar
          Penalaran Matematika, Pengetahuan Kuantitatif, dan Penalaran Umum
          bagian Kuantitatif. Sementara itu, tutor Bahasa Indonesia akan
          mengajarkan subtest Pengetahuan dan Pemahaman, Pemahaman Bacaan dan
          Menulis, Literasi Bahasa Indonesia, dan Penalaran Umum bagian Induktif
          dan Deduktif. Kemudian, tutor Bahasa Inggris khusus untuk belajar
          Literasi Bahasa Inggris.
        </p>
      </div>
    </section>
  );
};

export default FokusPembelajaranSNBT;
