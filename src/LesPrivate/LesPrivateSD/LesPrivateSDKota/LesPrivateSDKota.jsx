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
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import KurikulumLesPrivate from "../../LesPrivateTK/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateTK/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateTK/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import LesPrivateSDHeader from "../components/LesPrivateSDHeader";
import MainSubjectsSD from "../components/MainSubjectsSD/MainSubjectsSD";
import ProgramLesPrivatSD from "../components/ProgramLesPrivatSD/ProgramLesPrivatSD";
import ProgramSD from "../components/ProgramSD/ProgramSD";
import WhyChooseProgramSD from "../components/WhyChooseProgramSD/WhyChooseProgramSD";

const items = [
  {
    text: "Les Privat SD – Guru Les Privat Sekolah Dasar",
    href: "#bimbel-les-privat-sd-terbaik",
    subItems: [
      {
        text: "Manfaat Les Privat SD",
        href: "#manfaat-bimbel-les-privat-sd-terbaik",
      },
      {
        text: "Keunggulan Les Privat SD di Matrix Tutoring",
        href: "#keunggulan-bimbel-les-privat-sd-terbaik",
      },
      {
        text: "Layanan Les Privat SD di Matrix Tutoring",
        href: "#layanan-bimbel-les-privat-sd-terbaik",
      },
    ],
  },
  {
    text: "Pengajar Les Private SD",
    href: "#pengajar-les-private",
  },
  {
    text: "Materi Pelajaran SD Utama",
    href: "#materi-pelajaran-sd-utama",
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

const LesPrivateSDKota = () => {
  const [kota, setKota] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { slug } = useParams();
  const kotaSlug = slug;

  const formatSlugToName = (slugText) => {
    if (!slugText) return "";
    return slugText
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kota?.kota || formatSlugToName(kotaSlug);
  const programName = "SD";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("SD", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kota data:", error);
        setKota({
          kota: formatSlugToName(kotaSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Pendampingan Belajar Terbaik untuk Tingkat Sekolah Dasar`,
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kotaSlug, programName]);

  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Pendampingan Belajar Terbaik untuk Tingkat Sekolah Dasar`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com";

  // Perubahan utama: Canonical URL
  const canonicalUrl = `${baseUrl}/bimbel-les-privat-sd-terbaik/kota/${kotaSlug}`;

  const pageTitle = `🏫 Les Privat SD Terbaik di Kota ${nameCountry} | Guru Datang ke Rumah | Matrix Tutoring`;
  const descriptionContent = `Temukan les privat SD terbaik di Kota ${nameCountry} bersama Matrix Tutoring. Guru berpengalaman siap membantu anak Anda memahami pelajaran sekolah dasar dengan metode interaktif, kurikulum terbaru, dan jadwal fleksibel.`;
  const ogTitle = `Les Privat SD di Kota ${nameCountry} - Guru Datang ke Rumah & Pembelajaran Interaktif | Matrix Tutoring`;
  const ogDescription = `Bimbingan belajar SD terbaik di Kota ${nameCountry} dengan guru profesional dan metode yang menyenangkan. Dapatkan fondasi akademik kuat untuk masa depan anak Anda.`;
  const twitterTitle = `Les Privat SD Profesional di Kota ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Les privat SD di Kota ${nameCountry} dengan pengajar berpengalaman, fokus pemahaman konsep, dan metode belajar interaktif. Daftar sekarang di Matrix Tutoring!`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SD Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SD Kota ${nameCountry}`,
    `Les Privat Sekolah Dasar Kota ${nameCountry}`,
    `Guru Privat SD Kota ${nameCountry}`,
    `Guru Les Privat SD Kota ${nameCountry}`,
    `Bimbel SD Kota ${nameCountry}`,
    `Bimbingan Belajar SD Kota ${nameCountry}`,
    `Les Privat Online SD Kota ${nameCountry}`,
    `Les Privat Offline SD Kota ${nameCountry}`,
    `Program Belajar SD Kota ${nameCountry}`,
    `Program Les Sekolah Dasar Kota ${nameCountry}`,
    `Guru Les Calistung SD Kota ${nameCountry}`,
    `Les Calistung SD Kota ${nameCountry}`,
    `Les Online SD Kota ${nameCountry}`,
    `Les Privat Anak SD Kota ${nameCountry}`,
    `Les Privat Matematika SD Kota ${nameCountry}`,
    `Les Privat IPA SD Kota ${nameCountry}`,
    `Les Privat Bahasa Inggris SD Kota ${nameCountry}`,
    `Tutor SD Berpengalaman Kota ${nameCountry}`,
    `Les Privat Mata Pelajaran SD Kota ${nameCountry}`,
    `Matrix Tutoring SD Kota ${nameCountry}`,
    `Bimbel Online SD Kota ${nameCountry}`,
    `Kursus SD Kota ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
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
          "position": 1,
          "item": {
            "@id": "${baseUrl}",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "${baseUrl}/bimbel-les-privat-sd-terbaik",
            "name": "Les Privat ${programName}"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "${canonicalUrl}",
            "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
          }
        }
      ]
    },

    {
      "@type": "EducationalOrganization",
      "@id": "${canonicalUrl}#organization",
      "name": "Matrix Tutoring",
      "description": "Les Privat SD terbaik di Kota ${nameCountry} bersama guru berpengalaman. Belajar interaktif, kurikulum nasional & internasional, serta program fleksibel untuk anak SD.",
      "url": "https://lesprivat.bimbelmatrix.com/les-privat-sd-terbaik/kota/${kotaSlug}",
      "areaServed": "Kota ${nameCountry}",
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
      "keywords": "les privat SD Kota ${nameCountry}, bimbel SD Terbaik Kota ${nameCountry}, guru datang ke rumah SD, les Matematika, les SD online Kota ${nameCountry}, bimbingan belajar anak SD"
    },

    {
      "@type": "WebPage",
      "@id": "${canonicalUrl}#webpage",
      "url": "${canonicalUrl}",
      "name": "Les Privat SD Kota ${nameCountry} | Matrix Tutoring",
      "inLanguage": "id-ID",
      "description": "Matrix Tutoring menghadirkan Les Privat SD terbaik di Kota ${nameCountry}. Fokus pada peningkatan prestasi akademik, pemahaman materi, dan belajar menyenangkan.",
      "isPartOf": { "@id": "${baseUrl}" },
      "about": { "@id": "${canonicalUrl}#organization" },
      "mainEntity": {
        "@type": "Service",
        "name": "Les Privat SD di Kota ${nameCountry}",
        "provider": { "@id": "${canonicalUrl}#organization" },
        "serviceType": "Les Privat SD",
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
          "name": "Apakah Matrix Tutoring menyediakan guru datang ke rumah di Kota ${nameCountry}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kota ${nameCountry}. Jadwal bisa disesuaikan dengan kebutuhan siswa."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah tersedia les privat online untuk siswa SD di Kota ${nameCountry}?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tentu. Matrix Tutoring menyediakan layanan les privat SD secara online dengan guru profesional dan sistem belajar interaktif."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah Matrix Tutoring hanya untuk pelajaran tertentu saja?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tidak. Program Matrix Tutoring mencakup semua mata pelajaran SD, mulai dari Matematika, IPA, Bahasa Inggris, hingga persiapan ujian kenaikan kelas."
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
      {/* <Slidertop /> */}
      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateSDHeader location={nameCountry} />
      <ProgramLesPrivatSD />
      <ProgramSD location={nameCountry} />
      <WhyChooseProgramSD />
      <ProfileMatrixTutoring location={nameCountry} title={"SD Terbaik"} />
      <TutorLesprivatMatrix />
      <KurikulumLesPrivate />
      <LesprivatKota />
      <MainSubjectsSD location={nameCountry} />

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

export default LesPrivateSDKota;
