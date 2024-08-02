import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({ scrollToAboutMe }) {
  return (
    <div className="home" id="home">
      <div className="content">
        <div className="wrapper">
          <div className="staticTitle">
            Graphic Designer
            <div className='hrLine'></div>
          </div>
          <ul className="dynamicTitle">
            <li>+<span>Full Stack Web Developer</span></li>
          </ul>
          <button className='btn' onClick={scrollToAboutMe}>
            Hire Me
          </button>
        </div>
      </div>
      <div className="mask">
        <img className='bg' src={cartoon} alt="girl-with-laptop" />
      </div>
    </div>
  );
}
