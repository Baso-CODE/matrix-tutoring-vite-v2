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
import { getAllKecamatanBySlug } from "../../../helper/request/getAllKecamatanBySlug";
import CTABottomHome from "../../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../../Home/PromoHomepage/PromoHomepage";
import { getHeroData } from "../../../utils/getHeroData";
import HeroLesPrivate from "../../components/HeroLesPrrivate/HeroLesPrivate";
import TableOfContents from "../../components/TableOfContent";
import TestimoniWaSNBT from "../../LesPrivateSBMPTN/components/TestimoniWaSNBT/TestimoniWaSNBT";
import LesprivatKota from "../../LesPrivateTK/components/LesprivatKota/LesprivatKota";
import ProfileMatrixTutoring from "../../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../../LesPrivateTK/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import ImpactStatistics from "../components/ImpactStatistics/ImpactStatistics";
import LesPrivateMahasiswaHeader from "../components/LesPrivateMahasiswaHeader";
import PopularCourses from "../components/PopularCourses/PopularCourses";
import ProgamLesPrivatMahasiswa from "../components/ProgamLesPrivatMahasiswa/ProgamLesPrivatMahasiswa";
import UniversitySuccessFlow from "../components/UniversitySuccessFlow/UniversitySuccessFlow";

const items = [
  {
    text: "Les Privat Mahasiswa",
    href: "#bimbel-les-privat-mahasiswa-terbaik",
    subItems: [
      {
        text: "Pentingnya Les Privat untuk Mahasiswa",
        href: "#pentingnya-bimbel-les-privat-mahasiswa-terbaik",
      },
      {
        text: "Jadwal Fleksibel dan Les Privat Online",
        href: "#jadwal-fleksibel-dan-les-privat-online",
      },
      {
        text: "List les privat datang ke rumah dan les privat online untuk mahasiswa seluruh Indonesia",
        href: "#list-bimbel-les-privat-mahasiswa-terbaik",
      },
    ],
  },
  {
    text: "Solusi Belajar Revolusioner untuk Mahasiswa",
    href: "#university-success-flow",
  },
  {
    text: "Mengapa Matrix Tutoring Pilihan Tepat?",
    href: "#core-university-benefits",
  },
  {
    text: "Apa Kata Mahasiswa Kami?",
    href: "#student-testimonials",
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

const LesPrivateMahasiswaKecamatan = () => {
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

        const getHero = await getHeroData("MAHASISWA", "kecamatan");
        setHeroData(getHero);
      } catch (error) {
        console.error("Failed to fetch kecamatan data:", error);

        setKecamatan({
          kecamatan: formatSlugToName(kecamatanSlug),
        });
        setHeroData({
          heading:
            "Les Privat Mahasiswa di [LOKASI] - Pendampingan Akademis untuk Sukses di Perguruan Tinggi",
          image:
            "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp",
        });
      }
    };

    fetchData();
  }, [kecamatanSlug]);

  // Logika untuk displayedHeading:
  let displayedHeading = heroData?.heading;
  if (displayedHeading && nameCountry) {
    displayedHeading = displayedHeading.replace("[LOKASI]", nameCountry);
  } else if (!displayedHeading) {
    displayedHeading = `Les Privat Mahasiswa di ${nameCountry} - Pendampingan Akademis untuk Sukses di Perguruan Tinggi`;
  }

  const heroImageSrc =
    heroData?.image ||
    "https://lesprivat.bimbelmatrix.com/images/DSIKON_BULANAN.webp";

  const baseUrl = "https://lesprivat.bimbelmatrix.com/";

  // Canonical URL untuk halaman kecamatan
  const canonicalUrl = `${baseUrl}/bimbel-les-privat-mahasiswa-terbaik/kecamatan/${kecamatanSlug}`;
  const pageTitle = `🎓 Les Privat Mahasiswa di Kecamatan ${nameCountry} - Bimbingan Skripsi, Tugas, & Ujian | Matrix Tutoring`;
  const descriptionContent = `Raih IPK tinggi dan lulus cepat dengan les privat mahasiswa di Kecamatan ${nameCountry} bersama Matrix Tutoring. 🧠 Bimbingan tugas kuliah, skripsi, dan persiapan ujian oleh tutor profesional dari berbagai jurusan. Belajar online atau datang ke rumah dengan jadwal fleksibel.`;

  // === Open Graph (Facebook & WhatsApp) ===
  const ogTitle = `Les Privat Mahasiswa di Kecamatan ${nameCountry} | Bimbingan Skripsi & Tugas Kuliah - Matrix Tutoring`;
  const ogDescription = `Matrix Tutoring menyediakan les privat mahasiswa terbaik di Kecamatan ${nameCountry}. Fokus pada bimbingan skripsi, tugas kuliah, dan ujian. Tersedia sistem online dan tutor datang ke rumah.`;

  // === Twitter Meta Tag ===
  const twitterTitle = `Les Privat Mahasiswa Profesional di Kecamatan ${nameCountry} | Matrix Tutoring`;
  const twitterDescription = `Belajar efektif di Kecamatan ${nameCountry} bersama tutor berpengalaman. Les privat mahasiswa untuk semua jurusan: bimbingan skripsi, tugas, dan ujian. Fleksibel & hasil maksimal.`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat Mahasiswa Terbaik Kecamatan ${nameCountry} Matrix Tutoring`;

  const keywords = [
    `Les Privat Mahasiswa Kecamatan ${nameCountry}`,
    `Les Mahasiswa Kecamatan ${nameCountry}`,
    `Bimbingan Mahasiswa Kecamatan ${nameCountry}`,
    `Tutor Mahasiswa Kecamatan ${nameCountry}`,
    `Les Privat Online Mahasiswa Kecamatan ${nameCountry}`,
    `Les Privat Offline Mahasiswa Kecamatan ${nameCountry}`,
    `Program Les Mahasiswa Kecamatan ${nameCountry}`,
    `Les Tugas Akhir Kecamatan ${nameCountry}`,
    `Bimbingan Skripsi Kecamatan ${nameCountry}`,
    `Les Mata Kuliah Kecamatan ${nameCountry}`,
    `Les Persiapan Ujian Mahasiswa Kecamatan ${nameCountry}`,
    `Les Matematika Mahasiswa Kecamatan ${nameCountry}`,
    `Les Fisika Mahasiswa Kecamatan ${nameCountry}`,
    `Les Kimia Mahasiswa Kecamatan ${nameCountry}`,
    `Les Biologi Mahasiswa Kecamatan ${nameCountry}`,
    `Les Ekonomi Mahasiswa Kecamatan ${nameCountry}`,
    `Les Akuntansi Mahasiswa Kecamatan ${nameCountry}`,
    `Les Statistika Mahasiswa Kecamatan ${nameCountry}`,
    `Les Pemrograman Mahasiswa Kecamatan ${nameCountry}`,
    `Les Bahasa Inggris Mahasiswa Kecamatan ${nameCountry}`,
    `Les TOEFL Mahasiswa Kecamatan ${nameCountry}`,
    `Les IELTS Mahasiswa Kecamatan ${nameCountry}`,
    `Matrix Tutoring Mahasiswa Kecamatan ${nameCountry}`,
    `Bimbel Mahasiswa Kecamatan ${nameCountry}`,
    `Kursus Mahasiswa Kecamatan ${nameCountry}`,

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
        <meta property="article:section" content="Les Privat Mahasiswa" />

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
                        "@id": "${baseUrl}/bimbel-les-privat-mahasiswa-terbaik",
                        "name": "Les Privat Mahasiswa"
                      }
                    },
                 
                   
                    {
                      "@type": "ListItem",
                      "position": "5",
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
                "description": "Les Privat Mahasiswa terbaik di Kecamatan ${nameCountry}. Fokus bimbingan skripsi, tugas kuliah, dan ujian untuk semua jurusan. Tutor profesional, metode fleksibel, bisa online atau datang ke rumah.",
                "url": "https://lesprivat.bimbelmatrix.com/bimbel-les-privat-mahasiswa-terbaik/kecamatan/${kecamatanSlug}",
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
                "keywords": "les privat mahasiswa Kecamatan ${nameCountry}, bimbingan skripsi Kecamatan ${nameCountry}, tutor tugas kuliah Kecamatan ${nameCountry}, guru datang ke rumah mahasiswa, les online mahasiswa Kecamatan ${nameCountry}, bimbel mahasiswa semua jurusan, bimbingan tugas akhir Kecamatan ${nameCountry}, belajar skripsi cepat Kecamatan ${nameCountry}"
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
      <LesPrivateMahasiswaHeader location={nameCountry} />
      <ProgamLesPrivatMahasiswa />
      <TestimoniWaSNBT />
      <ProfileMatrixTutoring />
      <TutorLesprivatMatrix />
      <LesprivatKota />
      <UniversitySuccessFlow />
      <PopularCourses />
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

export default LesPrivateMahasiswaKecamatan;
