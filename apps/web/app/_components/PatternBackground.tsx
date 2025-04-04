import React from "react";

const PatternBackground = () => {
  return (
    <div
      className="fixed w-full h-full opacity-20 z-10"
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, #FF5C8D 0px, #FF5C8D 10px, 
            transparent 10px, transparent 20px, #7DEDFF 20px, #7DEDFF 30px, 
            transparent 30px, transparent 40px, #FFE156 40px, #FFE156 50px, 
            transparent 50px, transparent 60px)`,
        backgroundSize: "170px 170px",
      }}
    />
  );
};

export default PatternBackground;
