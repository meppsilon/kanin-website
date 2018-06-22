import React from 'react';
import Content, { HTMLContent } from '../components/Content';

const ContactPageTemplate = ({ content, contentComponent }) => {
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

const ContactPage = ({
  data: {
    markdownRemark: { html },
  },
}) => <ContactPageTemplate content={html} contentComponent={HTMLContent} />;

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
