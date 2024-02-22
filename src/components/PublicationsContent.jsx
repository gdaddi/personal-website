import React, { useState } from 'react';
import './PublicationsContent.css';
import { PUBLICATIONS } from '../data';
import iconCopy from '../assets/copy.svg';

const PublicationsContent = () => {
  const [isVisible, setIsVisible] = useState({});

  const toggleVisibility = (id) => {
    setIsVisible(prevVisibility => ({
      ...prevVisibility,
      [id]: !prevVisibility[id],
    }));
  };

  const copyToClipboard = (text, event) => {
    event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div>
      {PUBLICATIONS.map((publication) => (
        <div key={publication.id} className="publication-box" onClick={() => toggleVisibility(publication.id)}>
          <p>{publication.title}</p>
          {isVisible[publication.id] && (
            <div className="publication-section">
              <div className="bibtex-container">
                <pre className="bibtex-entry">{publication.bibtex}</pre>
                <button onClick={(e) => copyToClipboard(publication.bibtex, e)} className="copy-button">
                  <img src={iconCopy} alt="Copy" className="copy-icon"/>
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PublicationsContent;
