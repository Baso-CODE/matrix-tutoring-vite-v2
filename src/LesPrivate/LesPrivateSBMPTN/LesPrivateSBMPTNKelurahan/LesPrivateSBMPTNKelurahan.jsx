import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getKelurahanBySlug } from "../../../helper/request/getAllKelurahanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import LogoPengajarMTX from "../../components/LogoAlumniTutor/LogoPengajarMTX";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import KurikulumLesPrivate from "../../LesPrivateTK/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateTK/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import FokusPembelajaranSNBT from "../components/FokusPembelajaranSNBT/FokusPembelajaranSNBT";
import ListProgramLesPrivatSNBT from "../components/ListProgramLesPrivatSNBT/ListProgramLesPrivatSNBT";
import PreparationToPTN from "../components/PreparationToPTN/PreparationToPTN";
import ProgramSpesialisSNBT from "../components/ProgramSpesialisSNBT/ProgramSpesialisSNBT";
import SBMPTNFlow from "../components/SBMPTNFlow";
import SistemBelajarSNBT from "../components/SistemBelajarSNBT/SistemBelajarSNBT";
import TestimoniWaSNBT from "../components/TestimoniWaSNBT/TestimoniWaSNBT";
import WhyChooseSBMPTN from "../components/WhyChooseSBMPTN/WhyChooseSBMPTN";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import TableOfContents from "../../components/TableOfContent";

const items = [
  {
    text: "Les Privat SBMPTN – Guru Les Privat SBMPTN",
    href: "#bimbingan-snbt-utbk-terbaik",
    subItems: [
      {
        text: "Apakah kita sudah memberikan dukungan terbaik",
        href: "#kegiatan-belajar-sbmptn",
      },
      {
        text: "Dukungan Orang Tua",
        href: "#dukungan-orang-tua",
      },
      {
        text: "List Program SBMPTN",
        href: "#list-lest-private-sbmptn",
      },
      {
        text: "Sistem Belajar Terstruktur",
        href: "#sistem-belajar-terstruktur",
      },
      {
        text: "Program SBMPTN",
        href: "#program-sbmptn",
      },
      {
        text: "Keunggulan Program SBMPTN",
        href: "#keunggulan-program-sbmptn",
      },
    ],
  },
  {
    text: "Pengajar Les Private SBMPTN",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SBMPTN",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SBMPTN",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix ",
    href: "#program-les-private-matrix-tutoring",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrix-tutoring-private",
  },
];
const LesPrivateSBMPTNKelurahan = () => {
  const [kelurahan, setKelurahan] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { slug } = useParams();
  const kelurahanSlug = slug;
  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kelurahan?.kelurahan || formatSlugToName(kelurahanSlug);

  const programName = "SNBT (SBMPTN)";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("SBMPTN", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kelurahan data:", error);
        setKelurahan({
          kelurahan: formatSlugToName(kelurahanSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Solusi Terbaik Lolos Seleksi PTN Impian`,
          image: "https://lesprivat.bimbelmatrix.com/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Solusi Terbaik Lolos Seleksi PTN Impian`;
  }

  const heroImageSrc =
    heroData?.image || "https://lesprivat.bimbelmatrix.com/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/bimbingan-snbt-utbk-terbaik/kelurahan/${kelurahanSlug}`;

  const pageTitle = `🎯 Les Privat & Bimbel SNBT UTBK 2026 di Kelurahan ${nameCountry} | Matrix Tutoring`;
  const descriptionContent = `Les privat ${programName} terbaik di Kelurahan ${nameCountry} bersama tutor berpengalaman. Program intensif, materi terstruktur, dan latihan soal lengkap untuk bantu kamu lolos PTN favorit tahun 2026.`;

  const ogTitle = `🎯 Les Privat & Bimbel SNBT UTBK 2026 di Kelurahan ${nameCountry} | Matrix Tutoring`;
  const ogDescription = `Belajar lebih fokus dengan les privat ${programName} di Kelurahan ${nameCountry}. Dapatkan bimbingan intensif dan strategi jitu dari tutor profesional untuk sukses masuk PTN impian.`;

  const twitterTitle = `🎯 Les Privat & Bimbel SNBT UTBK 2026 di Kelurahan ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Les privat ${programName} terbaik di Kelurahan ${nameCountry}. Belajar dengan tutor ahli, latihan intensif, dan strategi sukses UTBK 2026 hanya di Matrix Tutoring.`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat ${programName} Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat ${programName} Kelurahan ${nameCountry}`,
    `Guru Privat ${programName} Kelurahan ${nameCountry}`,
    `Les ${programName} Kelurahan ${nameCountry}`,
    `Bimbingan ${programName} Kelurahan ${nameCountry}`,
    `Les Privat Online ${programName} Kelurahan ${nameCountry}`,
    `Les Privat Offline ${programName} Kelurahan ${nameCountry}`,
    `Program Belajar ${programName} Kelurahan ${nameCountry}`,
    `Tutor ${programName} Kelurahan ${nameCountry}`,
    `Les Matematika ${programName} Kelurahan ${nameCountry}`,
    `Les IPA ${programName} Kelurahan ${nameCountry}`,
    `Les Bahasa Inggris ${programName} Kelurahan ${nameCountry}`,
    `Les Fisika ${programName} Kelurahan ${nameCountry}`,
    `Les Kimia ${programName} Kelurahan ${nameCountry}`,
    `Les Biologi ${programName} Kelurahan ${nameCountry}`,
    `Les Ekonomi ${programName} Kelurahan ${nameCountry}`,
    `Les Geografi ${programName} Kelurahan ${nameCountry}`,
    `Persiapan PTN Kelurahan ${nameCountry}`,
    `Bimbel PTN Kelurahan ${nameCountry}`,
    `Matrix Tutoring ${programName} Kelurahan ${nameCountry}`,
    `Bimbel ${programName} Kelurahan ${nameCountry}`,
    `Kursus ${programName} Kelurahan ${nameCountry}`,

    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
    // Jika masih ada yang mencari SBMPTN
    `Les Privat SBMPTN Kelurahan ${nameCountry}`,
    `Guru Privat SBMPTN Kelurahan ${nameCountry}`,
    `Bimbel SBMPTN Kelurahan ${nameCountry}`,
  ];

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta name="description" content={descriptionContent} />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="id_ID" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Matrix Tutoring" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={ogImageAlt} />
        <meta property="og:image:type" content="image/webp" />
        {keywords.map((tag) => (
          <meta key={tag} property="og:article:tag" content={tag} />
        ))}
        <meta
          property="article:section"
          content={`Les Privat ${programName}`}
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={twitterTitle} />
        <meta name="twitter:description" content={twitterDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:site" content="@matrix_tutoring" />
        <meta name="twitter:creator" content="@matrix_tutoring" />

        {/* Schema Markup (JSON-LD) - BreadcrumbList */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "@id": "${canonicalUrl}#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": "1",
                      "item": {
                        "@id": "${baseUrl}",
                        "name": "Home"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "2",
                      "item": {
                        "@id": "${baseUrl}/bimbingan-snbt-utbk-terbaik", 
                        "name": "Les Privat ${programName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${canonicalUrl}",
                        "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
                      }
                    }
                  ]
                },

                { 
                  "@type": "EducationalOrganization",
                  "name": "Matrix Tutoring",
                  "description": "Bimbel dan Les Privat SNBT UTBK 2026 di Kelurahan ${nameCountry} dengan tutor berpengalaman dan program intensif menuju PTN favorit.",
                  "url": "https://lesprivat.bimbelmatrix.com/bimbingan-snbt-utbk-terbaik/kelurahan/${nameCountry}",
                  "areaServed":  Kelurahan ${nameCountry}",
                  "sameAs": [
                    "https://www.instagram.com/matrixtutoring.id",
                    "https://www.tiktok.com/@lesprivatmatrix.com",
                    "https://www.facebook.com/matrixtutoring"
                  ],
                  "brand": {
                  "@type": "Brand",
                  "name": "Matrix Tutoring",
                  "logo": "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+62-857-4728-1466",
                    "contactType": "Customer Service",
                    "areaServed": "ID",
                    "availableLanguage": ["Indonesian", "English"]
                  },
                  "keywords": "les privat SNBT UTBK Kelurahan ${nameCountry}, Les Privat Online ${programName} Kelurahan ${nameCountry}, Les Privat Offline ${programName} Kelurahan ${nameCountry}, les bahasa Korea Kelurahan ${nameCountry}, Program Belajar ${programName} Kelurahan ${nameCountry}, Tutor ${programName} Kelurahan ${nameCountry}, Bimbel PTN Kelurahan ${nameCountry}, Persiapan PTN Kelurahan ${nameCountry}, Les Geografi ${programName} Kelurahan ${nameCountry}, Les Ekonomi ${programName} Kelurahan ${nameCountry}"
                },


                {
                  "@type": "WebPage",
                  "@id": "${canonicalUrl}#webpage",
                  "url": "${canonicalUrl}",
                  "name": "Les Privat SNBT UTBK Kelurahan ${nameCountry} | Matrix Tutoring",
                  "inLanguage": "id-ID",
                  "description": "Matrix Tutoring menghadirkan Les Privat Intensif SNBT UTBK terbaik di Kelurahan ${nameCountry}. Fokus pada materi Tes Skolastik dan Literasi untuk lolos ke PTN favorit Anda.",
                  "isPartOf": { "@id": "${baseUrl}" },
                  "about": { "@id": "${canonicalUrl}#organization" },
                  "mainEntity": {
                    "@type": "Service",
                    "name": "Les Privat SNBT UTBK di Kelurahan ${nameCountry}",
                    "provider": { "@id": "${canonicalUrl}#organization" },
                    "serviceType": "Bimbingan SNBT UTBK",
                    "areaServed": "Kelurahan ${nameCountry}", 
                    "offers": {
                      "@type": "Offer",
                      "priceCurrency": "IDR",
                      "availability": "https://schema.org/InStock",
                      "url": "${canonicalUrl}"
                    }
                  }
                },


                {
                  "@type": "FAQPage",
                  "@id": "${canonicalUrl}#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Apakah Matrix Tutoring menyediakan guru privat datang ke rumah di Kelurahan ${nameCountry} untuk persiapan SNBT UTBK?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kelurahan ${nameCountry} untuk fokus pada materi Tes Skolastik dan Literasi SNBT. Jadwal bisa disesuaikan dengan kebutuhan intensif persiapan UTBK."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Apakah tersedia les privat online untuk persiapan SNBT UTBK di Kelurahan ${nameCountry}?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tentu. Matrix Tutoring menyediakan layanan les privat SNBT UTBK secara online dengan guru berpengalaman dan sistem belajar interaktif, cocok untuk yang ingin memaksimalkan waktu belajar sebelum ujian."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Materi apa saja yang diajarkan dalam program Les Privat SNBT UTBK Matrix Tutoring?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Program Les Privat SNBT UTBK mencakup seluruh materi yang diujikan dalam Tes Skolastik dan Tes Literasi (Literasi dalam Bahasa Indonesia, Literasi dalam Bahasa Inggris, dan Penalaran Matematika) sesuai dengan format terbaru SNBT."
                      }
                    }
                  ]
                }
              ]
            }
    `}
        </script>
      </Helmet>

      <HeroLesPrivate
        nameCountry={nameCountry}
        images={heroImageSrc}
        heading={displayedHeading}
        location={nameCountry}
        desc={heroData?.description}
      />
      <EmbrelaSlider location={nameCountry} />
      <ImpactStatistics />
      <TableOfContents title="Table of Contents" items={items} />
      <PreparationToPTN location={nameCountry} />
      <ProgramSpesialisSNBT />
      <SistemBelajarSNBT />
      <FokusPembelajaranSNBT location={nameCountry} />
      <ListProgramLesPrivatSNBT />
      <LogoPengajarMTX
        title={"Siapa Guru Les Privat SNBT UTBK dari Matrix Tutoring?"}
      />
      <TestimoniWaSNBT />
      <ProfileMatrixTutoring
        title={"SNBT UTBK Terbaik"}
        location={nameCountry}
      />
      <KurikulumLesPrivate />
      <LesprivatKota />
      <SuccessStoryLesPrivate />
      <SBMPTNFlow />
      <WhyChooseSBMPTN />

      <section id="program-les-private-matrix-tutoring">
        <ProgramLesPrivatV2 location={nameCountry} />
      </section>
      <section id="fitur-program-les-private">
        <FiturProgramNew location={nameCountry} />
      </section>
      <section id="pilihan-program-les-private">
        <PilihanProgram location={nameCountry} />
      </section>
      <section id="matrix-juga-melayani-les-privat-online">
        <OnlineLesOptions location={nameCountry} />
      </section>
      <section id="pengajar-les-private">
        <MasterTeacherV2 location={nameCountry} />
      </section>
      <ProgramBelajarLesPrivat location={nameCountry} />
      <WhyMatrixFeatures />
      <MatrixSubjects />
      <SuccessStoryLesPrivate location={nameCountry} />
      <TestimonialSiswa location={nameCountry} />
      <TestimoniOrtuSiswa location={nameCountry} />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
      </section>
      <HowToOrder />
      <AccordionFAQ />
      <GaleriKegiatanBelajar location={nameCountry} />
      <PromoHomepage location={nameCountry} />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateSBMPTNKelurahan;
