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
const LesPrivateSMAKelurahan = () => {
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

  const programName = "SMA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKelurahan = await getKelurahanBySlug(kelurahanSlug);
        setKelurahan(responseKelurahan.data);

        const getHero = await getHeroData("SMA", "kelurahan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKelurahan({
          kelurahan: formatSlugToName(kelurahanSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk Perguruan Tinggi`,
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kelurahanSlug, programName]); // Tambahkan semua dependency yang relevan

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
  // Canonical URL untuk halaman kelurahan
  const canonicalUrl = `${baseUrl}/bimbel-les-privat-sma-terbaik/kelurahan/${kelurahanSlug}`;

  // ⚡ SEO ULTRA OPTIMIZED - Les Privat SMA Kecamatan ${nameCountry} | Matrix Tutoring

  const pageTitle = `🎓 Les Privat SMA di Kecamatan ${nameCountry} Terbaik #1 | Guru Datang ke Rumah & Online | Matrix Tutoring`;

  const descriptionContent = `Les Privat SMA terbaik di Kecamatan ${nameCountry} 🚀 Dibimbing oleh GURU PROFESIONAL & berpengalaman. Fokus persiapan masuk PTN, Kedokteran, dan peningkatan nilai sekolah. Tersedia les datang ke rumah & online interaktif. Daftar sekarang di Matrix Tutoring!`;

  const ogTitle = `Les Privat SMA Kecamatan ${nameCountry} - Bimbingan Intensif Masuk PTN & Kedokteran | Matrix Tutoring`;
  const ogDescription = `Matrix Tutoring hadir di Kecamatan ${nameCountry} dengan program Les Privat SMA terbaik. Dapatkan pembelajaran personal, guru ahli, dan strategi belajar efektif untuk meraih hasil maksimal.`;

  const twitterTitle = `Les Privat SMA di Kecamatan ${nameCountry} | Guru Datang ke Rumah & Online | Matrix Tutoring`;
  const twitterDescription = `Cari Les Privat SMA terbaik di Kecamatan ${nameCountry}? Matrix Tutoring solusinya! Belajar lebih fokus, menyenangkan, dan siap masuk PTN favorit. Yuk daftar sekarang!`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMA Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMA ${nameCountry}`,
    `Les Privat Sekolah Menengah Atas ${nameCountry}`,
    `Guru Privat SMA ${nameCountry}`,
    `Guru Les Privat SMA ${nameCountry}`,
    `Bimbel SMA ${nameCountry}`,
    `Bimbingan Belajar SMA ${nameCountry}`,
    `Les Privat Online SMA ${nameCountry}`,
    `Les Privat Offline SMA ${nameCountry}`,
    `Program Belajar SMA ${nameCountry}`,
    `Program Les Sekolah Menengah Atas ${nameCountry}`,
    `Guru Les Matematika SMA ${nameCountry}`,
    `Les Matematika SMA ${nameCountry}`,
    `Les IPA SMA ${nameCountry}`,
    `Les Bahasa Inggris SMA ${nameCountry}`,
    `Tutor SMA Berpengalaman ${nameCountry}`,
    `Les Privat Mata Pelajaran SMA ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMA ${nameCountry}`,
    `Les Privat Fisika SMA ${nameCountry}`,
    `Les Privat Kimia SMA ${nameCountry}`,
    `Les Privat Biologi SMA ${nameCountry}`,
    `Les Privat Ekonomi SMA ${nameCountry}`,
    `Les Privat Geografi SMA ${nameCountry}`,
    `Matrix Tutoring SMA ${nameCountry}`,
    `Bimbel Online SMA ${nameCountry}`,
    `Kursus SMA ${nameCountry}`,
    `Persiapan Ujian SMA ${nameCountry}`,
    `UN SMA ${nameCountry}`,
    `UTBK SMA ${nameCountry}`,
    `Persiapan Masuk PTN ${nameCountry}`,
    `Tingkat SMA ${nameCountry}`,
    `Materi SMA ${nameCountry}`,
    `PR SMA ${nameCountry}`,
    `Remedi SMA ${nameCountry}`,
    kelurahanSlug.replace(/-/g, " ").toLowerCase(),
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
                        "@id": "${baseUrl}/bimbel-les-privat-sma-terbaik/kelurahan/${kelurahanSlug}", 
                        "name": "Les Privat ${programName} di ${nameCountry}"
                      }
                    }
                  ]
                },
                {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Matrix Tutoring",
                "description": "Les Privat SMA terbaik di Kecamatan ${nameCountry} dengan guru profesional. Fokus pada persiapan masuk PTN, kedokteran, dan peningkatan prestasi akademik siswa SMA. Jadwal fleksibel, metode belajar efektif, serta bimbingan online & tatap muka.",
                "url": "https://lesprivat.bimbelmatrix.com/bimbel-les-privat-sma-terbaik/kelurahan/${nameCountry}",
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
                "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-857-4728-1466",
                "contactType": "Customer Service",
                "areaServed": "ID",
                "availableLanguage": ["Indonesian", "English"]
                 },
                 "keywords": "les privat SMA Kelurahan ${nameCountry}, bimbel SMA Terbaik Kelurahan ${nameCountry}, guru datang ke rumah SMA, les Matematika, les SMA online Kelurahan ${nameCountry}, bimbingan belajar anak SMA"
                },


              {
               "@type": "WebPage",
               "@id": "${canonicalUrl}#webpage",
               "url": "${canonicalUrl}",
               "name": "Les Privat SMA Kelurahan ${nameCountry} | Matrix Tutoring",
               "inLanguage": "id-ID",
               "description": "Matrix Tutoring menghadirkan Les Privat SMA terbaik di Kelurahan ${nameCountry}. Fokus pada peningkatan prestasi akademik, pemahaman materi, dan belajar menyenangkan.",
               "isPartOf": { "@id": "${baseUrl}" },
               "about": { "@id": "${canonicalUrl}#organization" },
               "mainEntity": {
               "@type": "Service",
               "name": "Les Privat SMA di Kelurahan ${nameCountry}",
               "provider": { "@id": "${canonicalUrl}#organization" },
               "serviceType": "Les Privat SMA",
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
                "name": "Apakah Matrix Tutoring menyediakan guru datang ke rumah di Kelurahan ${nameCountry}?",
                "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kelurahan ${nameCountry}. Jadwal bisa disesuaikan dengan kebutuhan siswa."
                   }
                },
              {
                "@type": "Question",
                "name": "Apakah tersedia les privat online untuk siswa SMA di Kelurahan ${nameCountry}?",
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

export default LesPrivateSMAKelurahan;
