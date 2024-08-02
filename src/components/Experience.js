import React, { useState } from 'react';
import './ExperienceStyle.css';

const Experience = ({ experiences }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="experience" className="experience-container">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`experience-item ${expandedIndex === index ? 'expanded' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <img src={exp.Imgsrc} alt={exp.cardtitle} className="experience-image" />
          <div className="experience-content">
            <h3 className="experience-title">{exp.cardtitle}</h3>
            <h4 className="experience-subtitle">{exp.cardsubtitle}</h4>
            <p className="experience-role">{exp.subtitle}</p>
            <ul className={`experience-description ${expandedIndex === index ? 'expanded' : ''}`}>
              {exp.workDescription.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            <div className="experience-dates">{exp.dateText}</div>
            <button 
              className="expand-button" 
              onClick={() => handleExpandClick(index)}
            >
              {expandedIndex === index ? 'Collapse' : 'Expand'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
