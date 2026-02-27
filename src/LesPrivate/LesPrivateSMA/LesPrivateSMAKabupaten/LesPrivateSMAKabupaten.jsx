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
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getAllKotaKabupatenBySlug } from "../../../helper/request/getAllKotaKabupatenBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import LesPrivateSMAHeader from "../components/LesPrivateSMAHeader";
import LesPrivatSMAMetode from "../components/LesPrivatSMAMetode/LesPrivatSMAMetode";
import ProgaramLesPrivatSMA from "../components/ProgaramLesPrivatSMA/ProgaramLesPrivatSMA";
import PTNSuccessStrategy from "../components/PTNSuccessStrategy/PTNSuccessStrategy";
import WhyMTXImportant from "../components/WhyMTXImportant/WhyMTXImportant";
import SolusiLesPrivateSMA from "../components/SolusiLesPrivateSMA/SolusiLesPrivateSMA";
import KeunggulanLesPrivateSMA from "../components/KeunggulanLesPrivatSMA/KeunggulanLesPrivatSMA";
import ProfileMatrixTutoring from "../../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateTK/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import KurikulumLesPrivate from "../../LesPrivateTK/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateTK/components/LesprivatKota/LesprivatKota";

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
const LesPrivateSMAKabupaten = () => {
  const [kabupaten, setKabupaten] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { slug } = useParams();
  const kabupatenSlug = slug;

  const formatSlugToName = (slug) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry =
    kabupaten?.kota_kabupaten || formatSlugToName(kabupatenSlug);

  const programName = "SMA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKabupaten = await getAllKotaKabupatenBySlug(
          kabupatenSlug
        );
        setKabupaten(responseKabupaten.data);

        const getHero = await getHeroData("SMA", "kabupaten");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setKabupaten({
          kota_kabupaten: formatSlugToName(kabupatenSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`,
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kabupatenSlug, programName]);

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
  // Canonical URL untuk halaman kabupaten
  const canonicalUrl = `${baseUrl}/bimbel-les-privat-sma-terbaik/kabupaten/${kabupatenSlug}`;

  // ⚡ SEO SUPER OPTIMIZED LES PRIVAT SMA - MATRIX TUTORING

  const pageTitle = `🎓 Les Privat SMA di Kabupaten ${nameCountry} Terbaik #1 | Guru Datang ke Rumah & Online | Matrix Tutoring`;

  const descriptionContent = `Les Privat SMA di Kabupaten ${nameCountry} dengan guru berpengalaman dan metode belajar interaktif. Fokus persiapan masuk PTN, Kedokteran, dan peningkatan nilai sekolah. Tersedia les datang ke rumah & online. Daftar sekarang di Matrix Tutoring!`;

  const ogTitle = `Les Privat SMA Kabupaten ${nameCountry} - Bimbel Masuk PTN & Kedokteran Terbaik | Matrix Tutoring`;
  const ogDescription = `Butuh les privat SMA di Kabupaten ${nameCountry}? Matrix Tutoring siap membantu Anda masuk PTN impian! Guru terbaik, materi lengkap, jadwal fleksibel, dan tersedia les online & tatap muka.`;

  const twitterTitle = `Les Privat SMA Terbaik di Kabupaten ${nameCountry} | Guru Datang ke Rumah & Online`;
  const twitterDescription = `Les Privat SMA di Kabupaten ${nameCountry} dari Matrix Tutoring: Persiapan masuk PTN, Kedokteran, & peningkatan nilai sekolah. Ayo belajar dengan tutor profesional sekarang juga!`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMA Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMA Kabupaten ${nameCountry}`,
    `Les Privat Sekolah Menengah Atas Kabupaten ${nameCountry}`,
    `Guru Privat SMA Kabupaten ${nameCountry}`,
    `Guru Les Privat SMA Kabupaten ${nameCountry}`,
    `Bimbel SMA Kabupaten ${nameCountry}`,
    `Bimbingan Belajar SMA Kabupaten ${nameCountry}`,
    `Les Privat Online SMA Kabupaten ${nameCountry}`,
    `Les Privat Offline SMA Kabupaten ${nameCountry}`,
    `Program Belajar SMA Kabupaten ${nameCountry}`,
    `Program Les Sekolah Menengah Atas Kabupaten ${nameCountry}`,
    `Guru Les Matematika SMA Kabupaten ${nameCountry}`,
    `Les Matematika SMA Kabupaten ${nameCountry}`,
    `Les IPA SMA Kabupaten ${nameCountry}`,
    `Les Bahasa Inggris SMA Kabupaten ${nameCountry}`,
    `Tutor SMA Kabupaten Berpengalaman Kabupaten ${nameCountry}`,
    `Les Privat Mata Pelajaran SMA Kabupaten ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMA Kabupaten ${nameCountry}`,
    `Les Privat Fisika SMA Kabupaten ${nameCountry}`,
    `Les Privat Kimia SMA Kabupaten ${nameCountry}`,
    `Les Privat Biologi SMA Kabupaten ${nameCountry}`,
    `Les Privat Ekonomi SMA Kabupaten ${nameCountry}`,
    `Les Privat Geografi SMA Kabupaten ${nameCountry}`,
    `Matrix Tutoring SMA Kabupaten ${nameCountry}`,
    `Bimbel Online SMA Kabupaten ${nameCountry}`,
    `Kursus SMA Kabupaten ${nameCountry}`,
    `Persiapan Ujian SMA Kabupaten ${nameCountry}`,
    `UN SMA Kabupaten ${nameCountry}`,
    `UTBK SMA Kabupaten ${nameCountry}`,
    `Persiapan Masuk PTN Kabupaten ${nameCountry}`,
    `Tingkat SMA Kabupaten ${nameCountry}`,
    `Materi SMA Kabupaten ${nameCountry}`,
    `PR SMA Kabupaten ${nameCountry}`,
    `Remedi SMA Kabupaten ${nameCountry}`,
    kabupatenSlug.replace(/-/g, " ").toLowerCase(),
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
                        "@id": "${baseUrl}/bimbel-les-privat-sma-terbaik", // URL program utama
                        "name": "Les Privat ${programName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${baseUrl}/bimbel-les-privat-sma-terbaik/kabupaten/${kabupatenSlug}", // URL kota induk
                        "name": "Les Privat ${programName} di ${nameCountry}"
                      }
                    }
                   
                  ]
                },


               {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Matrix Tutoring",
                "description": "Les Privat SMA terbaik di Kabupaten ${nameCountry} dengan guru profesional. Fokus pada persiapan masuk PTN, kedokteran, dan peningkatan prestasi akademik siswa SMA. Jadwal fleksibel, metode belajar efektif, serta bimbingan online & tatap muka.",
                "url": "https://lesprivat.bimbelmatrix.com/bimbel-les-privat-sma-terbaik/kabupaten/${nameCountry}",
                "areaServed": "Kabupaten ${nameCountry}",
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
                 "keywords": "les privat SMA Kabupaten ${nameCountry}, bimbel SMA Terbaik Kabupaten ${nameCountry}, guru datang ke rumah SMA, les Matematika, les SMA online Kabupaten ${nameCountry}, bimbingan belajar anak SMA"
                },



            {
               "@type": "WebPage",
               "@id": "${canonicalUrl}#webpage",
               "url": "${canonicalUrl}",
               "name": "Les Privat SMA Kabupaten ${nameCountry} | Matrix Tutoring",
               "inLanguage": "id-ID",
               "description": "Matrix Tutoring menghadirkan Les Privat SMA terbaik di Kabupaten ${nameCountry}. Fokus pada peningkatan prestasi akademik, pemahaman materi, dan belajar menyenangkan.",
               "isPartOf": { "@id": "${baseUrl}" },
               "about": { "@id": "${canonicalUrl}#organization" },
               "mainEntity": {
               "@type": "Service",
               "name": "Les Privat SMA di Kabupaten ${nameCountry}",
               "provider": { "@id": "${canonicalUrl}#organization" },
               "serviceType": "Les Privat SMA",
               "areaServed": "Kabupaten ${nameCountry}",
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
                "name": "Apakah Matrix Tutoring menyediakan guru datang ke rumah di Kabupaten ${nameCountry}?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kabupaten ${nameCountry}. Jadwal bisa disesuaikan dengan kebutuhan siswa."
                   }
                },
              {
                "@type": "Question",
                "name": "Apakah tersedia les privat online untuk siswa SMA di Kabupaten ${nameCountry}?",
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
        location={nameCountry}
        desc={heroData?.description}
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

export default LesPrivateSMAKabupaten;
