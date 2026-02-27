import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";

import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
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
const LesPrivateTKAKota = () => {
  const [kota, setKota] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { slug } = useParams();
  const kotaSlug = slug;

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kota?.kota || formatSlugToName(kotaSlug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("AKM", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);

        setKota({
          kota: formatSlugToName(kotaSlug),
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
  }, [kotaSlug]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat TKA di ${nameCountry} - Persiapan Tes Kemampuan Akademik dengan Pendekatan Terstruktur`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com/";
  // Canonical URL untuk halaman kota
  const canonicalUrl = `${baseUrl}/bimbel-tka-tes-kemampuan-akademik/kota/${kotaSlug}`;

  // ✅ SEO Title & Description — versi lebih kuat dan menarik
  const pageTitle = `🏆 Les Privat TKA Terbaik di ${nameCountry} | Bimbel Tes Kemampuan Akademik - Matrix Tutoring`;
  const descriptionContent = `Raih skor tinggi di TKA (Tes Kemampuan Akademik) bersama tutor profesional Matrix Tutoring di ${nameCountry}. Program intensif dengan latihan soal, pembahasan mendalam, dan strategi jitu untuk hasil maksimal.`;

  const ogTitle = `🏆 Les Privat TKA Terbaik di ${nameCountry} | Bimbel Tes Kemampuan Akademik - Matrix Tutoring`;
  const ogDescription = `Raih skor tinggi di TKA (Tes Kemampuan Akademik) bersama tutor profesional Matrix Tutoring di ${nameCountry}. Dapatkan program intensif, latihan soal lengkap, dan strategi sukses TKA.`;

  const twitterTitle = `🏆 Les Privat TKA Terbaik di ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Les privat TKA (Tes Kemampuan Akademik) di ${nameCountry} dengan tutor ahli dan program intensif dari Matrix Tutoring. Belajar lebih fokus, raih hasil maksimal!`;

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
    `Olimpiade Madrasah ${nameCountry}`,
    `Matrix Tutoring ${nameCountry}`,
    `Les Privat Matrix ${nameCountry}`,
    `Les Privat Fisika TKA ${nameCountry}`,
    `Les Privat Kimia TKA ${nameCountry}`,
    `Les Privat Biologi TKA ${nameCountry}`,
    `Les Privat Matematika TKA ${nameCountry}`,
    `Les Privat Ekonomi TKA ${nameCountry}`,
    `Les Privat Geografi TKA ${nameCountry}`,
    `Les Privat Ilmu Pengetahuan Sosial TKA ${nameCountry}`,
    `Les Privat IPA TKA ${nameCountry}`,
    `Les Privat IPS TKA ${nameCountry}`,
    `Les Privat TKA Online ${nameCountry}`,
    `Les Privat TKA Offline ${nameCountry}`,
    `Kursus TKA ${nameCountry}`,
    `Bimbingan TKA ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(), // Tambahkan slug kota sebagai keyword
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
                "@id": "${baseUrl}/bimbel-tka-tes-kemampuan-akademik",
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
        },

        {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Matrix Tutoring",
          "description": "Les Privat dan Bimbel TKA (Tes Kemampuan Akademik) terbaik di Kota ${nameCountry} untuk persiapan masuk PTN. Belajar bersama tutor berpengalaman dengan program intensif dan latihan soal untuk hasil maksimal.",
          "url": "https://lesprivat.bimbelmatrix.com/bimbel-tka-tes-kemampuan-akademik/kota/${nameCountry}",
          "areaServed": "${nameCountry}",
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
          }
          "keywords": "les privat TKA Kota ${nameCountry}, bimbel TKA Terbaik Kota ${nameCountry}, les persiapan UTBK Kota ${nameCountry}, guru datang ke rumah TKA, les TKA online Kota ${nameCountry}, bimbingan belajar masuk PTN"
        },
          
        {
          "@type": "WebPage",
          "@id": "${canonicalUrl}#webpage",
          "url": "${canonicalUrl}",
          "name": "Les Privat TKA Kota ${nameCountry} | Matrix Tutoring",
          "inLanguage": "id-ID",
          "description": "Matrix Tutoring menghadirkan Les Privat TKA (Tes Kemampuan Akademik) terbaik di Kota ${nameCountry}. Fokus pada penguasaan materi TKA dan strategi mengerjakan soal untuk lolos UTBK/SNBT.",
          "isPartOf": { "@id": "${baseUrl}" },
          "about": { "@id": "${canonicalUrl}#organization" },
          "mainEntity": {
            "@type": "Service",
            "name": "Les Privat TKA di Kota ${nameCountry}",
            "provider": { "@id": "${canonicalUrl}#organization" },
            "serviceType": "Les Privat TKA",
            "areaServed": "Kota ${nameCountry}",
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
              "name": "Apakah Matrix Tutoring menyediakan guru datang ke rumah di Kota ${nameCountry} untuk persiapan TKA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kota ${nameCountry} untuk fokus pada materi TKA. Jadwal bisa disesuaikan dengan kebutuhan persiapan UTBK/SNBT siswa."
              }
            },
            {
              "@type": "Question",
              "name": "Apakah tersedia les privat online untuk TKA di Kota ${nameCountry}?",
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
        heading={displayedHeading}
        desc={heroData?.description}
        location={nameCountry}
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

export default LesPrivateTKAKota;
