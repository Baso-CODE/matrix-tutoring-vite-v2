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
import { getKelurahanBySlug } from "../../../helper/request/getAllKelurahanBySlug";
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
import BenefitOfTKA from "../components/BenefitOfTKA/BenefitOfTKA";
import FokusLesPrivateTKA from "../components/FokusLesPrivateTKA/FokusLesPrivateTKA";
import FokusPersiapanTKA from "../components/FokusPersiapanTKA/FokusPersiapanTKA";
import InformasiSeputarTKA from "../components/InformasiSeputarTKA/InformasiSeputarTKA";
import KegunaanTestTKA from "../components/KegunaanTestTKA/KegunaanTestTKA";
import LesPrivateTKAHeader from "../components/LesPrivateTKAHeader";
import MataPelajaranTKATable from "../components/MataPelajaranTKATable/MataPelajaranTKATable";
import ProgramLesPrivatTKA from "../components/ProgramLesPrivatTKA/ProgramLesPrivatTKA";
import SistemBelajarTKA from "../components/SistemBelajarTKA/SistemBelajarTKA";
import TKAFlow from "../components/TKAFlow/TKAFlow";
import TKAPillarsShowcase from "../components/TKAPillarsShowcase/TKAPillarsShowcase";

const items = [
  {
    text: "Les Privat TKA (Tes Kemampuan Akademik)",
    href: "#les-privat-ksm",
    subItems: [
      {
        text: "Perubahan dalam Dunia Pendidikan di Indonesia",
        href: "#perubahan-dunia-pendidikan",
      },
      {
        text: "Bagian dari Asesmen Nasional",
        href: "#bagian-dari-asesmen-nasional",
      },
      {
        text: "Tujuan dari TKA dan Manfaatnya",
        href: "#tujuan-dari-tka",
      },
    ],
  },
  {
    text: "Pilar Persiapan TKA Matrix Tutoring",
    href: "#tka-pillars-showcase",
  },
  {
    text: "Manfaat Menguasai TKA",
    href: "#benefit-of-tka",
  },
  {
    text: "Pengajar Les Private SD",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SD",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SD",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix",
    href: "#program-les-private-matrix",
  },
  {
    text: "Saat Ini, Matrix Juga Melayani Les Privat Online",
    href: "#matrix-juga-melayani-les-privat-online",
  },
  {
    text: "Asal Sekolah Siswa Matrix Tutoring les Private",
    href: "#asal-sekolah-siswa-matrix-private",
  },
];

const LesPrivateTKAKelurahan = () => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("AKM", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kelurahan data:", error);

        setKelurahan({
          kelurahan: formatSlugToName(kelurahanSlug),
        });
        setHeroData({
          heading:
            "Les Privat TKA di [LOKASI] - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur",
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat TKA di ${nameCountry} - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com";

  const canonicalUrl = `${baseUrl}/bimbel-tka-tes-kemampuan-akademik/kelurahan/${kelurahanSlug}`;

  // 🎯 SEO Meta Tags — versi Kelurahan
  const pageTitle = `🏆 Les Privat TKA di Kelurahan ${nameCountry} - Bimbingan Intensif & Strategi Juara | Matrix Tutoring`;
  const descriptionContent = `Ikuti les privat TKA (Tes Kemampuan Akademik) terbaik di Kelurahan ${nameCountry} bersama Matrix Tutoring. Dapatkan bimbingan intensif, latihan soal lengkap, dan strategi sukses dari tutor profesional untuk hasil maksimal.`;

  const ogTitle = `🏆 Les Privat TKA di Kelurahan ${nameCountry} - Bimbingan Intensif & Strategi Juara | Matrix Tutoring`;
  const ogDescription = `Bimbel dan Les Privat TKA terbaik di Kelurahan ${nameCountry}. Matrix Tutoring hadir dengan program intensif, materi komprehensif, dan guru ahli untuk membantu Anda unggul dalam TKA.`;

  const twitterTitle = `🏆 Les Privat TKA di Kelurahan ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Les Privat TKA (Tes Kemampuan Akademik) terbaik di Kelurahan ${nameCountry}. Program intensif, tutor profesional, dan strategi jitu menuju hasil maksimal bersama Matrix Tutoring.`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TKA Tes Kemampuan Akademik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TKA ${nameCountry}`,
    `Tes Kemampuan Akademik ${nameCountry}`,
    `Bimbel TKA ${nameCountry}`,
    `Guru Privat TKA ${nameCountry}`,
    `Persiapan TKA ${nameCountry}`,
    `Soal TKA ${nameCountry}`,
    `Strategi TKA ${nameCountry}`,
    `Materi TKA ${nameCountry}`,
    `TKA SD ${nameCountry}`,
    `TKA SMP ${nameCountry}`,
    `TKA SMA ${nameCountry}`,
    `Literasi Membaca TKA ${nameCountry}`,
    `Numerasi TKA ${nameCountry}`,
    `Matrix Tutoring TKA ${nameCountry}`,
    `Les Privat Matrix TKA ${nameCountry}`,
    `Les Privat TKA Online ${nameCountry}`,
    `Les Privat TKA Offline ${nameCountry}`,
    `Kursus TKA ${nameCountry}`,
    `Bimbingan TKA ${nameCountry}`,
    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
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
        <meta property="article:section" content="Les Privat TKA" />

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
                        "@id": "${baseUrl}/les-privat-tka-asesmen-kompetensi-minimum",
                        "name": "Les Privat TKA"
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
                }

            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Matrix Tutoring",
              "description": "Les Privat dan Bimbel TKA (Tes Kemampuan Akademik) terbaik di Kelurahan ${nameCountry}. Belajar bersama tutor berpengalaman dengan program intensif dan latihan soal untuk hasil maksimal.",
              "url": "https://lesprivat.bimbelmatrix.com/bimbel-tka-tes-kemampuan-akademik/kelurahan/${nameCountry}",
              "areaServed": "Kelurahan ${nameCountry}",
              "sameAs": [
              "https://www.instagram.com/matrixtutoring.id",
              "https://www.tiktok.com/@lesprivatmatrix.com",
              "https://www.facebook.com/matrixtutoring"
                ]
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
                 }
              "keywords": "les privat TKA Kelurahan ${nameCountry}, bimbel TKA Terbaik Kelurahan ${nameCountry}, les persiapan UTBK Kelurahan ${nameCountry}, guru datang ke rumah TKA, les TKA online Kelurahan ${nameCountry}, bimbingan belajar masuk PTN"
              },


              {
              "@type": "WebPage",
              "@id": "${canonicalUrl}#webpage",
              "url": "${canonicalUrl}",
              "name": "Les Privat TKA Kelurahan ${nameCountry} | Matrix Tutoring",
              "inLanguage": "id-ID",
              "description": "Matrix Tutoring menghadirkan Les Privat TKA (Tes Kemampuan Akademik) terbaik di Kelurahan ${nameCountry}. Fokus pada penguasaan materi TKA dan strategi mengerjakan soal untuk lolos UTBK/SNBT.",
              "isPartOf": { "@id": "${baseUrl}" },
              "about": { "@id": "${canonicalUrl}#organization" },
              "mainEntity": {
              "@type": "Service",
              "name": "Les Privat TKA di Kelurahan ${nameCountry}",
              "provider": { "@id": "${canonicalUrl}#organization" },
              "serviceType": "Les Privat TKA",
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
               "name": "Apakah Matrix Tutoring menyediakan guru datang ke rumah di Kelurahan ${nameCountry} untuk persiapan TKA?",
               "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kelurahan ${nameCountry} untuk fokus pada materi TKA. Jadwal bisa disesuaikan dengan kebutuhan persiapan UTBK/SNBT siswa."
                  }
                },
               {
                 "@type": "Question",
                 "name": "Apakah tersedia les privat online untuk TKA di Kelurahan ${nameCountry}?",
                 "acceptedAnswer": {
                 "@type": "Answer",
                 "text": "Tentu. Matrix Tutoring menyediakan layanan les privat TKA secara online dengan guru profesional dan sistem belajar interaktif, cocok untuk yang ingin fokus pada materi Tes Kemampuan Akademik."
                  }
                },
               {
                "@type": "Question",
                "name": "Materi apa saja yang diajarkan dalam program TKA Matrix Tutoring?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Program TKA Matrix Tutoring mencakup semua materi yang diujikan dalam Tes Kemampuan Akademik UTBK/SNBT, seperti Matematika, Saintek (Fisika, Kimia, Biologi), dan Soshum (Sejarah, Geografi, Ekonomi, Sosiologi) sesuai pilihan siswa."
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
        location={nameCountry}
        heading={displayedHeading}
        desc={heroData?.description}
      />
      <ImpactStatistics />
      <EmbrelaSlider location={nameCountry} />
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateTKAHeader location={nameCountry} />
      <FokusPersiapanTKA />
      <InformasiSeputarTKA />
      <MataPelajaranTKATable />
      <KegunaanTestTKA />
      <ProgramLesPrivatTKA />
      <FokusLesPrivateTKA />
      <SistemBelajarTKA />
      <TestimoniWaSNBT />
      <ProfileMatrixTutoring title={"TKA Terbaik"} location={nameCountry} />
      <TutorLesprivatMatrix />
      <LesprivatKota />
      <TKAFlow location={nameCountry} />
      <TKAPillarsShowcase />
      <BenefitOfTKA location={nameCountry} />

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
      <section id="asal-sekolah-siswa-matrix-private">
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

export default LesPrivateTKAKelurahan;
