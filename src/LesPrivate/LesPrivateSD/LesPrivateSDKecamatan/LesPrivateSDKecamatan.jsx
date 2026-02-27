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

const LesPrivateSDKecamatan = () => {
  const [kecamatan, setKecamatan] = useState({});
  const [heroData, setHeroData] = useState(null);

  const { slug } = useParams();
  const kecamatanSlug = slug;

  const formatSlugToName = (slugText) => {
    if (!slugText) return "";
    return slugText
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const nameCountry = kecamatan?.kecamatan || formatSlugToName(kecamatanSlug);
  const programName = "SD";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("SD", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);

        setKecamatan({
          kecamatan: formatSlugToName(kecamatanSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName} di [LOKASI] - Pendampingan Belajar Terbaik untuk Tingkat Sekolah Dasar`,
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug, programName]);

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
  // Perubahan utama: Canonical URL disesuaikan dengan struktur flat yang baru
  const canonicalUrl = `${baseUrl}/bimbel-les-privat-sd-terbaik/kecamatan/${kecamatanSlug}`;

  const pageTitle = `🏫 Les Privat SD di Kecamatan ${nameCountry} | Guru Datang ke Rumah & Online | Matrix Tutoring`;
  const descriptionContent = `Les Privat SD terbaik di Kecamatan ${nameCountry} dengan guru berpengalaman dari Matrix Tutoring. Belajar jadi lebih mudah dengan metode interaktif, kurikulum nasional & internasional, serta jadwal fleksibel untuk anak Anda. Daftar sekarang!`;

  const ogTitle = `Les Privat SD Kecamatan ${nameCountry} - Guru Terbaik & Metode Efektif | Matrix Tutoring`;
  const ogDescription = `Matrix Tutoring menghadirkan les privat SD terbaik di Kecamatan ${nameCountry}. Belajar menyenangkan, terarah, dan didampingi tutor profesional untuk hasil belajar maksimal.`;

  const twitterTitle = `Les Privat SD Terbaik di Kecamatan ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Cari guru privat SD berpengalaman di Kecamatan ${nameCountry}? Matrix Tutoring solusinya! Fokus pada penguasaan konsep, peningkatan nilai, dan semangat belajar anak.`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SD Terbaik ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat SD Kecamatan ${nameCountry}`,
    `Les Privat Sekolah Dasar Kecamatan ${nameCountry}`,
    `Guru Privat SD Kecamatan ${nameCountry}`,
    `Guru Les Privat SD Kecamatan ${nameCountry}`,
    `Bimbel SD Kecamatan ${nameCountry}`,
    `Bimbingan Belajar SD Kecamatan ${nameCountry}`,
    `Les Privat Online SD Kecamatan ${nameCountry}`,
    `Les Privat Offline SD Kecamatan ${nameCountry}`,
    `Program Belajar SD Kecamatan ${nameCountry}`,
    `Program Les Sekolah Dasar Kecamatan ${nameCountry}`,
    `Guru Les Calistung SD Kecamatan ${nameCountry}`,
    `Les Calistung SD Kecamatan ${nameCountry}`,
    `Les Online SD Kecamatan ${nameCountry}`,
    `Les Privat Anak SD Kecamatan ${nameCountry}`,
    `Les Privat Matematika SD Kecamatan ${nameCountry}`,
    `Les Privat IPA SD Kecamatan ${nameCountry}`,
    `Les Privat Bahasa Inggris SD Kecamatan ${nameCountry}`,
    `Tutor SD Berpengalaman Kecamatan ${nameCountry}`,
    `Les Privat Mata Pelajaran SD Kecamatan ${nameCountry}`,
    `Matrix Tutoring SD Kecamatan ${nameCountry}`,
    `Bimbel Online SD Kecamatan ${nameCountry}`,
    `Kursus SD Kecamatan ${nameCountry}`,
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
                        "@id": "${baseUrl}/bimbel-les-privat-sd-terbaik",
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
                    "description": "Les Privat SD terbaik di Kecamatan ${nameCountry} dengan guru berpengalaman dan metode interaktif. Program belajar disesuaikan dengan kebutuhan anak untuk hasil belajar optimal.",
                    "url": "https://lesprivat.bimbelmatrix.com/les-privat-sd-terbaik/kecamatan/${kecamatanSlug}",
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
                   "keywords": "les privat SD Kecamatan ${nameCountry}, bimbel SD Terbaik Kecamatan ${nameCountry}, guru datang ke rumah SD, les Matematika, les SD online Kecamatan ${nameCountry}, bimbingan belajar anak SD"
                },

                {
                 "@type": "WebPage",
                 "@id": "${canonicalUrl}#webpage",
                 "url": "${canonicalUrl}",
                 "name": "Les Privat SD Kecamatan ${nameCountry} | Matrix Tutoring",
                 "inLanguage": "id-ID",
                 "description": "Matrix Tutoring menghadirkan Les Privat SD terbaik di Kecamatan ${nameCountry}. Fokus pada peningkatan prestasi akademik, pemahaman materi, dan belajar menyenangkan.",
                 "isPartOf": { "@id": "${baseUrl}" },
                 "about": { "@id": "${canonicalUrl}#organization" },
                 "mainEntity": {
                 "@type": "Service",
                 "name": "Les Privat SD di Kecamatan ${nameCountry}",
                 "provider": { "@id": "${canonicalUrl}#organization" },
                 "serviceType": "Les Privat SD",
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
                   "name": "Apakah tersedia les privat online untuk siswa SD di Kecamatan ${nameCountry}?",
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
      <ProfileMatrixTutoring title={"SD Terbaik"} location={nameCountry} />
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

export default LesPrivateSDKecamatan;
