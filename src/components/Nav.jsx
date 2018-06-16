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
            className="px-3 text-white text-sm font-bold nav-link-last py-4"
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
