import React from "react";
import ContactMeDetail from "../Components/ContactMeDetail";
import ContactMeImg from "../Components/ContactMeImg";
import StayConnected from "./StayConnected";

const ContactMe = () => {
  return (
    <>
      <div className="container mx-auto mt-32">
        <div className=" h-fit w-[95%] md:w-[80%] mx-auto flex flex-col lg:flex-row justify-center items-center px-5 py-10 lg:px-10 shadow-2xl">
          <ContactMeDetail />
          <ContactMeImg />
        </div>
      </div>
      <StayConnected />
    </>
  );
};

export default ContactMe;
