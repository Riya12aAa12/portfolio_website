import React from 'react';
import "./SkillCardStyle.css";
import { DiGit } from "react-icons/di";
import { SiVisualstudiocode, SiReact, SiReactrouter, SiBootstrap, SiFigma, SiInkscape } from "react-icons/si";
import { TbBrandCss3, TbBrandJavascript, TbBrandHtml5 } from "react-icons/tb";
import { IoLogoWindows, IoLogoNpm } from "react-icons/io";
import { FaJava } from 'react-icons/fa';

export default function SkillCard({ id }) {
  return (
    <>
      <div className="skill-container" id={id}>
        <div className="skill-header">My Skills</div>
        
        <div className="skill-box">
          <h2>Languages</h2>
          <div className="skillset">
            <div className="skill-item">
              <abbr title='java'><FaJava className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "90%" }}>90%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='HTML 5'><TbBrandHtml5 className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "95%" }}>95%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='JavaScript'><TbBrandJavascript className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "85%" }}>85%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skill-box">
          <h2>Libraries and Frameworks</h2>
          <div className="skillset">
            <div className="skill-item">
              <abbr title='ReactJS'><SiReact className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "80%" }}>80%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='CSS 3'><TbBrandCss3 className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "90%" }}>90%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='Git/Github'><DiGit className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "75%" }}>75%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='NPM'><IoLogoNpm className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "70%" }}>70%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='Bootstrap'><SiBootstrap className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "85%" }}>85%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='React Router'><SiReactrouter className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "75%" }}>75%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="skill-box">
          <h2>Tools & Systems</h2>
          <div className="skillset">
            <div className="skill-item">
              <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "90%" }}>90%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='Windows'><IoLogoWindows className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "85%" }}>85%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='Figma'><SiFigma className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "80%" }}>80%</div>
              </div>
            </div>
            <div className="skill-item">
              <abbr title='Inkscape'><SiInkscape className='techLogo' /></abbr>
              <div className="skill-progress">
                <div className="progress-bar" style={{ width: "70%" }}>70%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
