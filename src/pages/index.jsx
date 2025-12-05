import { Header } from "@/components/Header";
import { Introduction } from "@/components/Introduction";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import React from "react";
export const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
