import React from 'react';
import tidalLogo from '../assets/tidal_logo.png';

const Music = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <div id="music" className="h-screen">
      {edges.map(({ node: { frontmatter } }) => (
        <a
          key={frontmatter.title}
          href={frontmatter.link}
          className="text-center text-white block py-8 page-padding-top px-8"
        >
          {frontmatter.title !== 'Tidal' ? (
            <i
              className={`fa fa-3x fa-${frontmatter.title.toLowerCase()}`}
              aria-hidden="true"
            />
          ) : (
            <img src={tidalLogo} style={{ height: '38px' }}/>
          )}
        </a>
      ))}
    </div>
  );
};

export default Music;

export const pageQuery = graphql`
  query MusicQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___index], order: ASC }
      filter: { frontmatter: { contentKey: { eq: "music-links" } } }
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
            link
          }
        }
      }
    }
  }
`;
