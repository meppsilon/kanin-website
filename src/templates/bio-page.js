import React from 'react';
import Content, { HTMLContent } from '../components/Content';

const BioPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content
  console.log('content', content);

  return (
    <div id="bio" className="h-full w-full">
      <div className="pt-8">
        <div className="text-center w-64 mx-auto text-white">
          <PageContent className="content" content={content} />
        </div>
      </div>
    </div>
  );
}

const BioPage = ({ data: { markdownRemark: { html } } }) => (
  <BioPageTemplate content={html} contentComponent={HTMLContent} />
);

export default BioPage;

export const bioPageQuery = graphql`
query BioPage($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
  }
}
`;
