import React from "react";

const Music = () => (
  <div
    id="music"
    className="pt-8 h-screen"
  >
    <a
      href="https://open.spotify.com/artist/0VCvyoaiTuhKsVSGlcV3Er?si=nnw4KkELR-CDqoUiLLH6kw"
      className="text-center text-white block py-6 mb-6"
    >
      Spotify
    </a>
    <a
      href="https://geo.itunes.apple.com/us/artist/kanin/296050830?mt=1&app=music"
      className="text-center text-white block py-6 mb-6"
    >
      Apple
    </a>
    <a
      href="https://tidal.com/artist/4257491"
      className="text-center text-white block py-6 mb-6"
    >
      Tidal
    </a>
    <a
      href="https://soundcloud.com/itskanin"
      className="text-center text-white block py-6 mb-6"
    >
      Soundcloud
    </a>
    <a
      href="https://www.youtube.com/user/KaninVEVO"
      className="text-center text-white block py-6 mb-6"
    >
      YouTube
    </a>
  </div>
);

export default Music;
