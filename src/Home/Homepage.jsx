import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { selectContactCsData } from "../lib/features/contactCsSlice";
import { useAppSelector } from "../lib/hooks";
import "./Homepage.css";

// ✅ Critical (above the fold) — load langsung
import HeroHome from "../Components/HeroHome/HeroHome";
import EmbrelaSlider from "../Components/SlideTop/EmbrelaSlider";

// ✅ Non-critical (below the fold) — lazy load
const ProgramLesPrivatV2 = React.lazy(
  () => import("../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 "),
);
const FiturProgramNew = React.lazy(
  () => import("../Components/FiturProgramNew/FiturProgramNew"),
);
const PilihanProgram = React.lazy(
  () => import("../Components/ProgramOptions/PilihanProgram"),
);
const OnlineLesOptions = React.lazy(
  () => import("../Components/OnlineLesOption/OnlineLesOption"),
);
const MasterTeacherV2 = React.lazy(
  () => import("../Components/MasterTeacherV2/MasterTeacherV2"),
);
const ProgramBelajarLesPrivat = React.lazy(
  () =>
    import("../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate"),
);
const KurikulumLesPrivate = React.lazy(
  () =>
    import("../LesPrivate/LesPrivateTK/components/KurikulumLesPrivate/KurikulumLesPrivate"),
);
const WhyMatrixFeatures = React.lazy(
  () => import("../Components/MatrixFeatures/WhyMatrixFeatures"),
);
const MatrixSubjects = React.lazy(
  () => import("../Components/MatrixFeatures/MatrixSubjects"),
);
const SuccessStoryLesPrivate = React.lazy(
  () => import("../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate"),
);
const TestimoniOrtuSiswa = React.lazy(
  () => import("../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa"),
);
const AsalSekolahSiswaEdumatrix = React.lazy(
  () => import("../Components/AsalSekolahSiswa/AsalSekolahSiswa"),
);
const HowToOrder = React.lazy(
  () => import("../Components/HowToOrder/HowToOrder"),
);
const AccordionFAQ = React.lazy(() => import("../Components/FAQ/AccordionFAQ"));
const GaleriKegiatanBelajar = React.lazy(
  () => import("../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar"),
);
const LesprivatKota = React.lazy(
  () =>
    import("../LesPrivate/LesPrivateTK/components/LesprivatKota/LesprivatKota"),
);
const PromoHomepage = React.lazy(() => import("./PromoHomepage/PromoHomepage"));
const CTABottomHome = React.lazy(() => import("./CTABottomHome/CTABottomHome"));

// Loading fallback ringan
const SectionLoader = () => <div style={{ minHeight: "100px" }} />;

const Homepage = () => {
  const contactData = useAppSelector(selectContactCsData);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Les Privat Online & Guru ke Rumah TK SD SMP SMA TKA UTBK SNBT SIMAK UI
          Mahasiswa Bahasa Mengaji Komputer TOEFL Terbaik - Matrix Tutoring
        </title>
        <meta
          name="description"
          content="Matrix Tutoring menyediakan layanan les privat online dan ke rumah untuk TK hingga SMA, termasuk TKA, persiapan universitas, dan bahasa asing."
        />
        <meta
          name="keywords"
          content="les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, TKA, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN), edukasi, Matrix, belajar efektif, program les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, TKA, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN), tutor berkualitas"
        />
        <meta name="author" content="Matrix Tutoring" />
        <meta
          property="og:title"
          content="Les Privat Online & Guru ke Rumah (TK, SD, SMP, SMA, TKA, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) Terbaik di Indonesia - Matrix Tutoring"
        />
        <meta
          property="og:description"
          content="Matrix Tutoring menyediakan layanan les privat Online & Guru ke Rumah terbaik di Indonesia dengan berbagai fitur dan program unggulan."
        />
        <meta
          property="og:image"
          content="https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp"
        />
      </Helmet>

      <div>
        {/* Above the fold — tidak di-lazy */}
        <HeroHome contactData={contactData} />
        <EmbrelaSlider />

        {/* Below the fold — lazy loaded */}
        <Suspense fallback={<SectionLoader />}>
          <ProgramLesPrivatV2 />
          <FiturProgramNew />
          <PilihanProgram />
          <OnlineLesOptions />
          <MasterTeacherV2 />
          <ProgramBelajarLesPrivat />
          <KurikulumLesPrivate />
          <WhyMatrixFeatures />
          <MatrixSubjects />
          <SuccessStoryLesPrivate />
          <TestimoniOrtuSiswa />
          <AsalSekolahSiswaEdumatrix />
          <HowToOrder />
          <AccordionFAQ />
          <GaleriKegiatanBelajar />
          <LesprivatKota />
          <PromoHomepage />
          <CTABottomHome />
        </Suspense>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
