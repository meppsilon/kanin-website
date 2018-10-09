import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Motion, spring } from "react-motion";
import MainArea from "../components/MainArea";
import "../css/index.css";

const title = "Kanin";
const sections = [
  {
    id: "",
    title: "Home"
  },
  {
    id: "music",
    title: "Music"
  },
  {
    id: "bio",
    title: "Bio"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

export const query = graphql`
  query IndexQuery {
    socialLinks: allMarkdownRemark(
      sort: { fields: [frontmatter___index], order: ASC }
      filter: { frontmatter: { contentKey: { eq: "social-links" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            icon
            link
          }
        }
      }
    }
    backgroundMedia: markdownRemark(
      frontmatter: { contentKey: { eq: "background-media" } }
    ) {
      frontmatter {
        fontColor
        transitionTime
        photos {
          photo
        }
      }
    }
  }
`;

const Layout = ({ children, location: { pathname } }) => (
  <StaticQuery
    query={query}
    render={({ backgroundMedia, socialLinks }) => (
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <Helmet
          title={title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <meta
            property="og:image"
            content={backgroundMedia.frontmatter.image}
          />
        </Helmet>
        <MainArea
          title={title}
          sections={sections}
          url={pathname.slice(1)}
          socialLinks={socialLinks}
          backgroundMedia={backgroundMedia}
          fontColor={backgroundMedia.frontmatter.fontColor}
        >
          {children}
        </MainArea>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
