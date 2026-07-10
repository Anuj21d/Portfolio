import React from "react";
import GridPattern from "./components/ui/GridPattern";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Section/Home";
function App() {
  return (
    <div
      className="
    relative 
    flex flex-col
    min-h-[100dvh]
    overflow-hidden
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

      <Navbar />

      <main className="flex-1 pt-15 lg:pt-20">
        <section
          id="home"
          className="
        min-h-[80dvh]
        z-10
        py-[2px]
      "
        >
          <Home />
        </section>

        <section
          id="about"
          className="
        z-10
      "
        >
          About
        </section>
      </main>
    </div>
  );
}

export default App;
