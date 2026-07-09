import React from "react";
import GridPattern from "./components/ui/GridPattern";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-primary font-main">
      <GridPattern className="-z-10"/>
      <Navbar/>
    </div>
  );
}

export default App;
