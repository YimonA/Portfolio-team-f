import React, { useState } from "react";
import { MdOutlineWbSunny, MdOutlineNightlight } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Sidebar from "./Sidebar";
//import resume from "../CV/simple_resume.pdf";

const Navbar = ({ ColorModeContext }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const headerStyle = {
    position: "fixed",
    width: "100%",
    zIndex: "1",
    top: "0",
  };
  return (
    <header style={headerStyle} className="nav-header">
      <div className=" container-fluid mx-auto px-5 md:px-12 lg:px-[60px] py[20px] flex justify-between items-center">
        <div className="">
          <a href="#About" className=" mx-5 hover:text-[var(--primary-color)]">
            <h1 className="logo">
              <span className="font-semibold">It's</span> Me
            </h1>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <div className=" mx-[20px] lg:me-[50px] invisible lg:visible">
            <a
              // href={resume}
              // download="Resume"
              className="flex items-center mx-5 text-[0.8rem] font-medium hover:text-[var(--primary-color)]"
            >
              <span className="me-2">Download CV</span>
              <FaDownload />
            </a>
          </div>
          <div className="mx-[10px] lg:me-[50px]">
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <MdOutlineNightlight />
              ) : (
                <MdOutlineWbSunny />
              )}
            </IconButton>
          </div>
          <Sidebar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
