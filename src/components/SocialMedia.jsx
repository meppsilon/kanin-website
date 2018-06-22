import React from "react";

const SocialMedia = ({ socialLinks }) => (
  <div className="flex flex-col">
    {socialLinks.edges.map(({ node: { frontmatter: { title, icon, link } } }) => (
      <a href={link} className="links-social ux-hover">
        <i className={`fa fa-${icon} text-white`} aria-hidden="true" />
      </a>
    ))}
  </div>
);

export default SocialMedia;
