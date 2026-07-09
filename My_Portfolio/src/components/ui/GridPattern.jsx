import React from "react";

const GridPattern = () => {
  return (
    <div
      className="
        absolute left-0 top-0
        w-[70vw]
        h-screen
        overflow-hidden
        opacity-50

        [mask-image:linear-gradient(to_right,black_60%,transparent_100%)]
        [-webkit-mask-image:linear-gradient(to_right,black_60%,transparent_100%)]
      "
    >
      <div
        className="
          grid
          grid-cols-[repeat(20,60px)]
          grid-rows-[repeat(20,60px)]
        "
      >
        {Array.from({ length: 400 }).map((_, index) => (
          <div
            key={index}
            className="
              w-[60px]
              h-[60px]
              border
              border-[#E46857]/40
              hover:bg-[#E46857]/80
              transition-colors
              duration-300
            "
          />
        ))}
      </div>
    </div>
  );
};

export default GridPattern;