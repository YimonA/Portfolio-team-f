import React from "react";
import Badges from "../Components/Badges";
import { MdWeb } from "react-icons/md";
import { DiResponsive } from "react-icons/di";
import { GoVersions, GoTools } from "react-icons/go";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

import ServicesDark from "../images/services/services-dark.png";
import ServicesLight from "../images/services/services-light.png";
import ShapeOneDark from "../images/services/shape-one-dark.png";
import ShapeTwoDark from "../images/services/shape-two-dark.png";

const Services = () => {
  const theme = useTheme();
  return (
    <>
      <div className=" flex justify-center items-center h-screen w-full md:max-w-3xl lg:max-w-screen-2xl px-3 md:px-4 lg:px-14 mx-auto">
        <div className=" container">
          <div className="flex flex-col lg:flex-row items-center ">
            <div className=" basis-7/12 w-full  ">
              <Badges>Services</Badges>
              <div className=" relative max-w-xl mt-16">
                <motion.div
                  initial={{ y: 80 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: false }}
                  className=" absolute -top-5 left-48 md:top-3 md:left-96  "
                >
                  <img
                    src={ShapeTwoDark}
                    alt="sharp-two-dark"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 80 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: false }}
                  className=" absolute top-16 md:left-2"
                >
                  <img
                    src={ShapeOneDark}
                    alt="sharp-one-dark"
                  />
                </motion.div>
                <div className="  ">
                <img
                  src={`${
                    theme.palette.mode === "dark"
                      ? `${ServicesDark}`
                      : `${ServicesLight}`
                  }`}
                  alt="services"
                />
                </div>
              </div>
            </div>
            <div className=" basis-5/12  ">
              <motion.h1
                initial={{ y: 80 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className=" mb-7 text-3xl md:text-4xl font-bold font-serif leading-loose"
              >
                What{" "}
                <b className="text-[#DF5646]">
                  <ReactTyped
                    strings={["Services"]}
                    typeSpeed={100}
                    showCursor={false}
                    loop
                    loopCount={3}
                  />
                </b>{" "}
                I Provide To My Clients In Here.
              </motion.h1>
              <motion.p
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className=" tracking-wider  my-3 paragraph-1 leading-relaxed"
              >
                I always want to be able to meet the goals of my clients, <br />{" "}
                I value my services as a developer through my work. <br /> You
                may like my <span className="text-[#DF5646]">services</span>.
              </motion.p>
              <motion.div
                initial={{ y: 120 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className="flex flex-col lg:flex-row justify-start lg:gap-14 w-full mt-10 leading-relaxed"
              >
                <div className=" flex flex-col ">
                  <div className="flex flex-row gap-1 my-3">
                    <button className="text-base">
                      <MdWeb className=" w-10 h-10  cursor-pointer me-2  " />
                    </button>
                    <span className=" self-center text-xl font-sans font-medium ">
                      Web Design
                    </span>
                  </div>
                  <div className="flex flex-row gap-1 my-3">
                    <button className="text-base">
                      <DiResponsive className=" w-10 h-10 cursor-pointer me-2" />
                    </button>
                    <span className=" self-center text-xl font-sans font-medium ">
                      Responsive Design
                    </span>
                  </div>
                </div>
                <div className=" flex flex-col">
                  <div className="flex flex-row gap-1 my-3">
                    <button className="text-base">
                      <GoVersions className=" w-7 h-10  cursor-pointer me-2" />
                    </button>
                    <span className=" self-center text-xl font-sans font-medium ">
                      Version Controls
                    </span>
                  </div>
                  <div className="flex flex-row gap-1 my-3">
                    <button className="text-base">
                      <GoTools className=" w-7 h-10  cursor-pointer me-2 " />
                    </button>
                    <span className=" self-center text-xl font-sans font-medium ">
                      Maintenance
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
