import React from "react";
import Link from "gatsby-link";

const Nav = ({ siteTitle, sections, onClickHandler }) => {
  return (
    <div
      className="flex font-semibold text-sm fixed pin-r"
      style={{
        transform: "rotate(-90deg) translateY(400%)",
        top: `45%`,
      }}
    >
      {sections.map(section => (
        <Link
          className="pr-2 text-white"
          key={section.id}
          to={`/${section.id}`}
          onClick={() => onClickHandler(section.id)}
        >
          {section.title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
