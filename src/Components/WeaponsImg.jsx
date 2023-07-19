import React from "react";
import { motion } from "framer-motion";


const WeaponsImg = () => {
  return (
    <>
      <div className="basis-1/2 w-full py-32 md:ml-20 lg:pl-32 mt-10"
      >
        <div className="flex gap-4 md:gap-10 relative mb-10">
        <motion.img
        initial={{scale:0.6,y:-100}}
        whileInView={{scale:1,y:0,x:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
         src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="" className="w-[63px] h-[63px] md:w-[96px] md:h-[96px] p-2 md:p-5 rounded-xl shadow-2xl absolute left-2 md:-left-16 -top-12 md:-top-20 bg-white" />
        <motion.img
        initial={{scale:0.6,x:100,y:100}}
        whileInView={{scale:1,x:0,y:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
         src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png" alt="" className="w-[63px] h-[63px] md:w-[96px] md:h-[96px] p-2 md:p-5 rounded-xl shadow-2xl -mt-16 md:-mt-24 ml-32 m-16 bg-white" />

        <motion.img
        initial={{scale:0.6,x:-100,y:-100}}
        whileInView={{scale:1,x:0,y:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
         src="https://wordpressriverthemes.com/HTML/itsme/assets/images/weapons/google.png"  className="w-[74px] h-[76px]  md:w-[120px] md:h-[120px] p-2 md:p-5 rounded-xl shadow-2xl absolute top-0 md:-top-5 right-4 md:-right-40 lg:-right-10 2xl:right-20 bg-white" alt="" />

        </div>

        <div className="flex gap-10 relative mb-10">
        <motion.img
        initial={{scale:0.6,x:100,y:-150}}
        whileInView={{scale:1,x:0,y:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
         src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt=""  className="w-[70px] h-[70px] md:w-[108px] md:h-[104px] 
        p-2 md:p-5 rounded-xl shadow-2xl -ml-6 md:-ml-24 bg-white" />

        <motion.img
        initial={{scale:0.1}}
        whileInView={{scale:1}}
        transition={{duration:1}}
        viewport={{once:false}}
         src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="" className="w-[127px] h-[127px] md:w-[192px] md:h-[192px] p-2 md:p-5 rounded-xl shadow-2xl -mt-14 md:-mt-20 bg-white" />

        </div>

        <div className="flex gap-10 relative mb-10">
        <motion.img
        initial={{scale:0.6,x:-100}}
        whileInView={{scale:1,x:0,y:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
         src="https://cdn-icons-png.flaticon.com/128/25/25231.png" alt="" className="w-[63px] h-[63px] md:w-[80px] md:h-[77px] p-2 md:p-5 rounded-xl shadow-2xl absolute top-0 right-52 md:-left-28 bg-white" />


        <motion.img
        initial={{scale:0.6,y:100}}
        whileInView={{scale:1,x:0,y:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
         src="https://cdn-icons-png.flaticon.com/128/4494/4494740.png" alt=""  className="w-[63px] h-[63px] md:w-[90px] md:h-[97px] p-2 md:p-5 rounded-xl shadow-2xl absolute -top-2 left-36 md:left-10 bg-white"  />

        <motion.img
        initial={{scale:0.6,y:-100,opacity:0.1}}
        whileInView={{scale:1,x:0,y:0,opacity:1}}
        transition={{duration:0.6}}
        viewport={{once:false}}
         src="https://wordpressriverthemes.com/HTML/itsme/assets/images/weapons/xd.png"  className="w-[70px] h-[70px] md:w-[117px] md:h-[117px] p-2 md:p-5 rounded-xl shadow-2xl absolute -top-14 md:-top-18 lg:-top-20 right-4 md:-right-40 lg:-right-7 2xl:right-24 bg-white" alt="" />

        </div>
      </div>
    </>
  );
};

export default WeaponsImg;
