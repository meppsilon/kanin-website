import React from "react";
import Link from "gatsby-link";

const Nav = ({ siteTitle, sections, onClickHandler, url, renderedColor }) => {
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
          className="px-3 text-sm font-bold nav-link-last py-4 ux-hover ux-click"
          style={{ color: url === section.title.toLowerCase() ? '#99c399' : renderedColor}}
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
