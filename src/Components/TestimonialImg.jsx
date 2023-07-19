import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import TestimonialsDark from "../images/testimonials/testimonial-dark.png";
import TestimonialsLight from "../images/testimonials/testimonial-light.png";
import ShapeOneDark from "../images/testimonials/shape-one-dark.png";
import ShapeTwo from "../images/testimonials/shape-two.png";

const TestimonialImg = () => {
  const theme = useTheme();

  return (
    <div className="h-full w-full basis-1/2 relative flex justify-start items-center py-10 mt-24 md:mt-0">
      <motion.img
        initial={{ scale: 0.3 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        src={ShapeOneDark}
        alt="sharp-one-dark"
        className=" w-[80px] h-[65px] absolute top-20 -left-5 lg:left-0 lg:top-20 xl:top-24 xl:-left-5 2xl:top-40 2xl:-left-5 bg-transparent"
      />
      <motion.img
        initial={{ scale: 0.3, x: -200, y: -100 }}
        whileInView={{ scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        src={ShapeTwo}
        alt="sharp-two"
        className=" w-[150px] h-[150px] absolute -top-6 -right-0 md:-right-28 lg:right-16 lg:top-10 xl:top-6 xl:right-8 2xl:top-12 2xl:right-20  bg-transparent"
      />
      <img
        src={`${
          theme.palette.mode === "dark"
            ? `${TestimonialsDark}`
            : `${TestimonialsLight}`
        }`}
        className=" flex flex-col self-center w-[75%] lg:h-[98%]"
        alt=""
      />
    </div>
  );
};

export default TestimonialImg;
