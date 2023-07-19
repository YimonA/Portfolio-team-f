import React from "react";
import { motion } from "framer-motion";

import FooterBottomGirl from "../images/contact/footer-bottom-girl.png";
import FooterBottomShape from "../images/contact/footer-bottom-shape.png";


const StayConnected = () => {
  return (
    <div className="container mx-auto relative mt-20">
      <motion.img
        initial={{ opacity: 0, scale: 0, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        src={FooterBottomGirl}
        alt="footer-bottom-girl"
        className="h-[50%] lg:h-[90%] absolute bottom-0 left-20 lg:left-56 z-10 bg-transparent"
      />
      <div className="w-full h-full flex flex-col justify-between items-center">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className=" flex flex-col justify-center items-center mb-96 md:mb-32"
        >
          <h1 className="font-serif text-2xl mb-5 font-bold">Stay Connected</h1>
          <p className=" mb-2 text-[#A3A5A7]">Bangladesh</p>
          <h3 className="cursor-pointer text-lg font-medium mb-2 hover:text-[#df5646]">
            hello_niharik@gmail.com
          </h3>
          <p className="cursor-pointer hover:text-[#df5646] mb-2">
            (+778) 675-0765
          </p>
          <div className=" flex gap-3 justify-center items-center my-5">
            <button className=" ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
                className="p-2 bg-white w-10 h-10 rounded-full shadow-lg flex self-center"
                alt=""
              />
            </button>
            <button alt="" className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                className="p-2  bg-white w-10 h-10 rounded-full shadow-lg flex self-center"
                alt=""
              />
            </button>
            <button className="">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
                className="p-2 bg-white  w-10 h-10 rounded-full shadow-lg flex self-center"
                alt=""
              />
            </button>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          src={FooterBottomShape}
          className="h-[50px]"
          alt="footer-bottom-shape"
        />
      </div>
    </div>
  );
};

export default StayConnected;
