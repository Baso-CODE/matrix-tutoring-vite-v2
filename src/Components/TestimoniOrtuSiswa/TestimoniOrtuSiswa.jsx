import { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllTestimoniSiswaOrangTua } from "../../helper/request/getAllTestimoniSiswaOrangTua";
import TestimoniCardOrtuSiswa from "./TestimoniCardOrtuSiswa";
import "./TestimoniOrtuSiswa.css";

const TestimoniOrtuSiswa = ({ location }) => {
  const [dataTestimoniOrangTua, setDataTestimoniOrtu] = useState([]);

  useEffect(() => {
    const fetchDataOrangTua = async () => {
      try {
        const response = await getAllTestimoniSiswaOrangTua();
        setDataTestimoniOrtu(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchDataOrangTua();
  }, []);

  return (
    <section className="container-all">
      <div className="testimonial-slider-ortu-siswa-container">
        <h2 className="title-testimonial-orang-tua-siswa">
          Testimoni Orang Tua
        </h2>
        <p className="success-story-description">
          Kepuasan orang tua adalah prioritas kami. Simak transformasi yang
          dirasakan oleh siswa kami, diceritakan langsung dari sudut pandang
          orang tua. Temukan bagaimana dukungan dan sistem belajar kami telah
          membantu anak mereka mencapai potensi terbaiknya.
        </p>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {dataTestimoniOrangTua.map((data, index) => (
            <SwiperSlide key={index}>
              <TestimoniCardOrtuSiswa data={data} location={location} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimoniOrtuSiswa;
