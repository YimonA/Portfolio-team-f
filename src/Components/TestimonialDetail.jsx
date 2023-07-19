import React, { useEffect, useState } from "react";
import Typing from "./Typing";
import Button from "@mui/material/Button";
import { BsPauseFill } from "react-icons/bs";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Badges from "./Badges";
import { motion } from "framer-motion";
import ReactTyped from "react-typed";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const TestimonialDetail = () => {
  const images = [
    {
      id: 1,
      name: "Ryhan",
      Company: "Instragram",
      imgPath:
        "https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testi-author.png",
    },
    {
      id: 2,
      name: "Hasibur",
      Company: "Pinterest",
      imgPath:
        "https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testi-author.png",
    },
    {
      id: 3,
      name: "Ryhan",
      Company: "Instragram",
      imgPath:
        "https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testi-author.png",
    },
    {
      id: 4,
      name: "Hasibur",
      Company: "Pinterest",
      imgPath:
        "https://wordpressriverthemes.com/HTML/itsme/assets/images/testimonials/testi-author.png",
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="basis-1/3 w-full">
      <Badges> Testimonial </Badges>
      <motion.p
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="header-2"
      >
        What My Happy
        <span className=" tracking-wider text-[#DF5646] ">
          <ReactTyped
            strings={[" Clients "]}
            typeSpeed={250}
            showCursor={false}
            loop
            loopCount={Infinity}
          />
        </span>{" "}
        Saying Their Services.
        {/* <Typing bgLight={"bg-[#fafafa]"} bgDark={"bg-[#32324c]"}>
          Clients
        </Typing>*/}
      </motion.p>
      <motion.div
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: false }}
      >
        <p className=" paragraph-1 my-10">
          Really they guy is amazing , he saved my times and properly have
          completed my requirement with great effort. I appreciate to him for
          web &amp; app design, he is good at fit.
        </p>
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <div className=" flex justify-start items-center">
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              className=" basis-1/4"
            >
              {images.map((step, index) => (
                <div key={step.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 50,
                        display: "block",
                        maxWidth: 50,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.name}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <div className=" basis-3/4 flex flex-col items-start ">
              <Paper
                square
                elevation={0}
                sx={{
                  bgcolor:
                    theme.palette.mode === "light" ? "#fafafa" : "#32324c",
                  //bgcolor: "background.default",
                }}
              >
                <p className=" block">{images[activeStep].name}</p>
                <p className=" block">
                  CEO of{" "}
                  <span className="text-[#df5646]">
                    {images[activeStep].Company}
                  </span>
                </p>
              </Paper>
            </div>

            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
              className=""
            >
              <Button className="">
                <BsPauseFill
                  size={"3rem"}
                  color="white"
                  className="rounded-xl bg-[#df5646] z-10"
                />
              </Button>
            </motion.div>
          </div>
          <div className=" mt-3 p-0 inline-block bg-[#32324C]">
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              sx={{
                bgcolor: "background.default",
                p: "0",
              }}
            />
          </div>
        </Box>
      </motion.div>
    </div>
  );
};

export default TestimonialDetail;
