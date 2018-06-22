import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Motion, spring } from "react-motion";
import bannerImage from "../assets/banner-image.jpg";
import MainArea from "../components/MainArea";
import "../css/index.css";

const title = "Kanin";
const sections = [
  {
    id: "",
    title: "Home",
    backgroundColor: "black",
    color: "white"
  },
  {
    id: "music",
    title: "Music",
    style: {
      backgroundColor: "blue",
      color: "white"
    }
  },
  {
    id: "bio",
    title: "Bio",
    style: {
      backgroundColor: "green",
      color: "white"
    }
  },
  {
    id: "contact",
    title: "Contact",
    style: {
      backgroundColor: "red",
      color: "white"
    }
  }
];

const Layout = ({ data, children, location: { pathname } }) => (
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
        content={bannerImage}
      />
    </Helmet>
    <MainArea title={title} sections={sections} url={pathname.slice(1)}>
      {children}
    </MainArea>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
