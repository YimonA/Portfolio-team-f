import React, { useRef } from "react";
import Badges from "./Badges";
import { BiSolidPaperPlane } from "react-icons/bi";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactMeDetail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9ij2blq",
        "template_5c2uz6a",
        form.current,
        "udpJmP_dR3QB5HCKv"
      )
      .then(
        (result) => {
          toast.success("Send Successfully");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className=" w-full basis-1/2 lg:mr-10">
      <Badges> Contact Me </Badges>

      <motion.p
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="header-2"
      >
        Estimate Your Project?
        <br />
        Let Me Know Here.
      </motion.p>
      <form ref={form} onSubmit={sendEmail}>
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className=" flex flex-col gap-7 mt-10"
        >
          <input
            type="text"
            className=" border-b bg-transparent border-[#A3A5A7] focus:border-[#df5646] outline-none h-10 w-full"
            placeholder="What's your name?"
            name="name"
            id=""
            required
          />
          <input
            type="text"
            className=" border-b bg-transparent border-[#A3A5A7] focus:border-[#df5646] outline-none h-10 w-full"
            placeholder="Your email?"
            name="email"
            id=""
            required
          />
          <input
            type="text"
            className=" border-b bg-transparent border-[#A3A5A7] focus:border-[#df5646] outline-none h-10 w-full"
            placeholder="Tell me about your project"
            name="subject"
            id=""
            required
          />
          <button
            className="w-fit my-5 flex self-end	 text-[#df5646]"
            type="submit"
          >
            <BiSolidPaperPlane size={"2rem"} />
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default ContactMeDetail;
