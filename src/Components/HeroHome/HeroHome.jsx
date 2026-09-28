/* eslint-disable react-hooks/exhaustive-deps */
import { ArrowRightCircleIcon, Check, Clock3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReusableButton from "../../helper/Button/ReusableButton/ReusableButton";
import ImageModal from "../../helper/ImageModal/ImageModal";
import { getAllRandomSlogans } from "../../helper/request/getAllSloganSRequest";
import "./HeroHome.css";

const features = [
  "Guru Profesional & Berpengalaman",
  "Bebas pilih guru sesuai kriteria",
  "Pembayaran langsung ke rekening lembaga",
  "Program TK, SD, SMP, SMA, TKA, UTBK, OSN, Mahasiswa & lainnya",
  "Privat Online, Guru Datang ke Rumah, atau kombinasi keduanya",
  "Jadwal belajar fleksibel mengikuti waktu siswa",
  "Free Biaya Pendaftaran",
];

const HeroHome = ({ contactData }) => {
  const [dataSlogan, setDataSlogan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  const PROMO_DURATION_MINUTES = 120;
  const END_TIME_STORAGE_KEY = "promoEndTime";
  const timerIntervalRef = useRef(null);

  const splitSlogan = (slogan) => {
    if (!slogan) return { mainText: "", highlightWord: "" };

    const words = slogan.split(" ");

    if (words.length <= 1) {
      return {
        mainText: "",
        highlightWord: slogan,
      };
    }

    const highlightWord = words.pop();

    return {
      mainText: words.join(" "),
      highlightWord,
    };
  };

  useEffect(() => {
    const fetchDataSlogan = async () => {
      try {
        const response = await getAllRandomSlogans();
        setDataSlogan(response.data || null);
      } catch (error) {
        console.error("Error fetching slogan data:", error);
        setDataSlogan({
          content: "Bimbel Les Privat Terbaik untuk Semua Jenjang",
        });
      }
    };

    fetchDataSlogan();
  }, []);

  const currentSloganText =
    dataSlogan?.content || "Bimbel Les Privat Terbaik untuk Semua Jenjang";

  const { mainText, highlightWord } = splitSlogan(currentSloganText);

  const calculateTimeLeft = () => {
    const now = Date.now();
    let endTime = localStorage.getItem(END_TIME_STORAGE_KEY);

    if (!endTime) {
      endTime = now + PROMO_DURATION_MINUTES * 60 * 1000;
      localStorage.setItem(END_TIME_STORAGE_KEY, String(endTime));
    } else {
      endTime = parseInt(endTime, 10);
    }

    const difference = endTime - now;

    if (difference <= 0) {
      localStorage.removeItem(END_TIME_STORAGE_KEY);
      return {};
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    timerIntervalRef.current = setInterval(() => {
      const nextTime = calculateTimeLeft();

      if (Object.keys(nextTime).length === 0) {
        const newEndTime = Date.now() + PROMO_DURATION_MINUTES * 60 * 1000;

        localStorage.setItem(END_TIME_STORAGE_KEY, String(newEndTime));
        setTimeLeft(calculateTimeLeft());
        return;
      }

      setTimeLeft(nextTime);
    }, 1000);

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, []);

  const formatTime = (value) => String(value ?? 0).padStart(2, "0");

  const handleImageClick = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageUrl("");
  };

  return (
    <>
      <section className="hero-home">
        <div className="hero-home__ambient hero-home__ambient--one"></div>
        <div className="hero-home__ambient hero-home__ambient--two"></div>

        <div className="hero-home__container">
          <div className="hero-home__content">
            <span className="hero-home__eyebrow">
              Matrix Tutoring • Online & Offline
            </span>

            <h1 className="hero-home__title">
              {mainText}{" "}
              <span className="hero-home__highlight">{highlightWord}</span>
            </h1>

            <p className="hero-home__subtitle">
              Dapatkan bimbingan intensif bersama tutor profesional dengan{" "}
              <strong>diskon spesial hingga 20%</strong>.
            </p>

            <div className="hero-home__features">
              {features.map((feature) => (
                <div className="hero-home__feature" key={feature}>
                  <span className="hero-home__check">
                    <Check size={15} strokeWidth={3} />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="hero-home__price">
              <span className="hero-home__price-label">Mulai dari</span>

              <div>
                <strong>Rp 100.000</strong>
                <span>/sesi</span>
              </div>
            </div>

            <div className="hero-home__actions">
              <Link
                to={contactData?.link_cta || "#"}
                className="hero-home__cta-link">
                <ReusableButton
                  text="Ambil Promo Sekarang!"
                  bgColor="rgba(255,255,255,.88)"
                  borderColor="rgba(255,255,255,.92)"
                  textColor="#007bff"
                  icon={<ArrowRightCircleIcon />}
                  ariaLabel="Ambil promo les privat sekarang"
                />
              </Link>

              <div className="hero-home__timer">
                <Clock3 size={18} />

                <div>
                  <span>Promo berakhir dalam</span>

                  <strong>
                    {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
                    {formatTime(timeLeft.seconds)}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-home__visual">
            <div className="learning-dashboard">
              <div className="learning-dashboard__topbar">
                <div className="learning-dashboard__brand">
                  <span className="learning-dashboard__brand-icon">📚</span>

                  <div>
                    <span>Learning Dashboard</span>
                    <strong>Dashboard Murid</strong>
                  </div>
                </div>

                <span className="learning-dashboard__status">
                  <i></i>
                  Online
                </span>
              </div>

              <div className="learning-dashboard__body">
                <aside className="learning-dashboard__sidebar">
                  <button type="button" aria-label="Target">
                    🎯
                  </button>
                  <button type="button" aria-label="Materi">
                    📝
                  </button>
                  <button type="button" aria-label="Progres">
                    📈
                  </button>
                  <button type="button" aria-label="Diskusi">
                    💬
                  </button>
                </aside>

                <div className="learning-dashboard__main">
                  <div className="learning-dashboard__chips">
                    <span>Pelajaran</span>
                    <span>Matematika</span>
                  </div>

                  <h2>Memahami Persamaan Kuadrat</h2>

                  <div className="learning-dashboard__section-heading">
                    <div>
                      <span>Materi Pembelajaran</span>
                      <strong>Materi & Contoh Soal</strong>
                    </div>

                    <span className="learning-dashboard__count">2 Materi</span>
                  </div>

                  <div className="learning-dashboard__materials">
                    <button
                      type="button"
                      className="learning-material-card"
                      onClick={() =>
                        handleImageClick("/images/materi-matematika.webp")
                      }>
                      <img
                        src="/images/materi-matematika.webp"
                        alt="Materi Matematika Persamaan Kuadrat"
                      />

                      <span className="learning-material-card__overlay">
                        <strong>Materi Pembelajaran</strong>
                        <small>Klik untuk lihat</small>
                      </span>
                    </button>

                    <button
                      type="button"
                      className="learning-material-card"
                      onClick={() =>
                        handleImageClick("/images/materi-matematika2.webp")
                      }>
                      <img
                        src="/images/materi-matematika2.webp"
                        alt="Contoh Soal Persamaan Kuadrat"
                      />

                      <span className="learning-material-card__overlay">
                        <strong>Contoh Soal</strong>
                        <small>Klik untuk lihat</small>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="hero-home__student-card">
                <img
                  src="/images/siswa_mening.webp"
                  alt="Siswa Berprestasi Wening"
                  loading="eager"
                />

                <div>
                  <span>Siswa: Wening</span>
                  <strong>Meningkat 90% di Matematika!</strong>
                </div>
              </div>

              <div className="hero-home__score">
                <span>Peningkatan Nilai</span>

                <div className="hero-home__score-ring">
                  <strong>95%</strong>
                </div>
              </div>

              <div className="hero-home__subjects">
                <span>
                  <img src="/images/matematika.webp" alt="Matematika" />
                </span>

                <span>
                  <img src="/images/sainsbocil.webp" alt="Sains" />
                </span>

                <span>
                  <img src="/images/bahasa.webp" alt="Bahasa Inggris" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={isModalOpen}
        imageUrl={modalImageUrl}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default HeroHome;
