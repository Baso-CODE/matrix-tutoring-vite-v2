import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// ✅ Komponen layout — tidak di-lazy (selalu tampil)
import Floatingcta from "./Components/FloatingCta/Floatingcta";
import MatrixFooterV2 from "./Components/MatrixFooterV2/MatrixFooterV2";
import BottomNavigationBar from "./helper/Navbar/BottomNavigationBar/BottomNavigationBar";
import Nav from "./helper/Navbar/Nav/Nav";
import ProgramModal from "./helper/Navbar/ProgramModal/ProgramModal";
import ScrollToTop from "./helper/scrollToTop";
import ScrollToTopButton from "./helper/ScrollToTopButton/ScrollToTopButton";
import { Menus } from "./helper/utils";
import MoreModal from "./Home/MoreModal/MoreModal";
import { fetchContactCs } from "./lib/features/contactCsSlice";
import { useAppDispatch } from "./lib/hooks";

// ✅ Semua halaman — lazy load
const Homepage = lazy(() => import("./Home/Homepage"));
const AllBlog = lazy(() => import("./pages/Blog/AllBlog/AllBlog"));
const BlogDetail = lazy(() => import("./pages/Blog/BlogDetail/BlogDetail"));
const AboutUsLesPrivate = lazy(
  () => import("./Components/AboutUsLesPrivate/AboutUsLesPrivate"),
);
const Tutor = lazy(() => import("./Components/Tutor/Tutor"));
const Testimoni = lazy(() => import("./pages/Testimoni/Testimoni"));
const Promo = lazy(() => import("./pages/Promo/Promo"));
const Term = lazy(() => import("./pages/Term/Term"));
const ContactUsPage = lazy(() => import("./pages/ContactUs/ContactUsPage"));

// Halaman Kota/Kecamatan
const Halamankota = lazy(() => import("./Components/HalamanKota/Halamankota"));
const Halamankabupaten = lazy(
  () => import("./Components/HalamanKabupaten/Halamankabupaten"),
);
const Halamankecamatan = lazy(
  () => import("./Components/HalamanKecamatan/Halamankecamatan"),
);
const Halamankelurahan = lazy(
  () => import("./Components/HalamanKelurahan/HalamanKelurahan"),
);

// TK
const LesPrivateTK = lazy(
  () => import("./LesPrivate/LesPrivateTK/LesPrivateTK"),
);
const LesPrivateTKKota = lazy(
  () => import("./LesPrivate/LesPrivateTK/LesPrivateTKKota/LesPrivateTKKota"),
);
const LesPrivateTKKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateTK/LesPrivateTKKabupaten/LesPrivateTKKabupaten"),
);
const LesPrivateTKKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateTK/LesPrivateTkKecamatan/LesPrivateTkKecamatan"),
);
const LesPrivateTKKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateTK/LesPrivateTkKelurahan/LesPrivateTkKelurahan"),
);

// SD
const LesPrivateSD = lazy(
  () => import("./LesPrivate/LesPrivateSD/LesPrivateSD"),
);
const LesPrivateSDKota = lazy(
  () => import("./LesPrivate/LesPrivateSD/LesPrivateSDKota/LesPrivateSDKota"),
);
const LesPrivateSDKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSD/LesPrivateSDKabupaten/LesPrivateSDKabupaten"),
);
const LesPrivateSDKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSD/LesPrivateSDKecamatan/LesPrivateSDKecamatan"),
);
const LesPrivateSDKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSD/LesPrivateSDKelurahan/LesPrivateSDKelurahan"),
);

// SMP
const LesPrivateSMP = lazy(
  () => import("./LesPrivate/LesPrivateSMP/LesPrivateSMP"),
);
const LesPrivateSMPKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMP/LesPrivateSMPKota/LesPrivateSMPKota"),
);
const LesPrivateSMPKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMP/LesPrivateSMPKabupaten/LesPrivateSMPKabupaten"),
);
const LesPrivateSMPKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMP/LesPrivateSMPKecamatan/LesPrivateSMPKecamatan"),
);
const LesPrivateSMPKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMP/LesPrivateSMPKelurahan/LesPrivateSMPKelurahan"),
);

// SMA
const LesPrivateSMA = lazy(
  () => import("./LesPrivate/LesPrivateSMA/LesPrivateSMA"),
);
const LesPrivateSMAKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMA/LesPrivateSMAKota/LesPrivateSMAKota"),
);
const LesPrivateSMAKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMA/LesPrivateSMAKabupaten/LesPrivateSMAKabupaten"),
);
const LesPrivateSMAKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMA/LesPrivateSMAKecamatan/LesPrivateSMAKecamatan"),
);
const LesPrivateSMAKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSMA/LesPrivateSMAKelurahan/LesPrivateSMAKelurahan"),
);

// TKA
const LesPrivateTKA = lazy(
  () => import("./LesPrivate/LesPrivateAKM/LesPrivateTKA"),
);
const LesPrivateTKAKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateAKM/LesPrivateTKAKota/LesPrivateTKAKota"),
);
const LesPrivateTKAKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateAKM/LesPrivateTKAKabupaten/LesPrivateTKAKabupaten"),
);
const LesPrivateTKAKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateAKM/LesPrivateTKAKecamatan/LesPrivateTKAKecamatan"),
);
const LesPrivateTKAKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateAKM/LesPrivateTKAKelurahan/LesPrivateTKAKelurahan"),
);

// Mahasiswa
const LesPrivateMahasiswa = lazy(
  () => import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswa"),
);
const LesPrivateMahasiswaKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKota/LesPrivateMahasiswaKota"),
);
const LesPrivateMahasiswaKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKabupaten/LesPrivateMahasiswaKabupaten"),
);
const LesPrivateMahasiswaKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKecamatan/LesPrivateMahasiswaKecamatan"),
);
const LesPrivateMahasiswaKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKelurahan/LesPrivateMahasiswaKelurahan"),
);

// Bahasa
const LesPrivateBahasa = lazy(
  () => import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasa"),
);
const LesPrivateBahasaKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKota/LesPrivateBahasaKota"),
);
const LesPrivateBahasaKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKabupaten/LesPrivateBahasaKabupaten"),
);
const LesPrivateBahasaKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKecamatan/LesPrivateBahasaKecamatan"),
);
const LesPrivateBahasaKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKelurahan/LesPrivateBahasaKelurahan"),
);

// Simak UI
const LesPrivateSimakUI = lazy(
  () => import("./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUI"),
);
const LesPrivateSimakUIKota = lazy(
  () =>
    import("./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKota/LesPrivateSimakUIKota"),
);
const LesPrivateSimakUIKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKabupaten/LesPrivateSimakUIKabupaten"),
);
const LesPrivateSimakUIKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKecamatan/LesPrivateSimakUIKecamatan"),
);

// SBMPTN / SNBT
const LesPrivateSBMPTN = lazy(
  () => import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTN"),
);
const LesPrivateSBMPTNKkota = lazy(
  () =>
    import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKkota/LesPrivateSBMPTNKkota"),
);
const LesPrivateSBMPTNKabupaten = lazy(
  () =>
    import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKabupaten/LesPrivateSBMPTNKabupaten"),
);
const LesPrivateSBMPTNKecamatan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKecamatan/LesPrivateSBMPTNKecamatan"),
);
const LesPrivateSBMPTNKelurahan = lazy(
  () =>
    import("./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKelurahan/LesPrivateSBMPTNKelurahan"),
);

const programSubMenuData =
  Menus.find((menu) => menu.name === "Program")?.subMenu || [];
const mainNavItems = ["Home", "About Us", "Program"];
const otherMenus = Menus.filter((menu) => !mainNavItems.includes(menu.name));

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContactCs());
  }, [dispatch]);

  const [showProgramModal, setShowProgramModal] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<AllBlog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/tentang-kami" element={<AboutUsLesPrivate />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/testimoni" element={<Testimoni />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/term" element={<Term />} />
            <Route path="/contact-us" element={<ContactUsPage />} />

            {/* Kota / Wilayah */}
            <Route
              path="/les-privat-di-kota/:kotaSlug"
              element={<Halamankota />}
            />
            <Route
              path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug"
              element={<Halamankabupaten />}
            />
            <Route
              path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
              element={<Halamankecamatan />}
            />
            <Route
              path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
              element={<Halamankelurahan />}
            />

            {/* TK */}
            <Route
              path="/bimbel-les-privat-tk-terbaik"
              element={<LesPrivateTK />}
            />
            <Route
              path="/bimbel-les-privat-tk-terbaik/kota/:slug"
              element={<LesPrivateTKKota />}
            />
            <Route
              path="/bimbel-les-privat-tk-terbaik/kabupaten/:slug"
              element={<LesPrivateTKKabupaten />}
            />
            <Route
              path="/bimbel-les-privat-tk-terbaik/kecamatan/:slug"
              element={<LesPrivateTKKecamatan />}
            />
            <Route
              path="/bimbel-les-privat-tk-terbaik/kelurahan/:slug"
              element={<LesPrivateTKKelurahan />}
            />

            {/* SD */}
            <Route
              path="/bimbel-les-privat-sd-terbaik"
              element={<LesPrivateSD />}
            />
            <Route
              path="/bimbel-les-privat-sd-terbaik/kota/:slug"
              element={<LesPrivateSDKota />}
            />
            <Route
              path="/bimbel-les-privat-sd-terbaik/kabupaten/:slug"
              element={<LesPrivateSDKabupaten />}
            />
            <Route
              path="/bimbel-les-privat-sd-terbaik/kecamatan/:slug"
              element={<LesPrivateSDKecamatan />}
            />
            <Route
              path="/bimbel-les-privat-sd-terbaik/kelurahan/:slug"
              element={<LesPrivateSDKelurahan />}
            />

            {/* SMP */}
            <Route
              path="/bimbel-les-privat-smp-terbaik"
              element={<LesPrivateSMP />}
            />
            <Route
              path="/bimbel-les-privat-smp-terbaik/kota/:slug"
              element={<LesPrivateSMPKota />}
            />
            <Route
              path="/bimbel-les-privat-smp-terbaik/kabupaten/:slug"
              element={<LesPrivateSMPKabupaten />}
            />
            <Route
              path="/bimbel-les-privat-smp-terbaik/kecamatan/:slug"
              element={<LesPrivateSMPKecamatan />}
            />
            <Route
              path="/bimbel-les-privat-smp-terbaik/kelurahan/:slug"
              element={<LesPrivateSMPKelurahan />}
            />

            {/* SMA */}
            <Route
              path="/bimbel-les-privat-sma-terbaik"
              element={<LesPrivateSMA />}
            />
            <Route
              path="/bimbel-les-privat-sma-terbaik/kota/:slug"
              element={<LesPrivateSMAKota />}
            />
            <Route
              path="/bimbel-les-privat-sma-terbaik/kabupaten/:slug"
              element={<LesPrivateSMAKabupaten />}
            />
            <Route
              path="/bimbel-les-privat-sma-terbaik/kecamatan/:slug"
              element={<LesPrivateSMAKecamatan />}
            />
            <Route
              path="/bimbel-les-privat-sma-terbaik/kelurahan/:slug"
              element={<LesPrivateSMAKelurahan />}
            />

            {/* TKA */}
            <Route
              path="/bimbel-tka-tes-kemampuan-akademik"
              element={<LesPrivateTKA />}
            />
            <Route
              path="/bimbel-tka-tes-kemampuan-akademik/kota/:slug"
              element={<LesPrivateTKAKota />}
            />
            <Route
              path="/bimbel-tka-tes-kemampuan-akademik/kabupaten/:slug"
              element={<LesPrivateTKAKabupaten />}
            />
            <Route
              path="/bimbel-tka-tes-kemampuan-akademik/kecamatan/:slug"
              element={<LesPrivateTKAKecamatan />}
            />
            <Route
              path="/bimbel-tka-tes-kemampuan-akademik/kelurahan/:slug"
              element={<LesPrivateTKAKelurahan />}
            />

            {/* Mahasiswa */}
            <Route
              path="/bimbel-les-privat-mahasiswa-terbaik"
              element={<LesPrivateMahasiswa />}
            />
            <Route
              path="/bimbel-les-privat-mahasiswa-terbaik/kota/:slug"
              element={<LesPrivateMahasiswaKota />}
            />
            <Route
              path="/bimbel-les-privat-mahasiswa-terbaik/kabupaten/:slug"
              element={<LesPrivateMahasiswaKabupaten />}
            />
            <Route
              path="/bimbel-les-privat-mahasiswa-terbaik/kecamatan/:slug"
              element={<LesPrivateMahasiswaKecamatan />}
            />
            <Route
              path="/bimbel-les-privat-mahasiswa-terbaik/kelurahan/:slug"
              element={<LesPrivateMahasiswaKelurahan />}
            />

            {/* Bahasa */}
            <Route
              path="/kursus-bahasa-asing-terbaik"
              element={<LesPrivateBahasa />}
            />
            <Route
              path="/kursus-bahasa-asing-terbaik/kota/:slug"
              element={<LesPrivateBahasaKota />}
            />
            <Route
              path="/kursus-bahasa-asing-terbaik/kabupaten/:slug"
              element={<LesPrivateBahasaKabupaten />}
            />
            <Route
              path="/kursus-bahasa-asing-terbaik/kecamatan/:slug"
              element={<LesPrivateBahasaKecamatan />}
            />
            <Route
              path="/kursus-bahasa-asing-terbaik/kelurahan/:slug"
              element={<LesPrivateBahasaKelurahan />}
            />

            {/* Simak UI */}
            <Route
              path="/bimbingan-simak-ui-terbaik"
              element={<LesPrivateSimakUI />}
            />
            <Route
              path="/bimbingan-simak-ui-terbaik/kota/:slug"
              element={<LesPrivateSimakUIKota />}
            />
            <Route
              path="/bimbingan-simak-ui-terbaik/kabupaten/:slug"
              element={<LesPrivateSimakUIKabupaten />}
            />
            <Route
              path="/bimbingan-simak-ui-terbaik/kecamatan/:slug"
              element={<LesPrivateSimakUIKecamatan />}
            />
            <Route
              path="/bimbingan-simak-ui-terbaik/kelurahan/:slug"
              element={<LesPrivateSMAKelurahan />}
            />

            {/* SBMPTN / SNBT */}
            <Route
              path="/bimbingan-snbt-utbk-terbaik"
              element={<LesPrivateSBMPTN />}
            />
            <Route
              path="/bimbingan-snbt-utbk-terbaik/kota/:slug"
              element={<LesPrivateSBMPTNKkota />}
            />
            <Route
              path="/bimbingan-snbt-utbk-terbaik/kabupaten/:slug"
              element={<LesPrivateSBMPTNKabupaten />}
            />
            <Route
              path="/bimbingan-snbt-utbk-terbaik/kecamatan/:slug"
              element={<LesPrivateSBMPTNKecamatan />}
            />
            <Route
              path="/bimbingan-snbt-utbk-terbaik/kelurahan/:slug"
              element={<LesPrivateSBMPTNKelurahan />}
            />

            <Route path="*" element={<Homepage />} />
          </Routes>
        </Suspense>
      </main>

      <BottomNavigationBar
        onProgramClick={() => setShowProgramModal(true)}
        onMoreClick={() => setShowMoreModal(true)}
      />
      <Floatingcta />
      <ScrollToTopButton />
      <MatrixFooterV2 />
      <ProgramModal
        isOpen={showProgramModal}
        onClose={() => setShowProgramModal(false)}
        programSubMenu={programSubMenuData}
      />
      <MoreModal
        isOpen={showMoreModal}
        onClose={() => setShowMoreModal(false)}
        otherMenus={otherMenus}
      />
    </>
  );
}

export default App;
