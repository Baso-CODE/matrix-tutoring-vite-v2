import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import TestimoniWaSNBT from "../../LesPrivateSBMPTN/components/TestimoniWaSNBT/TestimoniWaSNBT";
import LesprivatKota from "../../LesPrivateTK/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateTK/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import FlowBelajarSimakUI from "../components/FlowBelajarSimakUI/FlowBelajarSimakUI";
import LesPrivateSimakUIHeader from "../components/LesPrivateSimakUIHeader";
import ProgramSpesialisSimak from "../components/ProgramSpesialisSimak/ProgramSpesialisSimak";
import WhyShouldYouTake from "../components/WhyShouldYouTake";

const items = [
  {
    text: "Les Privat Simak UI – Guru Les Privat Simak UI",
    href: "#les-privat-simak-ui",
    subItems: [
      {
        text: "Kegiatan Belajar Masa Simak UI",
        href: "#kegiatan-belajar-simak-ui",
      },
      {
        text: "Dukungan Orang Tua",
        href: "#dukungan-orang-tua",
      },
      {
        text: "List Program Simak UI",
        href: "#list-lest-private-simak-ui",
      },
      {
        text: "Sistem Belajar Terstruktur",
        href: "#sistem-belajar-terstruktur",
      },
      {
        text: "Program Simak UI",
        href: "#program-simak-ui",
      },
      {
        text: "Keunggulan Program Simak UI",
        href: "#keunggulan-program-simak-ui",
      },
    ],
  },
  {
    text: "Pengajar Les Private Simak UI",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Simak UI",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Simak UI",
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
const LesPrivateSimakUIKecamatan = () => {
  const [kecamatan, setKecamatan] = useState({}); // Mengubah [] menjadi {}

  const [heroData, setHeroData] = useState(null);

  const { slug } = useParams();
  const kecamatanSlug = slug;

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kecamatan?.kecamatan || formatSlugToName(kecamatanSlug);

  const programName = "SIMAK UI"; // Nama program yang digunakan

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug); // Pastikan fungsi ini ada dan benar
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("SIMAK-UI", "kecamatan"); // Gunakan kategori "SIMAK-UI"
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setKecamatan({
          kecamatan: formatSlugToName(kecamatanSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Persiapan Terbaik Menuju Universitas Indonesia`,
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Persiapan Terbaik Menuju Universitas Indonesia`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com/";
  // Canonical URL untuk halaman kecamatan
  const canonicalUrl = `${baseUrl}/bimbingan-simak-ui-terbaik/kecamatan/${kecamatanSlug}`;

  // Meta tag untuk les privat SIMAK UI
  const pageTitle = `🎓 Les Privat SIMAK UI di Kecamatan ${nameCountry} - Strategi Jitu & Bimbingan Intensif | Matrix Tutoring`;
  const descriptionContent = `Wujudkan impian masuk Universitas Indonesia dengan Les Privat SIMAK UI di Kecamatan ${nameCountry}. ✔️ Guru berpengalaman ✔️ Strategi jitu lolos SIMAK UI ✔️ Materi lengkap & latihan soal intensif. Daftar sekarang!`;

  const ogTitle = `Les Privat SIMAK UI di Kecamatan ${nameCountry} - Strategi Jitu Lolos UI | Matrix Tutoring`;
  const ogDescription = `Matrix Tutoring menawarkan Les Privat SIMAK UI terbaik di Kecamatan ${nameCountry}. Bimbingan intensif dari guru profesional, materi terstruktur, dan latihan soal untuk memaksimalkan peluang lolos ujian.`;

  const twitterTitle = `Les Privat SIMAK UI Profesional di Kecamatan ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Raih impian kuliah di UI dengan Les Privat SIMAK UI di Kecamatan ${nameCountry}. Guru ahli, strategi jitu, dan materi lengkap. Bisa online maupun datang ke rumah. Daftar sekarang!`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SIMAK UI Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Universitas Indonesia Kecamatan ${nameCountry}`,
    `Guru Privat Simak UI Kecamatan ${nameCountry}`,
    `Guru Les Privat Simak UI Kecamatan ${nameCountry}`,
    `Bimbel Simak UI Kecamatan ${nameCountry}`,
    `Bimbingan Belajar Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Online Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Offline Simak UI Kecamatan ${nameCountry}`,
    `Program Belajar Simak UI Kecamatan ${nameCountry}`,
    `Program Les Universitas Indonesia Kecamatan ${nameCountry}`,
    `Guru Les Matematika Simak UI Kecamatan ${nameCountry}`,
    `Les Matematika Simak UI Kecamatan ${nameCountry}`,
    `Les IPA Simak UI Kecamatan ${nameCountry}`,
    `Les Bahasa Inggris Simak UI Kecamatan ${nameCountry}`,
    `Tutor Simak UI Berpengalaman Kecamatan ${nameCountry}`,
    `Les Privat Mata Pelajaran Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Bahasa Indonesia Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Fisika Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Kimia Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Biologi Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Ekonomi Simak UI Kecamatan ${nameCountry}`,
    `Les Privat Geografi Simak UI Kecamatan ${nameCountry}`,
    `Matrix Tutoring Simak UI Kecamatan ${nameCountry}`,
    `Bimbel Online Simak UI Kecamatan ${nameCountry}`,
    `Kursus Simak UI Kecamatan ${nameCountry}`,
    `Strategi Lolos Simak UI Kecamatan ${nameCountry}`,
    `Soal Simak UI Kecamatan ${nameCountry}`,
    `Pembahasan Soal Simak UI Kecamatan ${nameCountry}`,
    `Persiapan SIMAK UI Kecamatan ${nameCountry}`,
    `Try Out SIMAK UI Kecamatan ${nameCountry}`,
    `Ujian Masuk UI Kecamatan ${nameCountry}`,
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),
  ].filter(Boolean);

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
                        "@id": "${baseUrl}/bimbingan-simak-ui-terbaik", // URL program utama
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
                  "@context": "https://schema.org",
                  "@type": "EducationalOrganization",
                  "name": "Matrix Tutoring",
                  "description": "Les Privat SIMAK UI terbaik di Kecamatan ${nameCountry} dengan guru profesional. Fokus strategi jitu lolos SIMAK UI, materi terstruktur, dan latihan soal intensif. Bisa datang ke rumah atau online, jadwal fleksibel.",
                  "url": "https://lesprivat.bimbelmatrix.com/bimbingan-simak-ui-terbaik/kecamatan/${kecamatanSlug}",
                  "areaServed": "Kecamatan ${nameCountry}",
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
                  "keywords": "les privat SIMAK UI Kecamatan ${nameCountry}, bimbel SIMAK UI Kecamatan ${nameCountry}, strategi lolos UI, guru datang ke rumah SIMAK UI, les online SIMAK UI Kecamatan ${nameCountry}, bimbingan intensif SIMAK UI"
                },


                {
                  "@type": "WebPage",
                  "@id": "${canonicalUrl}#webpage",
                  "url": "${canonicalUrl}",
                  "name": "Les Privat SIMAK UI Kecamatan ${nameCountry} | Matrix Tutoring",
                  "inLanguage": "id-ID",
                  "description": "Matrix Tutoring menghadirkan Les Privat Intensif SIMAK UI terbaik di Kecamatan ${nameCountry}. Fokus pada materi Ujian Tulis UI (Saintek, Soshum, Kemampuan Dasar) dan strategi lolos masuk Universitas Indonesia.",
                  "isPartOf": { "@id": "${baseUrl}" },
                  "about": { "@id": "${canonicalUrl}#organization" },
                  "mainEntity": {
                    "@type": "Service",
                    "name": "Les Privat SIMAK UI di Kecamatan ${nameCountry}",
                    "provider": { "@id": "${canonicalUrl}#organization" },
                    "serviceType": "Bimbingan SIMAK UI",
                    "areaServed": "Kecamatan ${nameCountry}",
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
                      "name": "Apakah Matrix Tutoring menyediakan guru privat datang ke rumah di Kecamatan ${nameCountry} untuk persiapan SIMAK UI?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kecamatan ${nameCountry} untuk fokus pada materi SIMAK UI. Jadwal bisa disesuaikan dengan kebutuhan intensif persiapan Ujian UI."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Apakah tersedia les privat online untuk persiapan SIMAK UI di Kecamatan ${nameCountry}?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tentu. Matrix Tutoring menyediakan layanan les privat SIMAK UI secara online dengan guru berpengalaman dan sistem belajar interaktif, cocok untuk yang ingin memaksimalkan waktu belajar sebelum ujian."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Materi apa saja yang diajarkan dalam program Les Privat SIMAK UI Matrix Tutoring?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Program Les Privat SIMAK UI mencakup semua materi yang diujikan di SIMAK UI, termasuk Kemampuan Dasar, Saintek (Matematika IPA, Fisika, Kimia, Biologi), dan Soshum (Matematika IPS, Ekonomi, Geografi, Sosiologi, Sejarah) sesuai dengan jurusan yang dipilih."
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
        desc={heroData?.description}
        location={nameCountry}
      />
      <EmbrelaSlider location={nameCountry} />
      <ImpactStatistics />
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateSimakUIHeader location={nameCountry} />
      <TestimoniWaSNBT />
      <ProfileMatrixTutoring
        title={"SIMAK UI Terbaik"}
        location={nameCountry}
      />
      <TutorLesprivatMatrix />
      <LesprivatKota />
      <WhyShouldYouTake />
      <ProgramSpesialisSimak />
      <FlowBelajarSimakUI location={nameCountry} />

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

export default LesPrivateSimakUIKecamatan;
