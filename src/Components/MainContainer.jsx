import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Skills from "../Pages/Skills";
import Testimonial from "../Pages/Testimonial";
import Navbar from "./Navbar";
import Weapons from "../Pages/Weapons";
import ContactMe from "../Pages/ContactMe";
import Resume from "../Pages/Resume";
import Portfolio from "../Pages/Portfolio";
// import StayConnected from "../Pages/StayConnected";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;

function MyMain() {
  const { fullpages } = {
    fullpages: [
      {
        component: <About />,
      },
      {
        component: <Services />,
      },
      {
        component: <Skills />,
      },
      {
        component: <Resume />,
      },
      {
        component: <Portfolio />,
      },
      {
        component: <Testimonial />,
      },
      {
        component: <Weapons />,
      },
      {
        component: <ContactMe />,
        // component: <ToggleColorMode />,
      },
    ],
  };

  if (!fullpages.length) {
    return null;
  }
  const anchors = [
    "About",
    "Services",
    "Skills",
    "Resume",
    "Projects",
    "Testimonial",
    "Weapons",
    "ContactMe",
  ];

  return (
    <div className="App">
      <Navbar ColorModeContext={ColorModeContext} />
      <ReactFullpage
        debug
        licenseKey={"YOUR_KEY_HERE"}
        navigation
        anchors={anchors}
        sectionSelector={SECTION_SEL}
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
        }}
        navigationTooltips={anchors}
        // sectionsColor={["#3c3b5a", "#32324c", "#3c3b5a", "#32324c","#3c3b5a"]}
        render={(comp) => (
          <ReactFullpage.Wrapper key={comp.id}>
            {fullpages.map(({ component, i }) => {
              return (
                <div key={i} className={SEL}>
                  {component}
                </div>
              );
            })}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}

const MainContainer = () => {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: {
                  default: "#fff",
                  second: "#d9d9d9",
                },

                text: {
                  primary: "#1d2043",
                  secondary: "#ff4400",
                },
              }
            : {
                background: {
                  default: "#3c3b5a",
                  second: "#32324c",
                },

                text: {
                  primary: "#FAFAFA",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <MyMain />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default MainContainer;
