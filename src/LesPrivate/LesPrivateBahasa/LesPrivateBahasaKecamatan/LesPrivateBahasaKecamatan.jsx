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
import LesprivatKota from "../../LesPrivateTK/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateTK/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import ContentLesPrivatBahasa from "../components/ContentLesPrivatBahasa/ContentLesPrivatBahasa";
import FlowPembelajaranBahasa from "../components/FlowPembelajaranBahasa/FlowPembelajaranBahasa";
import LanguageOptions from "../components/LanguageOptions/LanguageOptions";
import ProgaramInsenstifBahasa from "../components/ProgaramInsenstifBahasa/ProgaramInsenstifBahasa";
import ProgaramLesPrivatBahasa from "../components/ProgaramLesPrivatBahasa/ProgaramLesPrivatBahasa";

const items = [
  {
    text: "Les Privat Bahasa – Guru Privat Bahasa Asing dan BIPA",
    href: "#les-privat-bahasa",
    subItems: [
      {
        text: "Program Les Privat Bahasa Asing dan BIPA",
        href: "#program-les-privat-bahasa",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Inggris Conversation dan Les Privat Bahasa Asing Offline dan Online",
        href: "#les-privat-bahasa-inggris",
      },
      {
        text: "Les Privat Bahasa Asing setiap hari dimana saja",
        href: "#les-privat-bahasa-setiap-hari",
      },
      {
        text: "Program Les Privat Bahasa Inggris Coversation dan Bahasa Asing",
        href: "#list-lest-private-bahasa",
      },
    ],
  },
  {
    text: "Statistik Hasil dari Usaha Kami",
    href: "#impact-statistics",
  },
  {
    text: "Pengajar Les Private Bahasa Asing",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private Bahasa Asing",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline Bahasa Asing",
    href: "#pilihan-program-les-private",
  },
  {
    text: "Program Les Private Matrix  ",
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

const LesPrivateBahasaKecamatan = () => {
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKecamatan = await getAllKecamatanBySlug(kecamatanSlug);
        setKecamatan(responseKecamatan.data);

        const getHero = await getHeroData("BAHASA", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKecamatan({
          kecamatan: formatSlugToName(kecamatanSlug),
        });
        setHeroData({
          heading:
            "Les Privat Bahasa Asing di [LOKASI] - Kuasai Bahasa Asing dengan Tutor Profesional",
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug]); // Dependensi hanya kecamatanSlug

  let displayedHeading =
    heroData?.heading ||
    `Les Privat Bahasa Asing di ${nameCountry} - Kuasai Bahasa Asing dengan Tutor Profesional`;

  if (heroData?.heading && nameCountry) {
    displayedHeading = heroData.heading.replace("[LOKASI]", nameCountry);
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com/";
  // Canonical URL untuk halaman kecamatan
  const canonicalUrl = `${baseUrl}/kursus-bahasa-asing-terbaik/kecamatan/${kecamatanSlug}`;

  // Meta tag untuk Les Privat Bahasa Asing & Inggris
  const pageTitle = `🗣️ Les Privat Bahasa Asing & Inggris di Kecamatan ${nameCountry} - Kuasai TOEFL, IELTS & Percakapan | Matrix Tutoring`;
  const descriptionContent = `Tingkatkan kemampuan berbahasa asing Anda bersama tutor profesional Matrix Tutoring di Kecamatan ${nameCountry}. Belajar Bahasa Inggris, Korea, Jepang, Mandarin, Arab, dan lainnya. Fokus percakapan, grammar, TOEFL, IELTS, hingga ujian internasional. Bisa online atau guru datang ke rumah.`;

  // === Open Graph (Facebook & WhatsApp) ===
  const ogTitle = `Les Privat Bahasa Asing & Inggris di Kecamatan ${nameCountry} | Kursus TOEFL, IELTS & Conversation - Matrix Tutoring`;
  const ogDescription = `Matrix Tutoring menghadirkan kursus dan les privat bahasa asing terbaik di Kecamatan ${nameCountry}. Kuasai Bahasa Inggris, Korea, Jepang, Mandarin, dan Arab dengan metode interaktif dan fleksibel.`;

  const twitterTitle = `Les Privat Bahasa Asing Profesional di Kecamatan ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Belajar bahasa Inggris, Korea, Jepang, Mandarin, dan Arab di Kecamatan ${nameCountry} bersama tutor ahli Matrix Tutoring. Fokus percakapan, TOEFL, IELTS, grammar & ujian internasional.`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat Bahasa Asing Inggris ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Bahasa Asing Kecamatan ${nameCountry}`,
    `Les Bahasa Inggris Kecamatan ${nameCountry}`,
    `Les Privat Online Bahasa Kecamatan ${nameCountry}`,
    `Les Privat Offline Bahasa Kecamatan ${nameCountry}`,
    `Program Les Bahasa Asing Kecamatan ${nameCountry}`,
    `Tutor Bahasa Asing Kecamatan ${nameCountry}`,
    `Les Bahasa Jepang Kecamatan ${nameCountry}`,
    `Les Bahasa Mandarin Kecamatan ${nameCountry}`,
    `Les Bahasa Prancis Kecamatan ${nameCountry}`,
    `Les Bahasa Spanyol Kecamatan ${nameCountry}`,
    `Les Bahasa Jerman Kecamatan ${nameCountry}`,
    `Les Bahasa Korea Kecamatan ${nameCountry}`,
    `Les Bahasa Arab Kecamatan ${nameCountry}`,
    `Kursus Bahasa Inggris Kecamatan ${nameCountry}`,
    `Kursus Bahasa Asing Kecamatan ${nameCountry}`,
    `Les Privat Conversation Kecamatan ${nameCountry}`,
    `Bimbingan Belajar Bahasa Asing Kecamatan ${nameCountry}`,
    `Matrix Tutoring Kecamatan ${nameCountry}`,
    `Les Privat Matrix Kecamatan ${nameCountry}`,
    kecamatanSlug.replace(/-/g, " ").toLowerCase(), // Tambahkan slug kecamatan sebagai keyword
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
        <meta property="article:section" content="Les Privat Bahasa Asing" />

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
                        "@id": "${baseUrl}/kursus-bahasa-asing-terbaik",
                        "name": "Les Privat Bahasa Asing"
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
                "description": "Les Privat Bahasa Asing & Inggris terbaik di Kecamatan ${nameCountry}. Kursus Bahasa Inggris, Korea, Jepang, Mandarin, dan Arab. Bimbingan TOEFL, IELTS, dan percakapan dengan tutor profesional. Bisa online atau guru datang ke rumah.",
                "url": "https://lesprivat.bimbelmatrix.com/kursus-bahasa-asing-terbaik/kecamatan/${kecamatanSlug}",
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
                "keywords": "les privat bahasa Inggris Kecamatan ${nameCountry}, kursus TOEFL Kecamatan ${nameCountry}, kursus IELTS Kecamatan ${nameCountry}, les bahasa Korea Kecamatan ${nameCountry}, les bahasa Jepang Kecamatan ${nameCountry}, les Mandarin Kecamatan ${nameCountry}, guru bahasa asing datang ke rumah, kursus bahasa asing online Kecamatan ${nameCountry}, les grammar dan speaking Kecamatan ${nameCountry}, bimbel bahasa Inggris profesional"
                },


                {
                  "@type": "WebPage",
                  "@id": "${canonicalUrl}#webpage",
                  "url": "${canonicalUrl}",
                  "name": "Les Privat Bahasa Asing Kecamatan ${nameCountry} | Matrix Tutoring",
                  "inLanguage": "id-ID",
                  "description": "Matrix Tutoring menghadirkan Les Privat Bahasa Asing (Inggris, Korea, Jepang, Mandarin, dll) terbaik di Kecamatan ${nameCountry}. Program intensif untuk meningkatkan TOEFL, IELTS, atau kemampuan percakapan.",
                  "isPartOf": { "@id": "${baseUrl}" },
                  "about": { "@id": "${canonicalUrl}#organization" },
                  "mainEntity": {
                    "@type": "Service",
                    "name": "Les Privat Bahasa Asing di Kecamatan ${nameCountry}",
                    "provider": { "@id": "${canonicalUrl}#organization" },
                    "serviceType": "Kursus Bahasa Asing",
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
                      "name": "Apakah Matrix Tutoring menyediakan guru privat datang ke rumah di Kecamatan ${nameCountry} untuk kursus Bahasa Asing?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ya, Matrix Tutoring menyediakan guru privat yang dapat datang langsung ke rumah siswa di Kecamatan ${nameCountry} untuk belajar berbagai Bahasa Asing. Jadwal bisa disesuaikan dengan kebutuhan belajar Anda."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Apakah tersedia les privat online untuk Bahasa Asing (misalnya TOEFL/IELTS) di Kecamatan ${nameCountry}?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tentu. Matrix Tutoring menyediakan layanan les privat Bahasa Asing, termasuk persiapan TOEFL dan IELTS, secara online dengan guru profesional dan sistem belajar interaktif."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Bahasa asing apa saja yang diajarkan dalam program Les Privat Bahasa Asing Matrix Tutoring?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Matrix Tutoring melayani les privat untuk Bahasa Inggris, Korea, Jepang, Mandarin, Jerman, Arab, dan lain-lain. Kami juga menyediakan program khusus TOEFL/IELTS."
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
      <ContentLesPrivatBahasa />
      <ProgaramLesPrivatBahasa />
      <ProgaramInsenstifBahasa location={nameCountry} />
      <FlowPembelajaranBahasa />
      <LanguageOptions location={nameCountry} />
      <ProfileMatrixTutoring
        location={nameCountry}
        title={"Bahasa Asing Terbaik" + " di " + nameCountry}
      />
      <TutorLesprivatMatrix />
      <LesprivatKota />

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

export default LesPrivateBahasaKecamatan;
