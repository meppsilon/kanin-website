import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Content, { HTMLContent } from "../components/Content";

export const BioPageTemplate = ({ content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <div
      id="bio"
      className="h-full mx-auto"
      style={{ width: "70%", maxWidth: "900px" }}
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
  location,
  data: {
    markdownRemark: { html }
  }
}) => (
  <Layout location={location}>
    <BioPageTemplate content={html} contentComponent={HTMLContent} />
  </Layout>
);

export default BioPage;

export const bioPageQuery = graphql`
  query BioPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
    }
  }
`;
