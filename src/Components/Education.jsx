import React from "react";
import Badges from "./Badges";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-11">
        <Badges>Qualification</Badges>
        <motion.h2
          initial={{ y: 80 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }}
          className="header-2"
        >
          my education
        </motion.h2>
      </div>
      <div className="">
        <motion.div
          initial={{ y: 110 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r">
            <p className="pt-3 text-base font-light w-10 md:w-24">2010-2014</p>
            <span className="absolute w-[5px] h-[5px] top-5 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>

          <div className="pt-3 pl-5 pb-11">
            <p className="text-[var(--primary-color)] text-base font-normal uppercase mb-1">
              bsc
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
              computer science
            </h3>
            <h4 className="mb-5 capitalize text-[var(--resume-text-color)] text-base font-medium">
              south university of bangladesh
            </h4>
            <p className=" paragraph-1 md:w-80">
              Major in UI Design, UX Design, Interaction Design, User Empathy,
              Branding.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 130 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="flex"
        >
          <div className="relative border-r h-auto lg:h-[200px]">
            <p className="pb-0 text-base font-light w-10 md:w-24">2014-2016</p>
            <span className="absolute w-[5px] h-[5px] top-2 -right-[3px] rotate-45 bg-[var(--primary-color)]"></span>
          </div>
          <div className="pb-0 pl-5 ">
            <p className="text-[var(--primary-color)] text-base font-normal uppercase mb-1">
              msc
            </p>
            <h3 className="capitalize mb-3 text-xl font-medium">
              computer science
            </h3>
            <h4 className="mb-5 capitalize text-[var(--resume-text-color)] text-base font-medium">
              defodil university of bangladesh
            </h4>
            <p className=" paragraph-1 my-0 md:w-96">
              Product Design, Information Architecture, Understanding the
              product, Product Analyses, Market Research, Communication.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
