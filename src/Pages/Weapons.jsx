import React from "react";
import WeaponsDetail from "../Components/WeaponsDetail";
import WeaponsImg from "../Components/WeaponsImg";

const Weapons = () => {
  return (
    <>
      <div className="container mx-auto md:h-screen flex flex-col lg:flex-row justify-center items-center px-10 py-10 lg:px-32 mt-24 md:mt-0">
        <WeaponsDetail />
        <WeaponsImg />
      </div>
    </>
  );
};

export default Weapons;
