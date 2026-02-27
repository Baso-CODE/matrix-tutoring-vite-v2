import "./OnlineLesOption.css";

const OnlineLesOptions = ({ location }) => {
  return (
    <div className="container-all">
      <div className="online-les-options">
        <div className="title-description-online-les-option">
          <h2>Saat Ini, Matrix Juga Melayani Les Privat Online</h2>
          <p>
            Les Privat Online - Belajar dimana saja, kapan saja dengan kualitas
            dan layanan yang sama
          </p>
        </div>
        <div className="options">
          <div className="online-les-option">
            <img
              loading="lazy"
              src="/images/learnhing-methode/zoom.webp"
              alt={`Les Privat Online dengan Metode Zoom (TK, SD, SMP, SMA, TKA, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${
                location ? `${location}` : ""
              } - Matrix Tutoring`}
              width="600"
              height="600"
            />
          </div>
          <div className="online-les-option">
            <img
              loading="lazy"
              src="/images/learnhing-methode/google-meet.webp"
              alt={`Les Privat Online dengan Metode Google Meet (TK, SD, SMP, SMA, TKA, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${
                location ? `${location}` : ""
              } - Matrix Tutoring`}
              width="600"
              height="600"
            />
          </div>
          <div className="online-les-option">
            <img
              loading="lazy"
              src="/images/learnhing-methode/whatsapp.webp"
              alt={`Les Privat Online dengan Metode Whatsapp (TK, SD, SMP, SMA, TKA, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${
                location ? `${location}` : ""
              } - Matrix Tutoring`}
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineLesOptions;
