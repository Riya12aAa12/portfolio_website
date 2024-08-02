import React from 'react';
import './Certification.css';

const Certification = ({ certifications }) => {
  return (
    <div id="certifications" className="certification-container">
      {certifications.map((cert, index) => (
        <div key={index} className="certification-card">
          <img src={cert.image} alt={cert.title} className="certification-image" />
          <div className="certification-content">
            <h3 className="certification-title">{cert.title}</h3>
            <p className="certification-body">{cert.bodyText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certification;
