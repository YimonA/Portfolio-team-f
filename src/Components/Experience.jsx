import React from "react";
import Badges from "./Badges";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-11">
        <Badges>Experience</Badges>
        <motion.h2
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="header-2"
        >
          my experience
        </motion.h2>
      </div>
      <div className="">
        <motion.div
          initial={{ y: 110 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r">
            <p className="pt-3 text-base font-light w-10 md:w-24 ">2016-2018</p>
            <span className="absolute w-[5px] h-[5px] top-5 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>

          <div className="pt-3 pl-5 pb-11">
            <p className="text-[var(--behance-color)] text-base font-normal capitalize mb-1">
              behance
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
              unique web design
            </h3>
            <p className=" paragraph-1 md:w-96">
              After finishing my studies, I first concentrated on my work in{" "}
              <a
                href="https://www.behance.net/"
                target="_blank"
                className="text-[var(--behance-color)]"
              >
                {" "}
                Behance{" "}
              </a>
              , here I worked as a web designer for 2 years. It was really a big
              experience for me.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 130 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r h-auto lg:h-[186px]">
            <p className="pb-0 text-base font-light w-10 md:w-24">2014-2016</p>
            <span className="absolute w-[5px] h-[5px] top-2 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>
          <div className="pb-0 pl-5">
            <p className="text-[var(--dribble-color)] text-base font-normal capitalize mb-1">
              dribble
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
              product designer
            </h3>
            <p className=" paragraph-1 my-0 md:w-96">
              After working well for two years at{" "}
              <a
                href="https://dribbble.com/"
                target="_blank"
                className="text-[var(--dribble-color)]"
              >
                {" "}
                dribble{" "}
              </a>
              , I got the opportunity to work in one of the best market dribbles
              in the world, and there I am now working as a podcast designer.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
