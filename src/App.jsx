import { Route, Routes } from "react-router-dom";
import "./App.css";

import AboutUsLesPrivate from "./Components/AboutUsLesPrivate/AboutUsLesPrivate";
import Halamankabupaten from "./Components/HalamanKabupaten/Halamankabupaten";
import Halamankecamatan from "./Components/HalamanKecamatan/Halamankecamatan";
import Halamankota from "./Components/HalamanKota/Halamankota";
import Homepage from "./Home/Homepage";
import LesPrivateSD from "./LesPrivate/LesPrivateSD/LesPrivateSD";

import LesPrivateBahasa from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasa";
import LesPrivateMahasiswa from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswa";
import LesPrivateSBMPTN from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTN";
import LesPrivateSimakUI from "./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUI";
import LesPrivateSMA from "./LesPrivate/LesPrivateSMA/LesPrivateSMA";
import LesPrivateSMP from "./LesPrivate/LesPrivateSMP/LesPrivateSMP";
import LesPrivateTK from "./LesPrivate/LesPrivateTK/LesPrivateTK";

import { useEffect, useState } from "react";
import Floatingcta from "./Components/FloatingCta/Floatingcta";
import Halamankelurahan from "./Components/HalamanKelurahan/HalamanKelurahan";
import Tutor from "./Components/Tutor/Tutor";
import BottomNavigationBar from "./helper/Navbar/BottomNavigationBar/BottomNavigationBar";
import Nav from "./helper/Navbar/Nav/Nav";
import ProgramModal from "./helper/Navbar/ProgramModal/ProgramModal";
import ScrollToTop from "./helper/scrollToTop";
import ScrollToTopButton from "./helper/ScrollToTopButton/ScrollToTopButton";
import { Menus } from "./helper/utils";
import LesPrivateBahasaKabupaten from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKabupaten/LesPrivateBahasaKabupaten";
import LesPrivateBahasaKecamatan from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKecamatan/LesPrivateBahasaKecamatan";
import LesPrivateBahasaKelurahan from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKelurahan/LesPrivateBahasaKelurahan";
import LesPrivateBahasaKota from "./LesPrivate/LesPrivateBahasa/LesPrivateBahasaKota/LesPrivateBahasaKota";

import MatrixFooterV2 from "./Components/MatrixFooterV2/MatrixFooterV2";
import MoreModal from "./Home/MoreModal/MoreModal";
import LesPrivateTKA from "./LesPrivate/LesPrivateAKM/LesPrivateTKA";
import LesPrivateTKAKabupaten from "./LesPrivate/LesPrivateAKM/LesPrivateTKAKabupaten/LesPrivateTKAKabupaten";
import LesPrivateTKAKecamatan from "./LesPrivate/LesPrivateAKM/LesPrivateTKAKecamatan/LesPrivateTKAKecamatan";
import LesPrivateTKAKelurahan from "./LesPrivate/LesPrivateAKM/LesPrivateTKAKelurahan/LesPrivateTKAKelurahan";
import LesPrivateTKAKota from "./LesPrivate/LesPrivateAKM/LesPrivateTKAKota/LesPrivateTKAKota";
import LesPrivateMahasiswaKabupaten from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKabupaten/LesPrivateMahasiswaKabupaten";
import LesPrivateMahasiswaKecamatan from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKecamatan/LesPrivateMahasiswaKecamatan";
import LesPrivateMahasiswaKelurahan from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKelurahan/LesPrivateMahasiswaKelurahan";
import LesPrivateMahasiswaKota from "./LesPrivate/LesPrivateMahasiswa/LesPrivateMahasiswaKota/LesPrivateMahasiswaKota";
import LesPrivateSBMPTNKabupaten from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKabupaten/LesPrivateSBMPTNKabupaten";
import LesPrivateSBMPTNKecamatan from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKecamatan/LesPrivateSBMPTNKecamatan";
import LesPrivateSBMPTNKelurahan from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKelurahan/LesPrivateSBMPTNKelurahan";
import LesPrivateSBMPTNKkota from "./LesPrivate/LesPrivateSBMPTN/LesPrivateSBMPTNKkota/LesPrivateSBMPTNKkota";
import LesPrivateSDKabupaten from "./LesPrivate/LesPrivateSD/LesPrivateSDKabupaten/LesPrivateSDKabupaten";
import LesPrivateSDKecamatan from "./LesPrivate/LesPrivateSD/LesPrivateSDKecamatan/LesPrivateSDKecamatan";
import LesPrivateSDKelurahan from "./LesPrivate/LesPrivateSD/LesPrivateSDKelurahan/LesPrivateSDKelurahan";
import LesPrivateSDKota from "./LesPrivate/LesPrivateSD/LesPrivateSDKota/LesPrivateSDKota";
import LesPrivateSimakUIKabupaten from "./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKabupaten/LesPrivateSimakUIKabupaten";
import LesPrivateSimakUIKecamatan from "./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKecamatan/LesPrivateSimakUIKecamatan";
import LesPrivateSimakUIKota from "./LesPrivate/LesPrivateSimakUI/LesPrivateSimakUIKota/LesPrivateSimakUIKota";
import LesPrivateSMAKabupaten from "./LesPrivate/LesPrivateSMA/LesPrivateSMAKabupaten/LesPrivateSMAKabupaten";
import LesPrivateSMAKecamatan from "./LesPrivate/LesPrivateSMA/LesPrivateSMAKecamatan/LesPrivateSMAKecamatan";
import LesPrivateSMAKelurahan from "./LesPrivate/LesPrivateSMA/LesPrivateSMAKelurahan/LesPrivateSMAKelurahan";
import LesPrivateSMAKota from "./LesPrivate/LesPrivateSMA/LesPrivateSMAKota/LesPrivateSMAKota";
import LesPrivateSMPKabupaten from "./LesPrivate/LesPrivateSMP/LesPrivateSMPKabupaten/LesPrivateSMPKabupaten";
import LesPrivateSMPKecamatan from "./LesPrivate/LesPrivateSMP/LesPrivateSMPKecamatan/LesPrivateSMPKecamatan";
import LesPrivateSMPKelurahan from "./LesPrivate/LesPrivateSMP/LesPrivateSMPKelurahan/LesPrivateSMPKelurahan";
import LesPrivateSMPKota from "./LesPrivate/LesPrivateSMP/LesPrivateSMPKota/LesPrivateSMPKota";
import LesPrivateTKKabupaten from "./LesPrivate/LesPrivateTK/LesPrivateTKKabupaten/LesPrivateTKKabupaten";
import LesPrivateTKKecamatan from "./LesPrivate/LesPrivateTK/LesPrivateTkKecamatan/LesPrivateTkKecamatan";
import LesPrivateTKKelurahan from "./LesPrivate/LesPrivateTK/LesPrivateTkKelurahan/LesPrivateTkKelurahan";
import LesPrivateTKKota from "./LesPrivate/LesPrivateTK/LesPrivateTKKota/LesPrivateTKKota";
import { fetchContactCs } from "./lib/features/contactCsSlice";
import { useAppDispatch } from "./lib/hooks";
import AllBlog from "./pages/Blog/AllBlog/AllBlog";
import BlogDetail from "./pages/Blog/BlogDetail/BlogDetail";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
import Promo from "./pages/Promo/Promo";
import Term from "./pages/Term/Term";
import Testimoni from "./pages/Testimoni/Testimoni";

// const TRACKING_ID = "G-NZRFMBB12N";
// ReactGA.initialize(TRACKING_ID);

const programSubMenuData =
  Menus.find((menu) => menu.name === "Program")?.subMenu || [];

// Pisahkan menu utama dari menu tambahan
const mainNavItems = ["Home", "About Us", "Program"];
const otherMenus = Menus.filter((menu) => !mainNavItems.includes(menu.name));

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchContactCs());
  }, [dispatch]);

  const [showProgramModal, setShowProgramModal] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);

  const handleOpenProgramModal = () => {
    setShowProgramModal(true);
  };

  const handleCloseProgramModal = () => {
    setShowProgramModal(false);
  };

  const handleOpenMoreModal = () => {
    setShowMoreModal(true);
  };

  const handleCloseMoreModal = () => {
    setShowMoreModal(false);
  };

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/blog" element={<AllBlog />}></Route>
          <Route exact path="/blog/:slug" element={<BlogDetail />}></Route>
          {/* Rute dinamis untuk kota */}
          <Route
            exact
            path="/les-privat-di-kota/:kotaSlug"
            element={<Halamankota />}
          />
          {/* Rute dinamis untuk kabupaten */}
          <Route
            exact
            path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug"
            element={<Halamankabupaten />}
          />
          {/* Rute dinamis untuk kecamatan */}
          <Route
            exact
            path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug/:kecamatanSlug"
            element={<Halamankecamatan />}
          />
          {/* Rute dinamis untuk kelurahan */}
          <Route
            exact
            path="/les-privat-di-kota/:kotaSlug/:kabupatenSlug/:kecamatanSlug/:kelurahanSlug"
            element={<Halamankelurahan />}
          />

          <Route exact path="*" element={<Homepage />}></Route>
          {/* Go to Search Kelas */}

          <Route
            exact
            path="/tentang-kami"
            element={<AboutUsLesPrivate />}></Route>

          {/* LES PRIVATE */}
          {/* LES PRIVATE TK */}
          <Route
            exact
            path="/bimbel-les-privat-tk-terbaik"
            element={<LesPrivateTK />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-tk-terbaik/kota/:slug"
            element={<LesPrivateTKKota />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-tk-terbaik/kabupaten/:slug"
            element={<LesPrivateTKKabupaten />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-tk-terbaik/kecamatan/:slug"
            element={<LesPrivateTKKecamatan />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-tk-terbaik/kelurahan/:slug"
            element={<LesPrivateTKKelurahan />}></Route>

          {/* LES PRIVATE SD */}
          <Route
            exact
            path="/bimbel-les-privat-sd-terbaik"
            element={<LesPrivateSD />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-sd-terbaik/kota/:slug"
            element={<LesPrivateSDKota />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-sd-terbaik/kabupaten/:slug"
            element={<LesPrivateSDKabupaten />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-sd-terbaik/kecamatan/:slug"
            element={<LesPrivateSDKecamatan />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-sd-terbaik/kelurahan/:slug"
            element={<LesPrivateSDKelurahan />}></Route>

          {/* LES PRIVATE SMP */}
          <Route
            exact
            path="/bimbel-les-privat-smp-terbaik"
            element={<LesPrivateSMP />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-smp-terbaik/kota/:slug"
            element={<LesPrivateSMPKota />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-smp-terbaik/kabupaten/:slug"
            element={<LesPrivateSMPKabupaten />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-smp-terbaik/kecamatan/:slug"
            element={<LesPrivateSMPKecamatan />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-smp-terbaik/kelurahan/:slug"
            element={<LesPrivateSMPKelurahan />}></Route>

          {/* LES PRIVATE SMA */}
          <Route
            exact
            path="/bimbel-les-privat-sma-terbaik"
            element={<LesPrivateSMA />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-sma-terbaik/kota/:slug"
            element={<LesPrivateSMAKota />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-sma-terbaik/kabupaten/:slug"
            element={<LesPrivateSMAKabupaten />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-sma-terbaik/kecamatan/:slug"
            element={<LesPrivateSMAKecamatan />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-sma-terbaik/kelurahan/:slug"
            element={<LesPrivateSMAKelurahan />}></Route>

          {/* LES PRIVIATE TKA */}
          <Route
            exact
            path="/bimbel-tka-tes-kemampuan-akademik"
            element={<LesPrivateTKA />}></Route>
          <Route
            exact
            path="/bimbel-tka-tes-kemampuan-akademik/kota/:slug"
            element={<LesPrivateTKAKota />}></Route>
          <Route
            exact
            path="/bimbel-tka-tes-kemampuan-akademik/kabupaten/:slug"
            element={<LesPrivateTKAKabupaten />}></Route>
          <Route
            exact
            path="/bimbel-tka-tes-kemampuan-akademik/kecamatan/:slug"
            element={<LesPrivateTKAKecamatan />}></Route>
          <Route
            exact
            path="/bimbel-tka-tes-kemampuan-akademik/kelurahan/:slug"
            element={<LesPrivateTKAKelurahan />}></Route>

          {/* LES PRIVATE MAHASISWA */}
          <Route
            exact
            path="/bimbel-les-privat-mahasiswa-terbaik"
            element={<LesPrivateMahasiswa />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-mahasiswa-terbaik/kota/:slug"
            element={<LesPrivateMahasiswaKota />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-mahasiswa-terbaik/kabupaten/:slug"
            element={<LesPrivateMahasiswaKabupaten />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-mahasiswa-terbaik/kecamatan/:slug"
            element={<LesPrivateMahasiswaKecamatan />}></Route>
          <Route
            exact
            path="/bimbel-les-privat-mahasiswa-terbaik/kelurahan/:slug"
            element={<LesPrivateMahasiswaKelurahan />}></Route>

          {/* LES PRIVATE BAHASA */}
          <Route
            exact
            path="/kursus-bahasa-asing-terbaik"
            element={<LesPrivateBahasa />}></Route>
          <Route
            exact
            path="/kursus-bahasa-asing-terbaik/kota/:slug"
            element={<LesPrivateBahasaKota />}></Route>
          <Route
            exact
            path="/kursus-bahasa-asing-terbaik/kabupaten/:slug"
            element={<LesPrivateBahasaKabupaten />}></Route>
          <Route
            exact
            path="/kursus-bahasa-asing-terbaik/kecamatan/:slug"
            element={<LesPrivateBahasaKecamatan />}></Route>
          <Route
            exact
            path="/kursus-bahasa-asing-terbaik/kelurahan/:slug"
            element={<LesPrivateBahasaKelurahan />}></Route>

          {/* LES PRIVATE SIMAK UI */}
          <Route
            exact
            path="/bimbingan-simak-ui-terbaik"
            element={<LesPrivateSimakUI />}></Route>
          <Route
            exact
            path="/bimbingan-simak-ui-terbaik/kota/:slug"
            element={<LesPrivateSimakUIKota />}></Route>
          <Route
            exact
            path="/bimbingan-simak-ui-terbaik/kabupaten/:slug"
            element={<LesPrivateSimakUIKabupaten />}></Route>
          <Route
            exact
            path="/bimbingan-simak-ui-terbaik/kecamatan/:slug"
            element={<LesPrivateSimakUIKecamatan />}></Route>
          <Route
            exact
            path="/bimbingan-simak-ui-terbaik/kelurahan/:slug"
            element={<LesPrivateSMAKelurahan />}></Route>

          {/* LES PRIVATE SBMPTN */}
          <Route
            exact
            path="/bimbingan-snbt-utbk-terbaik"
            element={<LesPrivateSBMPTN />}></Route>
          <Route
            exact
            path="/bimbingan-snbt-utbk-terbaik/kota/:slug"
            element={<LesPrivateSBMPTNKkota />}></Route>
          <Route
            exact
            path="/bimbingan-snbt-utbk-terbaik/kabupaten/:slug"
            element={<LesPrivateSBMPTNKabupaten />}></Route>
          <Route
            exact
            path="/bimbingan-snbt-utbk-terbaik/kecamatan/:slug"
            element={<LesPrivateSBMPTNKecamatan />}></Route>
          <Route
            exact
            path="/bimbingan-snbt-utbk-terbaik/kelurahan/:slug"
            element={<LesPrivateSBMPTNKelurahan />}></Route>
          <Route exact path="/tutor" element={<Tutor />}></Route>
          <Route exact path="/testimoni" element={<Testimoni />}></Route>
          <Route exact path="/promo" element={<Promo />}></Route>
          <Route exact path="/term" element={<Term />}></Route>
          <Route exact path="/contact-us" element={<ContactUsPage />}></Route>
        </Routes>
      </main>
      {/* <MediaMassaMarquee /> */}
      <BottomNavigationBar
        onProgramClick={handleOpenProgramModal}
        onMoreClick={handleOpenMoreModal}
      />
      <Floatingcta />
      <ScrollToTopButton />
      <MatrixFooterV2 />
      <ProgramModal
        isOpen={showProgramModal}
        onClose={handleCloseProgramModal}
        programSubMenu={programSubMenuData}
      />
      <MoreModal
        isOpen={showMoreModal}
        onClose={handleCloseMoreModal}
        otherMenus={otherMenus}
      />
    </>
  );
}

export default App;
