import React from "react";
import Link from "gatsby-link";

const Nav = ({ siteTitle, sections, onClickHandler, url }) => {
  return (
    <div
      className="flex font-semibold"
      style={{
        transform: "rotate(-90deg) translateX(50%)",
        transformOrigin: "right",
      }}
    >
      {sections.map(section => (
        <Link
          className="px-3 text-white text-sm font-bold nav-link-last py-4 ux-hover ux-click"
          style={url === section.title.toLowerCase() ? { color: '#99c399' } : null}
          key={section.id}
          to={`/${section.id}`}
        >
          {section.title}
        </Link>
      ))}
    </div>
  );
};

export default Nav;
