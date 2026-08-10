import "./WhyMTXImportant.css";

const WhyMTXImportant = ({ location }) => {
  return (
    <section className="container-all">
      <div className="centered-content__why-mtx-important">
        <h2>Mengapa Les Privat untuk Anak SMA itu Penting?</h2>

        {/* Wrapper Grid untuk membagi posisi Kiri (Teks) dan Kanan (Gambar) */}
        <div className="why-mtx-grid-layout">
          {/* Kolom Kiri: Seluruh Teks */}
          <div className="why-mtx-text-content">
            <p>
              Jenjang SMA adalah salah satu fase terpenting dalam kehidupan
              seorang anak. Di fase ini siswa SMA mulai menghadapi pelajaran
              yang semakin kompleks, persaingan akademik yang semakin ketat,
              serta berbagai ujian penting yang akan menentukan masa depan
              mereka.
            </p>
            <p>
              Bukan hanya nilai rapor yang dipertaruhkan, tetapi juga kesempatan
              untuk masuk universitas favorit, meraih beasiswa, atau memenangkan
              lomba akademik.
            </p>
            <p>
              Bagi banyak orang tua, masa SMA anak adalah saat yang penuh
              kebanggaan sekaligus kekhawatiran:
            </p>
            <ul className="checklist">
              <li>Apakah anak mampu memahami materi yang semakin sulit?</li>
              <li>
                Bagaimana cara menyeimbangkan pelajaran dengan aktivitas
                organisasi dan hobi mereka?
              </li>
              <li>
                Apa strategi terbaik agar anak siap menghadapi TKA, UTBK SNBT,
                dan ujian masuk perguruan tinggi lainnya?
              </li>
            </ul>
            <p>
              Semua pertanyaan tersebut seringkali muncul dan jawabannya adalah
              anak membutuhkan pendampingan belajar yang tepat dan personal
              (privat).
            </p>
            <p>
              Melalui <b>Les Privat SMA bersama Matrix Tutoring</b>, anak akan
              mendapatkan pendampingan yang terarah dan personal. Guru privat
              mendampingi dengan sabar, membantu memahami konsep sulit, mengasah
              keterampilan mengerjakan soal, sekaligus membangun motivasi
              belajar agar anak siap menghadapi tantangan akademik dan meraih
              cita-cita.
            </p>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="why-mtx-image-wrapper">
            <img
              src="/images/les-private/sma/why-matrix-important.webp"
              alt={`Les Privat SMA ${
                location ? `di ${location}` : "Indonesia"
              } - Matrix Tutoring`}
              className="les-privat-sma-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x500/007bff/ffffff?text=Les+Privat+SMA+beserta+logo";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMTXImportant;
