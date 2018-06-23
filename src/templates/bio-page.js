import React from 'react';
import Content, { HTMLContent } from '../components/Content';

export const BioPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div
      id="bio"
      className="h-full mx-auto"
      style={{ width: '70%', maxWidth: '900px' }}
    >
      <div>
        <div className="mx-auto text-white page-padding-top text-justify text-sm font-medium md:text-base">
          <PageContent className="content bio-p pb-6" content={content} />
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
