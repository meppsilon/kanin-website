import React from "react";
import Link from "gatsby-link";

const Nav = ({ siteTitle, sections, onClickHandler }) => {
  return (
    <div>
      <div
        className="flex font-semibold fixed pin-r"
        style={{
          transform: "rotate(-90deg) translateX(50%)",
          transformOrigin: 'right',
          top: `50%`,
          right: '36px',
        }}
      >
        {sections.map(section => (
          <Link
            className="pr-5 text-white text-sm font-bold nav-link-last"
            key={section.id}
            to={`/${section.id}`}
          >
            {section.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
