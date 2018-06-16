import React from "react";

const Pages = ({ children }) => (
  <div className="w-full overflow-auto flex justify-center">
    <div
      className=""
      style={{
        marginTop: `${90}px`
      }}
    >
      {children()}
    </div>
  </div>
);

export default Pages;
