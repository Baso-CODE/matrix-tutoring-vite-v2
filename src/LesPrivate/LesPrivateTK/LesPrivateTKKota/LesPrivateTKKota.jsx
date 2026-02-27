import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import OnlineLesOptions from "../../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import PilihanProgram from "../../../Components/ProgramOptions/PilihanProgram";
import EmbrelaSlider from "../../../Components/SlideTop/EmbrelaSlider";
import TableOfContents from "../../components/TableOfContent";
import LearningFeaturesLesPrivateTk from "../components/LearningFeaturesLesPrivateTk";
import LesPrivateTKHeader from "../components/LesPrivateTKHeader";

import { useParams } from "react-router-dom";
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
import { getAllKotBySlug } from "../../../helper/request/getAllKotaBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import KeunggulanCalistungMatrix from "../components/KeunggulanCalistungMatrix/KeunggulanCalistungMatrix";
import KurikulumLesPrivate from "../components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../components/LesprivatKota/LesprivatKota";
import MainLearningContent from "../components/MainLearningContent/MainLearningContent";
import PelajaranCalistungMatrix from "../components/PelajaranCalistungMatrix/PelajaranCalistungMatrix";
import ProfileMatrixTutoring from "../components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import ProgramLesPrivatCalistungLanjutan from "../components/ProgramLesPrivatCalistungLanjutan/ProgramLesPrivatCalistungLanjutan";
import TutorLesprivatMatrix from "../components/TutorLesprivatMatrix/TutorLesprivatMatrix";

const items = [
  {
    text: "Les Privat TK – Guru Les Privat Calistung",
    href: "#bimbel-les-privat-tk-terbaik",
    subItems: [
      {
        text: "Kegiatan Belajar Masa Taman Kanak-Kanak",
        href: "#kegiatan-belajar-masa-taman-kanak-kanak",
      },
      {
        text: "Kegiatan Belajar Les Privat TK/Paud",
        href: "#kegiatan-belajar-bimbel-les-privat-tk-terbaik-paud",
      },
    ],
  },
  {
    text: "Pengajar Les Private TK/Paud",
    href: "#pengajar-les-private",
  },
  {
    text: "Fitur Program Les Private TK/Paud",
    href: "#fitur-program-les-private",
  },
  {
    text: "Pilihan Program Les Private Online/Offline TK/Paud",
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
const LesPrivateTKKota = () => {
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
  const programName = "TK";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseKota = await getAllKotBySlug(kotaSlug);
        setKota(responseKota.data);

        const getHero = await getHeroData("TK", "kota");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch data:", error);

        setKota({
          kota: formatSlugToName(kotaSlug),
        });
        setHeroData({
          heading: `Les Privat ${programName}, Calistung, dan PAUD Terbaik di [LOKASI] - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`,
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
    displayedHeading = `Les Privat ${programName}, Calistung, dan PAUD Terbaik di ${nameCountry} - Solusi Terbaik untuk Kegiatan Belajar Anak Anda.`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com";

  const canonicalUrl = `${baseUrl}/bimbel-les-privat-tk-terbaik/kota/${kotaSlug}`;

  const pageTitle = `🎓 Les Privat TK di Kota ${nameCountry} - Calistung, PAUD & Bimbel Terbaik | Matrix Tutoring`;
  const descriptionContent = `Tingkatkan kemampuan Calistung & PAUD anak Anda dengan Les Privat TK di Kota ${nameCountry}. ✔️ Guru berpengalaman, ✔️ kurikulum PAUD & interaktif, ✔️ les datang ke rumah atau online. Daftar sekarang dan buat anak siap sekolah!`;

  const ogTitle = `Les Privat TK di Kota ${nameCountry} - Bimbel PAUD & Calistung Profesional | Matrix Tutoring`;
  const ogDescription = `Matrix Tutoring menawarkan Les Privat TK terbaik di Kota ${nameCountry}. Fokus pengembangan Calistung, PAUD, dan minat belajar anak usia dini. Guru profesional & metode interaktif.`;

  const twitterTitle = `Les Privat TK Profesional di Kota ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Bimbel & Les Privat TK di Kota ${nameCountry} oleh guru berpengalaman. Fokus PAUD, Calistung, dan pengembangan minat belajar anak usia dini. Bisa online maupun datang ke rumah. Daftar sekarang!`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat TK Terbaik Kota ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat TK Kota ${nameCountry}`,
    `Guru Calistung Kota ${nameCountry}`,
    `Les PAUD Kota ${nameCountry}`,
    `Les Privat Online TK Kota ${nameCountry}`,
    `Les Privat Taman Kanak-Kanak Kota ${nameCountry}`,
    `Program Belajar TK Kota ${nameCountry}`,
    `Guru Les TK Kota ${nameCountry}`,
    `Les Privat Calistung Kota ${nameCountry}`,
    `Bimbel TK Kota ${nameCountry}`,
    `Bimbingan Belajar PAUD Kota ${nameCountry}`,
    `Tutor TK Berpengalaman Kota ${nameCountry}`,
    `Materi TK Kota ${nameCountry}`,
    `Persiapan SD Kota ${nameCountry}`,
    `Les Privat Prasekolah Kota ${nameCountry}`,
    `Belajar Membaca TK Kota ${nameCountry}`,
    `Belajar Menulis TK Kota ${nameCountry}`,
    `Belajar Berhitung TK Kota ${nameCountry}`,
    `Private Tutor TK Kota ${nameCountry}`,
    `Matrix Tutoring TK Kota ${nameCountry}`,
    `Calistung Private Kota ${nameCountry}`,
    `PAUD Private Kota ${nameCountry}`,
    `Les Privat Anak Usia Dini Kota ${nameCountry}`,
    `Stimulasi Belajar TK Kota ${nameCountry}`,
    kotaSlug.replace(/-/g, " ").toLowerCase(),
  ].filter(Boolean);

  return (
    <div>
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
                        "@id": "${baseUrl}/bimbel-les-privat-tk-terbaik", // URL program utama
                        "name": "Les Privat ${programName}"
                      }
                    },
                    {
                      "@type": "ListItem",
                      "position": "3",
                      "item": {
                        "@id": "${canonicalUrl}", // URL untuk halaman kota ini
                        "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
                      }
                    }
                  ]
                },
                  {
                    "@context": "https://schema.org",
                    "@type": "EducationalOrganization",
                    "name": "Matrix Tutoring",
                    "description": "Les Privat TK & Bimbel PAUD terbaik di Kota ${nameCountry} dengan guru profesional. Fokus pengembangan Calistung, PAUD, dan minat belajar anak usia dini. Bisa datang ke rumah atau online, metode interaktif, jadwal fleksibel.",
                    "url": "https://lesprivat.bimbelmatrix.com/bimbel-les-privat-tk-terbaik/kota/${kotaSlug}",
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
                    "keywords": "les privat TK Kota ${nameCountry}, bimbel PAUD Kota ${nameCountry}, guru datang ke rumah TK, les Calistung, les TK online Kota ${nameCountry}, bimbingan belajar anak TK"
                 }
              ]
            }
          `}
          </script>
        </Helmet>

        <HeroLesPrivate
          location={nameCountry}
          heading={displayedHeading}
          desc={heroData?.description}
          nameCountry={nameCountry}
          images={heroImageSrc}
        />
        <EmbrelaSlider location={nameCountry} />
        <TableOfContents title="Table of Contents" items={items} />
        <LesPrivateTKHeader location={nameCountry} />
        <ProgramLesPrivatCalistungLanjutan />
        <PelajaranCalistungMatrix />
        <KeunggulanCalistungMatrix />
        <ProfileMatrixTutoring
          title={"Calistung TK Terbaik"}
          location={nameCountry}
        />
        <KurikulumLesPrivate />
        <TutorLesprivatMatrix />
        <LesprivatKota />
        <LearningFeaturesLesPrivateTk location={nameCountry} />
        <MainLearningContent location={nameCountry} />

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
        <MasterTeacherV2 location={nameCountry} />
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
    </div>
  );
};

export default LesPrivateTKKota;
