import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
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
import TestimoniOrtuSiswa from "../../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import TestimonialSiswa from "../../../Components/TestimonialSiswa/TestimonialSiswa";
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

const LesPrivateSMPKota = () => {
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

  const programName = "SMP";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("SMP", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKota({
          kota: formatSlugToName(kotaSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk SMA Favorit`,
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
    displayedHeading = `Les Privat ${programName} di ${nameCountry} - Bimbingan Intensif untuk Sukses di Ujian Sekolah dan Seleksi Masuk SMA Favorit`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com/";
  // Canonical URL untuk halaman kota
  const canonicalUrl = `${baseUrl}/bimbel-les-privat-smp-terbaik/kota/${kotaSlug}`;

  const pageTitle = `🎓 Les Privat SMP di Kota ${nameCountry} | Persiapan Ujian & Masuk SMA Favorit | Matrix Tutoring`;
  const descriptionContent = `Les Privat SMP terbaik di Kota ${nameCountry} bersama Matrix Tutoring! Fokus pada peningkatan nilai, pemahaman konsep, dan persiapan ujian masuk SMA. Guru berpengalaman, metode interaktif, dan jadwal fleksibel siap membantu kesuksesan belajar Anda.`;

  const ogTitle = `Les Privat SMP Kota ${nameCountry} - Bimbingan Intensif & Guru Profesional | Matrix Tutoring`;
  const ogDescription = `Matrix Tutoring menghadirkan Les Privat SMP terbaik di Kota ${nameCountry}. Program belajar terarah, kurikulum nasional & internasional, serta pendampingan intensif untuk ujian dan seleksi masuk SMA favorit.`;

  const twitterTitle = `Les Privat SMP Terbaik di Kota ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Ingin nilai naik dan siap masuk SMA unggulan? Matrix Tutoring hadir di Kota ${nameCountry} dengan guru SMP berpengalaman & program belajar efektif untuk hasil terbaik.`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SMP Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SMP Kota ${nameCountry}`,
    `Les Privat Sekolah Menengah Pertama Kota ${nameCountry}`,
    `Guru Privat SMP Kota ${nameCountry}`,
    `Guru Les Privat SMP Kota ${nameCountry}`,
    `Bimbel SMP Kota ${nameCountry}`,
    `Bimbingan Belajar SMP Kota ${nameCountry}`,
    `Les Privat Online SMP Kota ${nameCountry}`,
    `Les Privat Offline SMP Kota ${nameCountry}`,
    `Program Belajar SMP Kota ${nameCountry}`,
    `Program Les Sekolah Menengah Pertama Kota ${nameCountry}`,
    `Guru Les Matematika SMP Kota ${nameCountry}`,
    `Les Matematika SMP Kota ${nameCountry}`,
    `Les IPA SMP Kota ${nameCountry}`,
    `Les Bahasa Inggris SMP Kota ${nameCountry}`,
    `Tutor SMP Berpengalaman Kota ${nameCountry}`,
    `Les Privat Mata Pelajaran SMP Kota ${nameCountry}`,
    `Les Privat Bahasa Indonesia SMP Kota ${nameCountry}`,
    `Les Privat Fisika SMP Kota ${nameCountry}`,
    `Les Privat Kimia SMP Kota ${nameCountry}`,
    `Les Privat Biologi SMP Kota ${nameCountry}`,
    `Les Privat Ekonomi SMP Kota ${nameCountry}`,
    `Les Privat Geografi SMP Kota ${nameCountry}`,
    `Matrix Tutoring SMP Kota ${nameCountry}`,
    `Bimbel Online SMP Kota ${nameCountry}`,
    `Kursus SMP Kota ${nameCountry}`,
    `Persiapan Ujian SMP Kota ${nameCountry}`,
    `Ujian Nasional SMP Kota ${nameCountry}`,
    `Tingkat SMP Kota ${nameCountry}`,
    `Materi SMP Kota ${nameCountry}`,
    `PR SMP Kota ${nameCountry}`,
    `Remedi SMP Kota ${nameCountry}`,
    `Persiapan Masuk SMA Kota ${nameCountry}`,
    `Penerimaan Siswa Baru SMA Kota ${nameCountry}`, // Tambahan keywords relevan untuk SMP
    kotaSlug.replace(/-/g, " ").toLowerCase(), // Tambahkan slug kota sebagai keyword
  ].filter(Boolean); // Filter untuk menghapus string kosong

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
                        "name": "Les Pr2 ivat ${programName}"
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
                 "description": "Les Privat SMP terbaik di Kota ${nameCountry} dengan guru berpengalaman. Fokus pada peningkatan prestasi akademik, persiapan ujian, dan strategi masuk SMA favorit. Jadwal fleksibel & bisa online maupun datang ke rumah.",
                 "url": "https://lesprivat.bimbelmatrix.com/bimbel-les-privat-smp-terbaik/kota/${kotaSlug}",
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
                  "keywords": "les privat SMP Kota ${nameCountry}, bimbel SMP Terbaik Kota ${nameCountry}, guru datang ke rumah SMP, les Matematika, les SMP online Kota ${nameCountry}, bimbingan belajar anak SMP"
                },
                

              
               {
                 "@type": "WebPage",
                 "@id": "${canonicalUrl}#webpage",
                 "url": "${canonicalUrl}",
                 "name": "Les Privat SMP Kota ${nameCountry} | Matrix Tutoring",
                 "inLanguage": "id-ID",
                 "description": "Matrix Tutoring menghadirkan Les Privat SMP terbaik di Kota ${nameCountry}. Fokus pada prestasi akademik, pemahaman materi, dan persiapan ujian masuk SMA favorit.",
                 "isPartOf": { "@id": "${baseUrl}" },
                 "about": { "@id": "${canonicalUrl}#organization" },
                 "mainEntity": {
                   "@type": "Service",
                   "name": "Les Privat SMP di Kota ${nameCountry}",
                   "provider": { "@id": "${canonicalUrl}#organization" },
                   "serviceType": "Les Privat SMP",
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
                "name": "Apakah tersedia les privat online untuk siswa SMP di Kota ${nameCountry}?",
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

export default LesPrivateSMPKota;
