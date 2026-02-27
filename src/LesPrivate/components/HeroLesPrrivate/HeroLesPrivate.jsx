import { Link } from "react-router-dom";
import ReusableButton from "../../../helper/Button/ReusableButton/ReusableButton";
import { selectContactCsData } from "../../../lib/features/contactCsSlice";
import { useAppSelector } from "../../../lib/hooks";
import "./HeroLesPrivate.css";
import { ArrowRightCircleIcon } from "lucide-react";

const HeroLesPrivate = ({ heading, desc, images, location }) => {
  const contactData = useAppSelector(selectContactCsData);

  const finalUrl = contactData?.link_cta;
  return (
    <div className="container-all">
      <div className=" container-halaman-hero-lesprivate">
        <div className="content-hero-lesprivate">
          <div className=" isi-content-hero-lesprivate">
            <h1 className="title-halaman-hero-lesprivate">{heading}</h1>
            <div className="">
              <p className="child-paragraf-hero-lesprivate">{desc}</p>
              <p className="child-paragraf-hero-lesprivate-2">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Matrix yang siap memberikan
                pelayanan terbaik.
              </p>
            </div>
            <div className="btn-and-icons">
              <Link to={finalUrl || "#"} className="link_cta_decoration">
                <ReusableButton
                  text="Konsultasi Sekarang!"
                  bgColor="#ffffff"
                  borderColor="#007bff"
                  textColor="#007bff"
                  // onClick={handleConsultationClick}
                  icon={<ArrowRightCircleIcon />}
                />
              </Link>
              {/* <button
                className="btn-daftar-sekarang-lesprivate"
                onClick={() => window.open(finalUrl, "_blank")}>
                Daftar Sekarang
              </button> */}
              {/* <div className="social-icons">
              <a
                href="https://www.instagram.com/matrixtutoring.id"
                target="_blank"
                rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.tiktok.com/@edumatrixindonesia"
                target="_blank"
                rel="noopener noreferrer">
                <FaTiktok className="social-icon" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100088009847192"
                target="_blank"
                rel="noopener noreferrer">
                <FaFacebookSquare className="social-icon" />
              </a>
            </div> */}
            </div>
          </div>
          <img
            loading="lazy"
            className="rumah-adat-hero-lesprivate"
            src={images}
            alt={`${heading} di ${location} - Matrix Tutoring`}
            width="1880"
            height="1075"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroLesPrivate;
