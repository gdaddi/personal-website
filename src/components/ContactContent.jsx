import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import './ContactContent.css';

const ContactContent = () => (
    <div>
      <p>Send me a message <a href="mailto:guglielmo.daddi.96@gmail.com">here</a>.</p>
      <a href="https://github.com/gdaddi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/guglielmo-daddi-5005a31ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
      <a href="https://scholar.google.com/citations?user=orla60oAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" aria-label="GoogleScholar">
        <FontAwesomeIcon icon={faGoogleScholar} className="social-icon" />
      </a>
    </div>
  );

export default ContactContent;