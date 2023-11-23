import React from "react";
import Header from "../Header/Header";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import QuickLinks from "../Voice Fabric Extender/QuickLinks";
import Footer from "../Voice Fabric Extender/Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import "../index.css";
const theme = createTheme({
  typography: {
    fontFamily: "Epilogue",
  },
});

function NetworkOrchestrator() {
  return (
    <div>
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
          <QuickLinks />
          <Footer />
        </ThemeProvider>
      </>
    </div>
  );
}

export default NetworkOrchestrator;
