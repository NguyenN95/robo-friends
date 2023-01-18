import React from "react";

interface IScorllProps {
  children: JSX.Element;
}

const Scroll: React.FC<IScorllProps> = ({ children }) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
};

export default Scroll;
