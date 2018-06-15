import React from "react";

const Music = ({ data: { allMarkdownRemark: { edges } } }) => {
  console.log('data', edges);
  return (
    <div
      id="music"
      className="pt-8 h-screen"
    >
      {edges.map(({ node: { frontmatter }}) => (
        <a key={frontmatter.title} href={frontmatter.link} className="text-center text-white block py-6 mb-6">
          {frontmatter.title}
        </a>
      ))}
    </div>
  );
}

export default Music;

export const pageQuery = graphql`
  query MusicQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { contentKey: { eq: "music-links" } }}
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
