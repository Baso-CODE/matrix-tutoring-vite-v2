import "./FlowBelajarSimakUI.css";

const flowData = [
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/clipboard.webp",
    title: "Diagnosis Awal & Pemetaan Materi",
    description:
      "Kami memulai dengan asesmen komprehensif untuk mengidentifikasi kekuatan dan kelemahan akademik Anda, serta memetakan materi SIMAK UI yang perlu difokuskan.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/book-open.webp",
    title: "Pendalaman Konsep & Teori",
    description:
      "Memahami secara menyeluruh materi esensial TKPA dan TKA (Saintek/Soshum) yang sering muncul di ujian SIMAK UI dengan bimbingan personal.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/light-bulb.webp",
    title: "Strategi & Taktik Pengerjaan Soal",
    description:
      "Menguasai berbagai teknik dan trik cepat serta efektif untuk menyelesaikan soal-soal SIMAK UI yang kompleks dan bervariasi.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/filetext.webp",
    title: "Latihan Soal & Pembahasan Intensif",
    description:
      "Mengerjakan bank soal SIMAK UI dari tahun-tahun sebelumnya (UTBK, SBMPTN, dll.) dan mendapatkan pembahasan detail untuk setiap soal.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/alarmcheck.webp",
    title: "Simulasi Ujian (Try Out) Berkala",
    description:
      "Mengikuti try out yang disimulasikan sesuai kondisi riil ujian SIMAK UI untuk melatih manajemen waktu, ketahanan mental, dan strategi pengerjaan.",
  },
  {
    icon: "/images/les-private/simak-ui/flow-simak-ui/trendingup.webp",
    title: "Evaluasi Hasil & Bimbingan Lanjutan",
    description:
      "Menganalisis performa try out secara mendalam, mengidentifikasi area yang masih perlu ditingkatkan, dan mendapatkan bimbingan personal dari pengajar ahli untuk perbaikan.",
  },
];

const FlowBelajarSimakUI = ({ location }) => {
  return (
    <section id="simak-ui-success-flow" className="simak-flow-section">
      <div className="simak-flow-container">
        <h2 className="simak-flow-title">
          Alur Belajar Les Privat SIMAK UI Matrix Tutoring Indonesia
        </h2>
        <p className="simak-flow-subtitle">
          Kami hadir membimbing Anda meraih kursi di Universitas Indonesia
          dengan strategi belajar yang teruji dan personal, sesuai target
          jurusan impian Anda.
        </p>

        <div className="simak-steps-wrapper">
          {flowData.map((step, index) => (
            <div className="simak-step-item" key={index}>
              <div className="simak-step-icon-box">
                <span className="simak-step-number">{index + 1}</span>
                <img
                  src={step.icon}
                  alt={`${step.title} di ${
                    location ? `${location}` : "Indonesia"
                  } - Matrix Tutoring`}
                  className="simak-step-icon"
                />
              </div>
              <div className="simak-step-content">
                <h3 className="simak-step-title">{step.title}</h3>
                <p className="simak-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowBelajarSimakUI;
