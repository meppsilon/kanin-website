import React from "react";

const SocialMedia = ({ socialLinks, renderedColor }) => (
  <div className="flex flex-col">
    {socialLinks.edges.map(
      ({
        node: {
          frontmatter: { title, icon, link }
        }
      }) => (
        <a href={link} className="links-social ux-hover" key={link}>
          <i
            className={`fa fa-${icon}`}
            style={{ color: renderedColor }}
            aria-hidden="true"
          />
        </a>
      )
    )}
  </div>
);

export default SocialMedia;
