import React from "react";
import GridPattern from "./components/ui/GridPattern";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Section/Home";
import Experience from "./components/Section/Experience";
import CursorPet from "./components/CreatedAnimation/CursorPet";
import Projects from "./components/Section/Projects";
import Contact from "./components/Section/Contact";
function App() {
  return (
    <div
      className="
  relative
  flex
  flex-col
  min-h-[100dvh]
  bg-primary
  font-main
"
    >
      <GridPattern
        className="
          absolute inset-0
          z-0
        "
      />
      <CursorPet />
      <Navbar />

      <div className="hidden lg:block fixed bottom-50 z-10 left-0 text-lg text-secondary rotate-90">
        <p>anujwork2410@gmail.com</p>
      </div>

      <main className="flex-1 pt-15 lg:pt-30">
        <section
          id="Home"
          className="
        min-h-[80dvh]
        z-10
        py-[2px]
        scroll-mt-30
      "
        >
          <Home />
        </section>

        <section
          id="Experience"
          className="
        scroll-mt-10 lg:scroll-mt-24
      "
        >
          <Experience />
        </section>

        <section id="Projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="Contact" className="min-h-[80vh] scroll-mt-28">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
