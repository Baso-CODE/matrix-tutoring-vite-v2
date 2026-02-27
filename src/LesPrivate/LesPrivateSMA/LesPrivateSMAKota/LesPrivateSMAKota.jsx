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
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import KurikulumLesPrivate from "../../LesPrivateTK/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateTK/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateTK/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import KeunggulanLesPrivateSMA from "../components/KeunggulanLesPrivatSMA/KeunggulanLesPrivatSMA";
import LesPrivateSMAHeader from "../components/LesPrivateSMAHeader";
import LesPrivatSMAMetode from "../components/LesPrivatSMAMetode/LesPrivatSMAMetode";
import ProgaramLesPrivatSMA from "../components/ProgaramLesPrivatSMA/ProgaramLesPrivatSMA";
import PTNSuccessStrategy from "../components/PTNSuccessStrategy/PTNSuccessStrategy";
import SolusiLesPrivateSMA from "../components/SolusiLesPrivateSMA/SolusiLesPrivateSMA";
import WhyMTXImportant from "../components/WhyMTXImportant/WhyMTXImportant";

const items = [
  {
    text: "Les Privat SMA – Guru Les Privat SMA ke Rumah dan Bimbel Online",
    href: "#bimbel-les-privat-sma-terbaik",
    subItems: [
      {
        text: "Kurikulum dan Mata Pelajaran",
        href: "#kurikulum-dan-mata-pelajaran",
      },

      {
        text: "Pengajar Berkualitas dan Terpercaya",
        href: "#pengajar-berkualitas-sma",
      },
    ],
  },
  {
    text: "Strategi Lolos PTN: Pendekatan Modern",
    href: "#ptn-success-strategy",
  },
  {
    text: "Mengapa Memilih Matrix Tutoring",
    href: "#matrix-differentiation-sma",
  },
  {
    text: "Pengajar Les Private SMA",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMA",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMA",
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
const LesPrivateSMAKota = () => {
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

  const programName = "SMA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("SMA", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKota({
          kota: formatSlugToName(kotaSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`,
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kotaSlug, programName]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/bimbel-les-privat-sma-terbaik/kota/${kotaSlug}`;

  // === Meta Tags SEO ===
  const pageTitle = `🎯 Les Privat SMA di Kota ${nameCountry} | Persiapan PTN & Kedokteran | Matrix Tutoring`;
  const descriptionContent = `Les Privat SMA terbaik di Kota ${nameCountry} bersama guru berpengalaman Matrix Tutoring. Fokus pada peningkatan nilai, strategi masuk PTN & kedokteran, serta bimbingan intensif UTBK. Belajar bisa online atau guru datang ke rumah.`;

  const ogTitle = `Les Privat SMA Kota ${nameCountry} - Bimbingan Intensif Masuk PTN & Kedokteran | Matrix Tutoring`;
  const ogDescription = `Tingkatkan prestasi akademik dengan les privat SMA di Kota ${nameCountry}. Guru profesional, kurikulum terarah, dan program intensif untuk lolos PTN & kedokteran.`;
  const twitterTitle = `Les Privat SMA Terbaik di Kota ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Matrix Tutoring menghadirkan les privat SMA terbaik di Kota ${nameCountry}. Belajar efektif dengan guru berpengalaman dan strategi masuk PTN favorit.`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMA Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMA Kota ${nameCountry}`,
    `Les Privat Sekolah Menengah Atas Kota ${nameCountry}`,
    `Guru Privat SMA Kota ${nameCountry}`,
    `Guru Les Privat SMA Kota ${nameCountry}`,
    `Bimbel SMA Kota ${nameCountry}`,
    `Bimbingan Belajar SMA Kota ${nameCountry}`,
    `Les Privat Online SMA Kota ${nameCountry}`,
    `Les Privat Offline SMA Kota ${nameCountry}`,
    `Program Belajar SMA Kota ${nameCountry}`,
    `Program Les Sekolah Menengah Atas Kota ${nameCountry}`,
    `Guru Les Matematika SMA Kota ${nameCountry}`,
    `Les Matematika SMA Kota ${nameCountry}`,
    `Les IPA SMA Kota ${nameCountry}`,
    `Les Bahasa Inggris SMA Kota ${nameCountry}`,
    `Tutor SMA Berpengalaman Kota ${nameCountry}`,
    `Les Privat Mata Pelajaran SMA Kota ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMA Kota ${nameCountry}`,
    `Les Privat Fisika SMA Kota ${nameCountry}`,
    `Les Privat Kimia SMA Kota ${nameCountry}`,
    `Les Privat Biologi SMA Kota ${nameCountry}`,
    `Les Privat Ekonomi SMA Kota ${nameCountry}`,
    `Les Privat Geografi SMA Kota ${nameCountry}`,
    `Matrix Tutoring SMA Kota ${nameCountry}`,
    `Bimbel Online SMA Kota ${nameCountry}`,
    `Kursus SMA Kota ${nameCountry}`,
    `Persiapan Ujian SMA Kota ${nameCountry}`,
    `UN SMA Kota ${nameCountry}`,
    `UTBK SMA Kota ${nameCountry}`,
    `Persiapan Masuk PTN Kota ${nameCountry}`,
    `Tingkat SMA Kota ${nameCountry}`,
    `Materi SMA Kota ${nameCountry}`,
    `PR SMA Kota ${nameCountry}`,
    `Remedi SMA Kota ${nameCountry}`,
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
                        "@id": "${baseUrl}/bimbel-les-privat-sma-terbaik",
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
                "description": "Les Privat SMA terbaik di Kota ${nameCountry} dengan guru profesional. Fokus pada persiapan masuk PTN, kedokteran, dan peningkatan prestasi akademik siswa SMA. Jadwal fleksibel, metode belajar efektif, serta bimbingan online & tatap muka.",
                "url": "https://lesprivat.bimbelmatrix.com/bimbel-les-privat-sma-terbaik/kota/${nameCountry}",
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
                "keywords": "les privat SMA Kota ${nameCountry}, bimbel SMA Terbaik Kota ${nameCountry}, guru datang ke rumah SMA, les Matematika, les SMA online Kota ${nameCountry}, bimbingan belajar anak SMA"
                },

              {
               "@type": "WebPage",
               "@id": "${canonicalUrl}#webpage",
               "url": "${canonicalUrl}",
               "name": "Les Privat SMA Kota ${nameCountry} | Matrix Tutoring",
               "inLanguage": "id-ID",
               "description": "Matrix Tutoring menghadirkan Les Privat SMA terbaik di Kota ${nameCountry}. Fokus pada peningkatan prestasi akademik, pemahaman materi, dan belajar menyenangkan.",
               "isPartOf": { "@id": "${baseUrl}" },
               "about": { "@id": "${canonicalUrl}#organization" },
               "mainEntity": {
               "@type": "Service",
               "name": "Les Privat SMA di Kota ${nameCountry}",
               "provider": { "@id": "${canonicalUrl}#organization" },
               "serviceType": "Les Privat SMA",
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
                "name": "Apakah tersedia les privat online untuk siswa SMA di Kota ${nameCountry}?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tentu. Matrix Tutoring menyediakan layanan les privat SMA secara online dengan guru profesional dan sistem belajar interaktif."
                  }
              },
              {
                "@type": "Question",
                "name": "Apakah Matrix Tutoring hanya untuk pelajaran tertentu saja?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tidak. Program Matrix Tutoring mencakup semua mata pelajaran SMA, mulai dari Matematika, IPA, Bahasa Inggris, hingga persiapan ujian kenaikan kelas."
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
      <LesPrivateSMAHeader />
      <WhyMTXImportant location={nameCountry} />
      <LesPrivatSMAMetode />
      <ProgaramLesPrivatSMA />
      <SolusiLesPrivateSMA />
      <KeunggulanLesPrivateSMA />
      <ProfileMatrixTutoring title={"SMA Terbaik"} location={nameCountry} />
      <TutorLesprivatMatrix />
      <KurikulumLesPrivate />
      <LesprivatKota />
      <PTNSuccessStrategy location={nameCountry} />
      {/* <MatrixDifferentiationSMA /> */}
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

export default LesPrivateSMAKota;
