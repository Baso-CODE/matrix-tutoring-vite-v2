import {
  BookOpenText,
  Users,
  GraduationCap,
  ClipboardCheck,
  Edit3,
  Globe,
  CheckCircle,
  FileText,
  Coffee,
} from "lucide-react"; // Import the necessary icons

export const Menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/tentang-kami",
  },
  {
    name: "Program",
    subMenu: [
      {
        name: "Les Privat TK",
        desc: "Les privat untuk TK",
        icon: BookOpenText,
        link: "/bimbel-les-privat-tk-terbaik",
      },
      {
        name: "Les Privat SD",
        desc: "Les privat untuk SD",
        icon: Users, // Icon untuk SD
        link: "/bimbel-les-privat-sd-terbaik",
      },
      {
        name: "Les Privat SMP",
        desc: "Les privat untuk SMP",
        icon: GraduationCap, // Icon untuk SMP
        link: "/bimbel-les-privat-smp-terbaik",
      },
      {
        name: "Les Privat SMA",
        desc: "Les privat untuk SMA",
        icon: ClipboardCheck, // Icon untuk SMA
        link: "/bimbel-les-privat-sma-terbaik",
      },
      {
        name: "Les Privat TKA",
        desc: "Les privat untuk TKA",
        icon: Edit3, // Icon untuk TKA
        link: "/bimbel-tka-tes-kemampuan-akademik",
      },
      {
        name: "Les Privat Mahasiswa",
        desc: "Les privat untuk Mahasiswa",
        icon: Globe, // Icon untuk Mahasiswa
        link: "/bimbel-les-privat-mahasiswa-terbaik",
      },
      {
        name: "Les Privat Bahasa Asing",
        desc: "Les untuk Bahasa Asing",
        icon: CheckCircle, // Icon untuk Bahasa Asing
        link: "/kursus-bahasa-asing-terbaik",
      },
      {
        name: "Les Privat SIMAK UI",
        desc: "Les Privat untuk SIMAK UI",
        icon: FileText, // Icon untuk SIMAK UI
        link: "/bimbingan-simak-ui-terbaik",
      },
      {
        name: "Les Privat UTBK",
        desc: "Les Privat untuk UTBK",
        icon: Coffee, // Icon untuk SBMPTN
        link: "/bimbingan-snbt-utbk-terbaik",
      },
    ],
    gridCols: 2,
  },

  {
    name: "Testimoni",
    link: "/testimoni",
  },
  {
    name: "Promo",
    link: "/promo",
  },
  {
    name: "Term",
    link: "/term",
  },
  {
    name: "ContactUs",
    link: "/contact-us",
  },
];
