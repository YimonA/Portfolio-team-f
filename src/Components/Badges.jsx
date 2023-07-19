import React from "react";
import { motion } from "framer-motion";

const Badges = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 70 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="flex flex-row gap-3 my-5"
    >
      <div className=" border-b-2 my-auto w-12"></div>
      <span className="bg-[#FBF1E7] text-sm text-red-500 font-medium tracking-wide mr-2 px-4 py-1 capitalize rounded-none ">
        {children}
      </span>
    </motion.div>
  );
};

export default Badges;
