import { ArrowLeft, Home, SearchX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="not-found-page">
      <div className="not-found-orb not-found-orb-one" />
      <div className="not-found-orb not-found-orb-two" />
      <div className="not-found-orb not-found-orb-three" />

      <div className="not-found-container">
        <div className="not-found-glass">
          <div className="not-found-shine" />

          <div className="not-found-icon-wrapper">
            <SearchX className="not-found-icon" />
          </div>

          <div className="not-found-number-wrapper">
            <span className="not-found-number">404</span>
            <span className="not-found-number-reflection">404</span>
          </div>

          <div className="not-found-content">
            <span className="not-found-label">HALAMAN TIDAK DITEMUKAN</span>

            <h1 className="not-found-title">Sepertinya Kamu Tersesat</h1>

            <p className="not-found-description">
              Halaman yang kamu cari mungkin telah dipindahkan, dihapus, atau
              alamat yang dimasukkan tidak tersedia.
            </p>

            <div className="not-found-actions">
              <button
                type="button"
                className="not-found-button not-found-button-primary"
                onClick={() => navigate("/")}>
                <Home size={18} />
                <span>Kembali ke Beranda</span>
              </button>

              <button
                type="button"
                className="not-found-button not-found-button-secondary"
                onClick={() => navigate(-1)}>
                <ArrowLeft size={18} />
                <span>Kembali</span>
              </button>
            </div>
          </div>

          <div className="not-found-bottom-glow" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
