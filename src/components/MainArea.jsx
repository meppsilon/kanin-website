import React from 'react';
import Header from './Header';
import BackgroundMedia from './BackgroundMedia';
import Pages from './Pages';

const MainArea = ({
  siteTitle,
  sections,
  children,
  url,
  socialLinks,
  backgroundMedia,
}) => (
  <div className="h-screen flex relative bg-black-true">
    <Header
      siteTitle={siteTitle}
      sections={sections}
      url={url}
      socialLinks={socialLinks}
    />
    <BackgroundMedia page={url} backgroundMedia={backgroundMedia} />
    <div className="w-full h-full flex fixed text-black overflow-scroll scrolling-touch">
      <Pages children={children} page={url} />
    </div>
  </div>
);

export default MainArea;
