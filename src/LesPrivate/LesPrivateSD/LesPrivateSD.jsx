import React from "react";
import { Helmet } from "react-helmet-async";
import AsalSekolahSiswaEdumatrix from "../../Components/AsalSekolahSiswa/AsalSekolahSiswa";
import AccordionFAQ from "../../Components/FAQ/AccordionFAQ";
import FiturProgramNew from "../../Components/FiturProgramNew/FiturProgramNew";
import HowToOrder from "../../Components/HowToOrder/HowToOrder";
import Keunggulan from "../../Components/Keunggulan/Keunggulan";
import MasterTeacherV2 from "../../Components/MasterTeacherV2/MasterTeacherV2";
import MatrixSubjects from "../../Components/MatrixFeatures/MatrixSubjects";
import WhyMatrixFeatures from "../../Components/MatrixFeatures/WhyMatrixFeatures";
import OnlineLesOptions from "../../Components/OnlineLesOption/OnlineLesOption";
import ProgramBelajarLesPrivat from "../../Components/ProgramBelajarLesPrivate/ProgramBelajarLesPrivate";
import ProgramLesPrivatV2 from "../../Components/ProgramLesPrivatNew/ProgramLesPrivatV2 ";
import PilihanProgram from "../../Components/ProgramOptions/PilihanProgram";
import AsalSekolahSiswaMarque from "../../Components/SekolahSiswaMarque/SekolahSiswaMarque";
import EmbrelaSlider from "../../Components/SlideTop/EmbrelaSlider";
import SuccessStoryLesPrivate from "../../Components/SuccesStoryLesPrivate/SuccesStoryLesPrivate";
import TestimoniOrtuSiswa from "../../Components/TestimoniOrtuSiswa/TestimoniOrtuSiswa";
import TestimonialSiswa from "../../Components/TestimonialSiswa/TestimonialSiswa";
import CTABottomHome from "../../Home/CTABottomHome/CTABottomHome";
import PromoHomepage from "../../Home/PromoHomepage/PromoHomepage";
import TableOfContents from "../components/TableOfContent";
import LesPrivateSDHeader from "./components/LesPrivateSDHeader";
import MainSubjectsSD from "./components/MainSubjectsSD/MainSubjectsSD";
import StatistikImageSD from "./components/StatistikImage";
import ProgramLesPrivatSD from "./components/ProgramLesPrivatSD/ProgramLesPrivatSD";
import ProgramSD from "./components/ProgramSD/ProgramSD";
import WhyChooseProgramSD from "./components/WhyChooseProgramSD/WhyChooseProgramSD";
import ProfileMatrixTutoring from "../LesPrivateTK/components/ProfileMatrixTutoring/ProfileMatrixTutoring";
import TutorLesprivatMatrix from "../LesPrivateTK/components/TutorLesprivatMatrix/TutorLesprivatMatrix";
import KurikulumLesPrivate from "../LesPrivateTK/components/KurikulumLesPrivate/KurikulumLesPrivate";
import LesprivatKota from "../LesPrivateTK/components/LesprivatKota/LesprivatKota";
import HeroSD from "./components/HeroSD/HeroSD";

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
const LesPrivateSD = () => {
  const baseUrl = "https://lesprivat.bimbelmatrix.com";
  const canonicalUrl = `${baseUrl}/bimbel-les-privat-sd-terbaik`;

  const programName = "SD";

  // SEO Metadata
  const pageTitle = `📚 Les Privat SD Terbaik dengan Guru Berpengalaman | Matrix Tutoring`;
  const descriptionContent = `Tingkatkan prestasi anak Anda dengan les privat SD. ✔️ Dibimbing guru berpengalaman, ✔️ kurikulum terstruktur, ✔️ metode interaktif, dan ✔️ jadwal fleksibel. Daftar sekarang!`;

  const ogTitle = `Les Privat SD Terbaik dengan Guru Berpengalaman | Matrix Tutoring`;
  const ogDescription = `ingkatkan prestasi anak Anda dengan les privat SD. ✔️ Dibimbing guru berpengalaman, ✔️ kurikulum terstruktur, ✔️ metode interaktif, dan ✔️ jadwal fleksibel. Daftar sekarang!`;
  const twitterTitle = `Les Privat SD Terbaik dengan Guru Berpengalaman | Matrix Tutoring`;
  const twitterDescription = `ingkatkan prestasi anak Anda dengan les privat SD. ✔️ Dibimbing guru berpengalaman, ✔️ kurikulum terstruktur, ✔️ metode interaktif, dan ✔️ jadwal fleksibel. Daftar sekarang!`;

  const ogImage =
    "https://lesprivat.bimbelmatrix.com/images/whatsapp_footer.webp";
  const ogImageAlt = `Les Privat SD Terbaik Matrix Tutoring`;

  const keywords = [
    "Les Privat SD",
    "Les Privat Sekolah Dasar",
    "Guru Privat SD",
    "Guru Les Privat SD",
    "Bimbel SD",
    "Bimbingan Belajar SD",
    "Les Privat Online SD",
    "Les Privat Offline SD",
    "Program Belajar SD",
    "Program Les Sekolah Dasar",
    "Guru Les Calistung SD",
    "Les Calistung SD",
    "Les Online SD",
    "Les Privat Anak SD",
    "Les Privat Matematika SD",
    "Les Privat IPA SD",
    "Les Privat Bahasa Inggris SD",
    "Tutor SD Berpengalaman",
    "Les Privat Mata Pelajaran SD",
    "Matrix Tutoring SD",
    "Bimbel Online SD",
    "Les Privat Jarak Jauh SD",
    "Kursus SD",
    "Pengembangan Minat Belajar SD",
    "Les Baca Tulis Hitung SD",
    "Les Privat Calistung",
    "Les Privat Semua Mata Pelajaran SD",
    "Les Privat Nasional SD",
    "Les Privat Kurikulum Merdeka SD",
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
                        "@id": "${canonicalUrl}",
                        "name": "${pageTitle.replace(/<\/?[^>]+(>|$)/g, "")}"
                      }
                    }
                  ]
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <HeroSD />
      <EmbrelaSlider />

      <TableOfContents title="Table of Contents" items={items} />
      <LesPrivateSDHeader />
      <ProgramLesPrivatSD />
      <ProgramSD />
      <WhyChooseProgramSD />
      <ProfileMatrixTutoring title={"SD Terbaik"} />
      <TutorLesprivatMatrix />
      <KurikulumLesPrivate />
      <LesprivatKota />
      <MainSubjectsSD />
      <section id="program-les-private-matrix-tutoring">
        <ProgramLesPrivatV2 />
      </section>
      <section id="fitur-program-les-private">
        <FiturProgramNew />
      </section>
      <section id="pilihan-program-les-private">
        <PilihanProgram />
      </section>
      <section id="matrix-juga-melayani-les-privat-online">
        <OnlineLesOptions />
      </section>
      <section id="pengajar-les-private">
        <MasterTeacherV2 />
      </section>
      <ProgramBelajarLesPrivat />
      <WhyMatrixFeatures />
      <MatrixSubjects />
      <SuccessStoryLesPrivate />
      <TestimonialSiswa />
      <TestimoniOrtuSiswa />
      <section id="asal-sekolah-siswa-matrix-tutoring-private">
        <AsalSekolahSiswaEdumatrix />
        <AsalSekolahSiswaMarque />
      </section>
      <Keunggulan />

      <HowToOrder />
      <AccordionFAQ />
      <PromoHomepage />
      <CTABottomHome />
    </React.Fragment>
  );
};

export default LesPrivateSD;
