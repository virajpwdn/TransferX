import React from "react";
import Hero from "@/components/Hero/Section1/Hero";
import Benefits from "@/components/Hero/Section2/Benefits";
import Video from "@/components/Hero/Section3/Video";
import Features from "@/components/Hero/Section4/Features";
import Upload from "@/components/Hero/Section5/Upload";
import Discord from "@/components/Hero/Section6/Discord";
import Pricing from "@/components/Hero/Section7/Pricing";
import Contact from "@/components/Hero/Section8/Contact";
import Accordian from "@/components/Hero/Section9/Accordian";

const page = () => {
  return <div className="mx-auto max-w-6xl max-xl:px-12">
    <Hero />
    <Benefits />
    <Video />
    <Features />
    <Upload />
    <Discord />
    <Pricing />
    <Contact />
    <Accordian />
  </div>;
};

export default page;
