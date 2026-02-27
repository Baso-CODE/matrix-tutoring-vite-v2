import "./SolusiBelajarSMP.css";

const SolusiBelajarSMP = ({ location }) => {
  return (
    <section className="container-all">
      <div className="centered-content-programLesPrivatSMP">
        <h2>Les Privat SMP: Solusi Belajar yang Efektif dan Personal</h2>

        <div className="content-smp-wrapper">
          {/* TEXT */}
          <div className="text-section-solusi-belajar-smp">
            <p>
              Jenjang SMP adalah masa transisi penting dari hanya belajar konsep
              dasar menjadi belajar yang lebih kompleks dan mendalam. Siswa SMP
              mulai menghadapi tantangan yang lebih besar dalam belajar di
              antaranya:
            </p>
            <ul className="numbered-list">
              <li>Pelajaran yang makin sulit dan beragam</li>
              <li>Jadwal padat dan tugas sekolah yang menumpuk</li>
              <li>
                Tekanan dari nilai, ranking, dan persiapan masuk SMA unggulan
              </li>
            </ul>
            <p>
              Tanpa bimbingan yang tepat, siswa bisa mudah kewalahan, kehilangan
              motivasi, bahkan takut atau tidak suka dengan pelajaran tertentu.
            </p>

            <p>
              <strong>Les Privat SMP dari Matrix Tutoring</strong> hadir sebagai
              solusi belajar yang lebih efektif, nyaman, dan fokus pada
              kebutuhan belajar siswa.
            </p>
          </div>

          {/* IMAGE */}
          <div className="image-section-solusi-belajar-smp">
            <img
              className="les-privat-sd-image"
              src="/images/les-private/smp/solusi-belajar-les-privat-smp.webp   
              "
              // solusi-belajar-smp.jpg
              alt={`Ilustrasi anak SMP belajar dengan bimbingan privat ${
                location ? `di ${location}` : " "
              }`}
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/800x460/007bff/ffffff?text=Solusi+Belajar+Les+Privat+SMP";
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolusiBelajarSMP;
