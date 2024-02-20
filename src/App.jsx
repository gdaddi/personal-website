import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import FactCard from './components/FactCard.jsx'
import TabButton from './components/TabButton'
import { TABCONTENTS } from './data.js'
import { CARDS } from './data.js' 


function App() {
  const [ selectedTab, setSelectedTab ] = useState('tab1');  

  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
  }

  return (
    <>
      <h1>Hello</h1>
      <h3>
        I am Guglielmo
      </h3>

      <section id="fact-card">
      <ul>
        {CARDS.map((cardItem) => <FactCard key={cardItem.title} {...cardItem} />)}
      </ul>
      </section>

      <section id="tab">
        <menu>
         <TabButton isSelected={selectedTab === 'tab1'} onSelect={() => handleSelect('tab1')}>News</TabButton>
         <TabButton isSelected={selectedTab === 'tab3'} onSelect={() => handleSelect('tab3')}>Contact</TabButton>
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
      <small>
        The source for this website can be found <a href='https://github.com/gdaddi/personal-website'>here</a>.
      </small>
    </>
  )
}

export default App
