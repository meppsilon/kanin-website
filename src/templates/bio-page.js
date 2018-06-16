import React from 'react';
import Content, { HTMLContent } from '../components/Content';

const BioPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div
      id="bio"
      className="h-full mx-auto"
      style={{ width: '70%', maxWidth: '700px' }}
    >
      <div>
        <div className="text-center mx-auto text-white page-padding-top">
          <PageContent className="content" content={content} />
        </div>
      </div>
    </div>
  );
};

const BioPage = ({
  data: {
    markdownRemark: { html },
  },
}) => <BioPageTemplate content={html} contentComponent={HTMLContent} />;

export default BioPage;

export const bioPageQuery = graphql`
  query BioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
