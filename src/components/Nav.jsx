import React from "react";
import Link from "gatsby-link";

const Nav = ({ siteTitle, sections, onClickHandler }) => {
  return (
    <div className="absolute self-center" style={{ right: '36px' }}>
      <div
        className="flex font-semibold pin-r"
        style={{
          transform: "rotate(-90deg) translateX(50%)",
          transformOrigin: 'right',
          top: `50%`,
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
