import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

import RealEstateLight from "../images/RealEstate-Light.png";
import RealEstateDark from "../images/RealEstate-Dark.png";
import RealEstateDashboard from "../images/RealEstate-Dashboard.png";
import GoogleContact from "../images/GoogleContact.png";

const PortfolioCarousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    dotsClass: `slick-dots`,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <motion.div
      initial={{ y: 60 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      viewport={{ once: false }}
      className=""
    >
      <Slider {...settings}>
        <div className="carousel-image  px-5">
          <a
            href="https://real-estate-hazel-one.vercel.app/home"
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(${RealEstateLight})`,
            }}
            target="_blank"
          >
            {/* <div className="absolute bg-[var(--heading-color)] w-[100%] h-[100%] duration-500 opacity-0 hover:opacity-[0.65] inset-0"></div> */}
            <button className="theme-btn">view demo</button>
          </a>
        </div>
        <div className="carousel-image px-5">
          <a
            href="https://real-estate-hazel-one.vercel.app/home"
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(${RealEstateDark})`,
            }}
            target="_blank"
          >
            <button className="theme-btn">view demo</button>
          </a>
        </div>
        <div className="carousel-image px-5">
          <a
            href="https://real-estate-admin-dashboard-teamf.vercel.app/login"
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(${RealEstateDashboard})`,
              backgroundRepeat: "no-repeat",
            }}
            target="_blank"
          >
            <button className="theme-btn">view demo</button>
          </a>
        </div>
        <div className="carousel-image  px-5">
          <a
            href="https://google-contact-team-f.vercel.app/"
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(${GoogleContact})`,
              backgroundRepeat: "no-repeat",
            }}
            target="_blank"
          >
            <button className="theme-btn">view demo</button>
          </a>
        </div>
        <div className="carousel-image px-5">
          <a
            href=""
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(https://wordpressriverthemes.com/HTML/itsme/assets/images/previews/light.png)`,
            }}
            target="_blank"
          >
            <button className="theme-btn">view demo</button>
          </a>
        </div>
        <div className="carousel-image  px-5">
          <a
            href=""
            className="image hover:bg-bottom"
            style={{
              backgroundImage: `url(https://wordpressriverthemes.com/HTML/itsme/assets/images/previews/dark.png)`,
            }}
            target="_blank"
          >
            <button className="theme-btn">view demo</button>
          </a>
        </div>
      </Slider>
    </motion.div>
  );
};

export default PortfolioCarousel;
