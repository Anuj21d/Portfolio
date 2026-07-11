import React from "react";
import GridPattern from "./components/ui/GridPattern";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Section/Home";
import Experience from "./components/Section/Experience";
import CursorPet from "./components/CreatedAnimation/CursorPet";
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
      <CursorPet />
      <Navbar />

      <div className="fixed bottom-50 z-10 left-0 text-lg text-secondary rotate-90">
        <p>anujwork2410@gmail.com</p>
      </div>

      <main className="flex-1 pt-15 lg:pt-20">
        <section
          id="Home"
          className="
        min-h-[80dvh]
        z-10
        py-[2px]
      "
        >
          <Home />
        </section>

        <section
          id="Experience"
          className="
        z-10
      "
        >
          <Experience />
        </section>
      </main>
    </div>
  );
}

export default App;
