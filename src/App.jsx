import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import FactCard from './components/FactCard.jsx'
import TabButton from './components/TabButton'
import { TABCONTENTS } from './data.js'
import { CARDS } from './data.js' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [ selectedTab, setSelectedTab ] = useState('tab1');  

  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    <>
      <h1>Hello</h1>
      <h3>
        I am Guglielmo Daddi
      </h3>
      <p>
        I am currently a Visiting Researcher at NASA/JPL, <br /> and a Ph.D. candidate at the Polytechnic of Turin (PoliTo).
  
      </p>
      <section id="fact-card">
      <ul>
        {CARDS.map((cardItem) => <FactCard key={cardItem.title} {...cardItem} />)}
      </ul>
      </section>

      <section id="tab">
        <menu>
         <TabButton isSelected={selectedTab === 'tab1'} onSelect={() => handleSelect('tab1')}>News</TabButton>
          <TabButton isSelected={selectedTab === 'tab2'} onSelect={() => handleSelect('tab2')}>Projects</TabButton>
          <TabButton isSelected={selectedTab === 'tab3'} onSelect={() => handleSelect('tab3')}>Publications</TabButton>
         {/* <TabButton isSelected={sxelectedTab === 'tab4'} onSelect={() => handleSelect('tab4')}>Contact</TabButton> */}
        </menu>
      
        <div id="tab-content">
          <h3>{TABCONTENTS[selectedTab].title}</h3>
          {
            TABCONTENTS[selectedTab].getContent ?
              React.createElement(TABCONTENTS[selectedTab].getContent()) :
              <p>{TABCONTENTS[selectedTab].description}</p>
          }
        </div>

      </section>

      <div>
      <a href="mailto:guglielmo.daddi.96@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
        <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/guglielmo-daddi-5005a31ba/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
      </a>
      <a href="https://github.com/gdaddi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FontAwesomeIcon icon={faGithub} className="social-icon" />
      </a>
      <a href="https://scholar.google.com/citations?user=orla60oAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" aria-label="GoogleScholar">
        <FontAwesomeIcon icon={faGoogleScholar} className="social-icon" />
      </a>
    </div>
      <small>
        The source code for this website can be found <a href='https://github.com/gdaddi/personal-website'>here</a>.
      </small>
    </>
  )
}

export default App
