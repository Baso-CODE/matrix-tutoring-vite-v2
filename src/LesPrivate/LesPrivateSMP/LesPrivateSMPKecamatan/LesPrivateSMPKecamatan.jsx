import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import LesPrivateSMPHeader from "../components/LesPrivateSMPHeader";

import AccordionFAQ from "../../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../../Components/FiturProgramNew/FiturProgramNew";
import GaleriKegiatanBelajar from "../../../Components/GaleriKegiatanBelajar/GaleriKegiatanBelajar";
import HowToOrder from "../../../Components/HowToOrder/HowToOrder";
import MasterTeacherV2 from "../../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../../Components/MatrixFeatures/WhyMatrixFeatures";
import ProgramLesPrivatV2 from "../../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import SuccessStoryLesPrivate from "../../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import ImpactStatistics from "../../LesPrivateMahasiswa/components/ImpactStatistics/ImpactStatistics";
import KurikulumLesPrivate from "../../LesPrivateTK/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../../LesPrivateTK/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateTK/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import AdaptiveLearningSMP from "../components/AdaptiveLearningSMP/AdaptiveLearningSMP";
import ProgramBelajarSMP from "../components/ProgramBelajarSMP/ProgramBelajarSMP";
import SolusiBelajarSMP from "../components/SolusiBelajarSMP/SolusiBelajarSMP";
import TargetBelajarSMP from "../components/TargetBelajarSMP/TargetBelajarSMP";
const items = [
  {
    text: "Les Privat SMP – Guru Les Privat SMP ke Rumah dan Bimbel Online",
    href: "#bimbel-les-privat-smp-terbaik",
    subItems: [
      {
        text: "Pilihan Bahasa dan Kurikulum",
        href: "#pilihan-bahasa-dan-kurikulum",
      },

      {
        text: "Pengajar Berkualitas dan Fleksibilitas",
        href: "#pengajar-berkualitas-dan-fleksibilitas",
      },
    ],
  },
  {
    text: "Pendekatan Pembelajaran Adaptif Matrix",
    href: "#adaptive-learning-smp",
  },
  {
    text: "Pengajar Les Private SMP",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private SMP",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline SMP",
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

const LesPrivateSMPKecamatan = () => {
  const [kecamatan, setKecamatan] = useState({});
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

  const programName = "SMP";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("SMP", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKecamatan({
          kecamatan: formatSlugToName(kecamatanSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk SMA Favorit`, // Menyesuaikan untuk SMP
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
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk SMA Favorit`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com/";

  const canonicalUrl = `${baseUrl}/bimbel-les-privat-smp-terbaik/kecamatan/${kecamatanSlug}`;

  // === Meta Tags SEO ===
  const pageTitle = `🎓 Les Privat SMP di Kecamatan ${nameCountry} | Guru Profesional & Persiapan Masuk SMA | Matrix Tutoring`;
  const descriptionContent = `Les Privat SMP terbaik di Kecamatan ${nameCountry} bersama guru berpengalaman dari Matrix Tutoring. Fokus pada peningkatan nilai, penguasaan konsep, dan persiapan masuk SMA favorit. Belajar bisa online atau guru datang ke rumah.`;

  const ogTitle = `Les Privat SMP Kecamatan ${nameCountry} - Guru Terbaik & Strategi Efektif | Matrix Tutoring`;
  const ogDescription = `Matrix Tutoring menghadirkan les privat SMP terbaik di Kecamatan ${nameCountry}. Bimbingan intensif untuk prestasi akademik, ujian, dan kesiapan masuk SMA unggulan.`;
  const twitterTitle = `Les Privat SMP Terbaik di Kecamatan ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Butuh guru privat SMP profesional di Kecamatan ${nameCountry}? Matrix Tutoring siap bantu tingkatkan nilai & semangat belajar anak Anda. Daftar sekarang!`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMP Terbaik Kecamatan ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMP Kecamatan ${nameCountry}`,
    `Les Privat Sekolah Menengah Pertama Kecamatan ${nameCountry}`,
    `Guru Privat SMP Kecamatan ${nameCountry}`,
    `Guru Les Privat SMP Kecamatan ${nameCountry}`,
    `Bimbel SMP Kecamatan ${nameCountry}`,
    `Bimbingan Belajar SMP Kecamatan ${nameCountry}`,
    `Les Privat Online SMP Kecamatan ${nameCountry}`,
    `Les Privat Offline SMP Kecamatan ${nameCountry}`,
    `Program Belajar SMP Kecamatan ${nameCountry}`,
    `Program Les Sekolah Menengah Pertama Kecamatan ${nameCountry}`,
    `Guru Les Matematika SMP Kecamatan ${nameCountry}`,
    `Les Matematika SMP Kecamatan ${nameCountry}`,
    `Les IPA SMP Kecamatan ${nameCountry}`,
    `Les Bahasa Inggris SMP Kecamatan ${nameCountry}`,
    `Tutor SMP Berpengalaman Kecamatan ${nameCountry}`,
    `Les Privat Mata Pelajaran SMP Kecamatan ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMP Kecamatan ${nameCountry}`,
    `Les Privat Fisika SMP Kecamatan ${nameCountry}`,
    `Les Privat Kimia SMP Kecamatan ${nameCountry}`,
    `Les Privat Biologi SMP Kecamatan ${nameCountry}`,
    `Les Privat Ekonomi SMP Kecamatan ${nameCountry}`,
    `Les Privat Geografi SMP Kecamatan ${nameCountry}`,
    `Matrix Tutoring SMP Kecamatan ${nameCountry}`,
    `Bimbel Online SMP Kecamatan ${nameCountry}`,
    `Kursus SMP Kecamatan ${nameCountry}`,
    `Persiapan Ujian SMP Kecamatan ${nameCountry}`,
    `Ujian Nasional SMP Kecamatan ${nameCountry}`,
    `Tingkat SMP Kecamatan ${nameCountry}`,
    `Materi SMP Kecamatan ${nameCountry}`,
    `PR SMP Kecamatan ${nameCountry}`,
    `Remedi SMP Kecamatan ${nameCountry}`,
    `Persiapan Masuk SMA Kecamatan ${nameCountry}`,
    `Penerimaan Siswa Baru SMA Kecamatan ${nameCountry}`,
    kecamatanSlug.replace(/-/g, " ").toLowerCase(),

    `${nameCountry}`,
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
                        "@id": "${baseUrl}/bimbel-les-privat-smp-terbaik", 
                        "name": "Les Privat ${programName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${baseUrl}/bimbel-les-privat-smp-terbaik/kecamatan/${kecamatanSlug}",
                        "name": "Les Privat ${programName} di ${nameCountry}"
                      }
                    }
                  ]
                },
                
                  {
                 "@context": "https://schema.org",
                 "@type": "EducationalOrganization",
                 "name": "Matrix Tutoring",
                 "description": "Les Privat SMP terbaik di Kecamatan ${nameCountry} dengan guru berpengalaman. Fokus pada peningkatan prestasi akademik, persiapan ujian, dan strategi masuk SMA favorit. Jadwal fleksibel & bisa online maupun datang ke rumah.",
                 "url": "https://lesprivat.bimbelmatrix.com/bimbel-les-privat-smp-terbaik/kecamatan/${kecamatanSlug}",
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
                  "keywords": "les privat SMP Kecamatan ${nameCountry}, bimbel SMP Terbaik Kecamatan ${nameCountry}, guru datang ke rumah SMP, les Matematika, les SMP online Kecamatan ${nameCountry}, bimbingan belajar anak SMP"
                },

                
               {
                 "@type": "WebPage",
                 "@id": "${canonicalUrl}#webpage",
                 "url": "${canonicalUrl}",
                 "name": "Les Privat SMP Kecamatan ${nameCountry} | Matrix Tutoring",
                 "inLanguage": "id-ID",
                 "description": "Matrix Tutoring menghadirkan Les Privat SMP terbaik di Kecamatan ${nameCountry}. Fokus pada prestasi akademik, pemahaman materi, dan persiapan ujian masuk SMA favorit.",
                 "isPartOf": { "@id": "${baseUrl}" },
                 "about": { "@id": "${canonicalUrl}#organization" },
                 "mainEntity": {
                   "@type": "Service",
                   "name": "Les Privat SMP di Kecamatan ${nameCountry}",
                   "provider": { "@id": "${canonicalUrl}#organization" },
                   "serviceType": "Les Privat SMP",
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
                  "name": "Apakah Matrix Tutoring menyediakan guru datang ke rumah di Kecamatan ${nameCountry}?",
                   "acceptedAnswer": {
                   "@type": "Answer",
                   "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kecamatan ${nameCountry}. Jadwal bisa disesuaikan dengan kebutuhan siswa."
                  }
                },
              {
                "@type": "Question",
                "name": "Apakah tersedia les privat online untuk siswa SMP di Kecamatan ${nameCountry}?",
                "acceptedAnswer": {
                "@type": "Answer",
                 "text": "Tentu. Matrix Tutoring menyediakan layanan les privat SMP secara online dengan guru profesional dan sistem belajar interaktif."
                }
              },
            {
              "@type": "Question",
              "name": "Apakah Matrix Tutoring hanya untuk pelajaran tertentu saja?",
              "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tidak. Program Matrix Tutoring mencakup semua mata pelajaran SMP, mulai dari Matematika, IPA, Bahasa Inggris, hingga persiapan ujian masuk SMA favorit."
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
      <LesPrivateSMPHeader location={nameCountry} />
      <SolusiBelajarSMP location={nameCountry} />
      <ProgramBelajarSMP />
      <TargetBelajarSMP />
      <ProfileMatrixTutoring title={"SMP Terbaik"} location={nameCountry} />
      <KurikulumLesPrivate />
      <TutorLesprivatMatrix />
      <LesprivatKota />
      <AdaptiveLearningSMP location={nameCountry} />

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

export default LesPrivateSMPKecamatan;
