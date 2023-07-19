import React from "react";
import "../App.css";
import { useTheme } from "@mui/material/styles";

const Typing = ({ children, bgLight, bgDark }) => {
  const theme = useTheme();
  return (
    <span className=" bg-transparent inline relative px-2 text-[#df5646]">
      {children}
      <span
        className={`${
          theme.palette.mode === "light" ? bgLight : bgDark
        } myCursor`}
      >
         
      </span>
    </span>
  );
};

export default Typing;
