import React, { useEffect, useState } from "react";
// import "./Halamankabupaten.css";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { getAllKecamatanBySlug } from "../../helper/request/getAllKecamatanBySlug";
import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import AsalSekolahSiswaEdumatrix from "../AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../FAQ/AccordionFAQ";
import FiturProgramNew from "../FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../HowToOrder/HowToOrder";
import MasterTeacherV2 from "../MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../MatrixFeatures/WhyMatrixFeatures";
import OnlineLesOptions from "../OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../ProgramOptions/PilihanProgram";
import EmbrelaSlider from "../SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { formatSlugToName } from "../../helper/formatSlugToName";

const Halamankecamatan = () => {
  const [kecamatan, setKecamatan] = useState([]);
  const { kecamatanSlug } = useParams();

  const nameCountry = formatSlugToName(kecamatanSlug);

  useEffect(() => {
    const fetchKota = async () => {
      try {
        const response = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(response.data);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);
      }
    };

    // {`${kecamatan.kecamatan}`}
    fetchKota();
  }, [kecamatanSlug]);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat {`${kecamatan.kecamatan}`} TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa Privat Online & Guru ke Rumah Berkualitas
        </title>
        <meta
          name="description"
          content={`Les Privat ${kecamatan.kecamatan} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, Guru Les dari UI UGM ITB dan PTN Top`}
        />
        <meta
          name="keywords"
          content={`Les Terbaik , ${kecamatan.kecamatan}, Guru Les Profesiona, Les untuk Anak , Les Privat Online, Les Privat ke Rumah, Bimbel , Les Privat SD, SMP, SMA , Les SIMAK UI, Les UM PTN, Les CBT UGM, pendidikan, tutor berkualitas, belajar efektif`}
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`Les Privat ${kecamatan.kecamatan} TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa  Privat Online & Guru ke Rumah
          Berkualitas`}
        />
        <meta
          property="og:description"
          content={`Les Privat ${kecamatan.kecamatan} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, Guru Les dari UI UGM ITB dan PTN Top`}
        />
        <meta
          property="og:image"
          content="https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />{" "}
        <link rel="canonical" href={window.location.href} />
        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:card"
          content="https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta
          name="twitter:title"
          content={`Les Privat ${kecamatan.kecamatan}  TK SD SMP SMA OSN UTBK SNBT
          SIMAK UI CBT UGM & Mahasiswa  Privat Online & Guru ke Rumah
          Berkualitas`}
        />
        <meta
          name="twitter:description"
          content={`Les Privat ${kecamatan.kecamatan} ke Rumah & Online TK SD SMP SMA OSN UTBK SNBT SIMAK UI CBT UGM & Mahasiswa Bimbel berkualitas, Guru Les dari UI UGM ITB dan PTN Top`}
        />
        <meta
          name="twitter:image"
          content="https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
      </Helmet>
      <div className="container-halaman-kota">
        <div className="content-kota">
          <div className="teks-content">
            <h1 className="title-halaman-kota">
              Les Privat di{" "}
              <span className="highlight-yellow-kota">
                {kecamatan.kecamatan}
              </span>{" "}
              - TK, SD, SMP, SMA, TKA, UTBK SNBT, SIMAK UI, UM PTN & CBT UGM{" "}
              <span className="highlight-yellow-kota">Terbaik</span>
            </h1>
            <div className="paragraf-kota">
              <p className="child-paragraf-kota">
                Bimbel Les Privat di Kecamatan{" "}
                <span className="highlight-yellow-kota">
                  {kecamatan.kecamatan}
                </span>{" "}
                untuk TK, SD, SMP, SMA, TKA, OSN, CPNS, LPDP, PPDS, SIMAK UI,
                UTBK SNBT, CBT UGM, UMPTN.
              </p>
              <p className="child-paragraf-kota">
                Dapatkan layanan Les Privat kapan pun dan dimana pun dengan
                lebih dari 5.000 Master Teacher Matrix yang siap memberikan
                pelayanan{" "}
                <span className="highlight-yellow-kota">terbaik.</span>
              </p>
            </div>
          </div>
          <img
            className="rumah-adat"
            loading="eager"
            src={"/images/KECAMATAN.png"}
            alt={`les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, TKA, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${kecamatan.kecamatan} - Matrix Tutoring`}
          />{" "}
        </div>
      </div>
      <EmbrelaSlider location={nameCountry} />
      <ProgramLesPrivatV2 location={nameCountry} />
      <FiturProgramNew location={nameCountry} />
      <PilihanProgram location={nameCountry} />
      <OnlineLesOptions location={nameCountry} />
      <MasterTeacherV2 location={nameCountry} />
      <ProgramBelajarLesPrivat location={nameCountry} />
      <WhyMatrixFeatures />
      <MatrixSubjects />
      <SuccessStoryLesPrivate location={nameCountry} />
      <TestimonialSiswa location={nameCountry} />
      <TestimoniOrtuSiswa location={nameCountry} />
      <AsalSekolahSiswaEdumatrix />
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar location={nameCountry} />
      <PromoHomepage location={nameCountry} />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default Halamankecamatan;
