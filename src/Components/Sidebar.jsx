import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import resume from "../CV/simple_resume.pdf";

const Sidebar = () => {
  const [listOne, setListOne] = useState(false);
  const [listTwo, setListTwo] = useState(false);
  const [listThree, setListThree] = useState(false);
  const [listFour, setListFour] = useState(false);
  const [listFive, setListFive] = useState(false);
  const [listSix, setListSix] = useState(false);
  const [listSeven, setListSeven] = useState(false);
  const [listEight, setListEight] = useState(false);
  const [listNine, setListNine] = useState(false);

  const setListFunc = (functionName) => {
    setListOne(false);
    setListTwo(false);
    setListThree(false);
    setListFour(false);
    setListFive(false);
    setListSix(false);
    setListSeven(false);
    setListEight(false);
    setListNine(false);
    setTimeout(() => {
      functionName(true);
    }, 500);
  };

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box sx={{ width: 400 }} role="hamburger" onClick={handleDrawerClose}>
      <div className="w-full h-screen ">
        <div className="h-[14.1%]">
          <button className="p-10 relative border-none w-full ">
            <span className="hamburger absolute top-9 right-6 md:right-12 lg:right-14 ">
              <span className={`top-bun clicked`}></span>
              <span className={`meat clicked`}></span>
              <span className={`bottom-bun clicked`}></span>
            </span>
          </button>
        </div>
        <div className="py-20 px-20 h-[85%] ">
          <motion.ul
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className=" flex flex-col gap-5"
          >
            <li>
              <button
                onClick={() => setListFunc(setListOne)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listOne ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href="#About"
                  className=" text-lg font-bold text-[var(--menu-text-color)]"
                >
                  About
                  <AnimatePresence>
                    {listOne && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>

            <li>
              <button
                onClick={() => setListFunc(setListTwo)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listTwo ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href="#Services"
                  className="text-lg font-bold text-[var(--menu-text-color)]"
                >
                  Services{" "}
                  <AnimatePresence>
                    {listTwo && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>

            <li>
              <button
                onClick={() => setListFunc(setListThree)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listThree ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href="#Skills"
                  className="text-lg font-bold text-[var(--menu-text-color)]"
                >
                  Skills{" "}
                  <AnimatePresence>
                    {listThree && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>

            <li>
              <button
                onClick={() => setListFunc(setListFour)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listFour ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href="#Resume"
                  className="text-lg font-bold text-[var(--menu-text-color)]"
                >
                  Resume{" "}
                  <AnimatePresence>
                    {listFour && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>

            <li>
              <button
                onClick={() => setListFunc(setListFive)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listFive ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href="#Portfolio"
                  className="text-lg font-bold text-[var(--menu-text-color)]"
                >
                  Projects{" "}
                  <AnimatePresence>
                    {listFive && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>

            <li>
              <button
                onClick={() => setListFunc(setListSix)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listSix ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href="#Testimonial"
                  className="text-lg font-bold text-[var(--menu-text-color)]"
                >
                  Testimonials{" "}
                  <AnimatePresence>
                    {listSix && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>

            <li>
              <button
                onClick={() => setListFunc(setListSeven)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listSeven ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href="#Weapons"
                  className="text-lg font-bold text-[var(--menu-text-color)]"
                >
                  Weapons{" "}
                  <AnimatePresence>
                    {listSeven && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>
            <li>
              <button
                onClick={() => setListFunc(setListEight)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listEight ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href="#ContactMe"
                  className="text-lg font-bold text-[var(--menu-text-color)]"
                >
                  Contact{" "}
                  <AnimatePresence>
                    {listEight && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>

            <li className=" visible lg:hidden">
              <button
                onClick={() => setListFunc(setListNine)}
                className={`px-2 relative hover:bg-[#fcf1e7] ${
                  listNine ? "bg-[#fcf1e7]" : ""
                }`}
              >
                <a
                  href={resume}
                  download="Resume"
                  className="text-lg font-bold text-[var(--menu-text-color)]"
                >
                  Download CV
                  <AnimatePresence>
                    {listNine && (
                      <motion.p
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: "1" }}
                        className="absolute top-[50%] right-0 w-1 h-1 rounded-full bg-[#333] inline-block"
                      ></motion.p>
                    )}
                  </AnimatePresence>
                </a>
              </button>
            </li>
          </motion.ul>
        </div>
        <div className="flex flex-wrap h-[.9%] pt-0 md:pt-[0.5px] lg:pt-0 2xl:pt-[0.5px]">
          <div className=" bg-[var(--heading-color)] h-2 w-1/3 "></div>
          <div className=" bg-[var(--primary-color)] h-2 w-1/3"></div>
          <div className=" bg-[#0055FF] h-2 w-1/3"></div>
        </div>
      </div>
    </Box>
  );

  return (
    <>
      <button
        className="m-0 p-0 right-[50px] border-none"
        onClick={handleDrawerOpen}
      >
        <span className="hamburger">
          <span className={`top-bun unclicked`}></span>
          <span className={`meat unclicked`}></span>
          <span className={`bottom-bun unclicked`}></span>
        </span>
      </button>
      <Drawer anchor="right" open={open} onClose={handleDrawerClose}
      PaperProps={{
        sx: {
          backgroundColor: "#FAFAFA",
          color: "#1D2043",
        },
      }}>
        {list()}
      </Drawer>
    </>
  );
};
export default Sidebar;
