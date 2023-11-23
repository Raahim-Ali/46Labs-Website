import React from "react";
import Header from "../Header/Header";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import DemoCard from "./DemoCard";
import OrchestratorsCard from "./OrchestratorsCard";
import Card6 from "./Card6";
import Card7 from "./Card7";
import Card8 from "./Card8";
import QuickLinks from "../Voice Fabric Extender/QuickLinks";
import Footer from "../Voice Fabric Extender/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <DemoCard />
      <OrchestratorsCard />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <QuickLinks />
      <Footer />
    </div>
  );
}

export default Home;
