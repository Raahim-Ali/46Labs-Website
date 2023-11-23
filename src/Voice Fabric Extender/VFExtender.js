import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Footer from "./Footer";
import QuickLinks from "./QuickLinks";
import WhitePaper from "./WhitePaper";
import Header from "../Header/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import "../index.css";
const theme = createTheme({
  typography: {
    fontFamily: "Epilogue",
  },
});

function Page() {
  return (
    <div>
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Card1 />;
          <Card2 />
          <Card3 />
          <Card4 />
          <WhitePaper />
          <QuickLinks />
          <Footer />
        </ThemeProvider>
      </>
    </div>
  );
}

export default Page;
