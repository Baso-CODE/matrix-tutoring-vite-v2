import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { getAllTestimoniWa } from "../../../../helper/request/getAllTestimoniWa";
import "./TestimoniWaSNBT.css";

const TestimoniWaSNBT = () => {
  const [dataTestimoniWa, setDataTestimoniWa] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllTestimoniWa();
        setDataTestimoniWa(result.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section className="testimoniwa__container">
        <div className="testimoniwa__header">
          <h2 className="testimoniwa__title">Testimoni Siswa</h2>
          <p className="testimoniwa__subtitle">
            Lihat pengalaman siswa Matrix Tutoring selama mengikuti program
            belajar bersama kami.
          </p>
        </div>

        <div className="testimoniwa__slider-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimoniwa__swiper">
            {dataTestimoniWa.map((item, index) => (
              <SwiperSlide key={index}>
                <button
                  type="button"
                  className="testimoniwa__card"
                  onClick={() => setSelectedImage(item.link_image)}
                  aria-label={`Perbesar testimoni ${index + 1}`}>
                  <div className="testimoniwa__image-wrapper">
                    <img
                      loading="lazy"
                      src={item.link_image}
                      alt={`Testimoni ${index + 1}`}
                      className="testimoniwa__image"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/400x500?text=No+Image";
                      }}
                    />

                    <div className="testimoniwa__zoom">
                      <ZoomIn size={20} />
                      <span>Perbesar</span>
                    </div>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {selectedImage && (
        <div
          className="testimoniwa__lightbox"
          onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="testimoniwa__lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Tutup gambar">
            <X size={22} />
          </button>

          <div
            className="testimoniwa__lightbox-content"
            onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Testimoni siswa diperbesar"
              className="testimoniwa__lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimoniWaSNBT;
