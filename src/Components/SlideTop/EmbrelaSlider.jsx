import "lazysizes";
import React, { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllSliderHeader2 } from "../../helper/request/getAllSliderHeader2Request";
import { getAllSliderHeader } from "../../helper/request/getAllSliderHeaderRequest";
import { selectContactCsData } from "../../lib/features/contactCsSlice";
import { useAppSelector } from "../../lib/hooks";
import "./EmbrelaSlider.css";

const EmbrelaSlider = ({ location }) => {
  const [sliderHeader, setSliderHeader] = useState([]);
  const [sliderHeader2, setSliderHeader2] = useState([]);

  useEffect(() => {
    fetchSliderHeader();
    fetchSliderHeader_2();
  }, []);

  const fetchSliderHeader = async () => {
    try {
      const response = await getAllSliderHeader();
      setSliderHeader(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSliderHeader_2 = async () => {
    try {
      const response = await getAllSliderHeader2();
      setSliderHeader2(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const contactData = useAppSelector(selectContactCsData);
  const finalUrl = contactData?.link_cta;

  const altText = `Program Bimbel - les privat Online & Guru ke Rumah (TK, SD, SMP, SMA, TKA, Mahasiswa, Bahasa Asing, Simak UI, SBMPTN) di ${
    location ? location : "Indonesia"
  } - Matrix Tutoring`;

  const swiperConfig = {
    modules: [Autoplay],
    loop: true,
    autoplay: { delay: 1800, disableOnInteraction: true },
    slidesPerView: 1,
  };

  return (
    <React.Fragment>
      <div className="container-slider">
        {/* Slider Desktop */}
        <div className="slider-top desktop-only">
          <Swiper {...swiperConfig}>
            {sliderHeader.map((item, index) => (
              <SwiperSlide key={index}>
                <a href={finalUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    data-src={item.url}
                    alt={altText}
                    className="lazyload"
                    loading="eager"
                    width="1000"
                    height="319"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      borderRadius: "12px",
                    }}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider Mobile */}
        <div className="slider-top-2 mobile-only">
          <Swiper {...swiperConfig}>
            {sliderHeader2.map((item, index) => (
              <SwiperSlide key={index}>
                <a href={finalUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    data-src={item.url}
                    alt={altText}
                    className="lazyload"
                    loading="eager"
                    width="1298"
                    height="319"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmbrelaSlider;
