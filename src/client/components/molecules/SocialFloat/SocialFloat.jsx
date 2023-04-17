import React from "react";
import "./SocialFloat.scss";
import FacebookIcon from "../../../assets/icons/facebookFloat.svg";
import InstagramIcon from "../../../assets/icons/instagramFloat.svg";
import YoutubeIcon from "../../../assets/icons/youtubeFloat.svg";

const SocialFloat = () => {
  return (
    <div className="social-float">
      <a
        href="https://www.facebook.com/cursostoc"
        target="__blank"
        rel="noopener"
      >
        <img src={FacebookIcon} alt="" />
      </a>
      <a
        href="https://www.instagram.com/cursostoc/"
        target="__blank"
        rel="noopener"
      >
        <img src={InstagramIcon} alt="" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCzkvAkpE-WTPKqiJRNVJD2g"
        target="__blank"
        rel="noopener"
      >
        <img src={YoutubeIcon} alt="" />
      </a>
    </div>
  );
};

export default SocialFloat;
