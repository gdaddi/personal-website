import React, { useState } from 'react';
import './ProjectsContent.css';
import iconMPPD from '../assets/mppd.svg';
import iconEELS from '../assets/EELS.svg';
import iconSROC from '../assets/SROC.svg';

const ProjectsContent = () => {
  const [isVisible, setIsVisible] = useState({ eels: false, sroc: false, mppd: false});

  const toggleVisibility = (section) => {
    setIsVisible(prevVisibility => ({
      ...prevVisibility,
      [section]: !prevVisibility[section],
    }));
  };

// I am not using a project data class here because I want to be able to customize how the content of each project is displayed 

  return (
    <div>
      <div className="project-box" onClick={() => toggleVisibility('eels')}>
        <h2>EELS</h2>
        {isVisible.eels && (
          <div className="project-section">
            <p>
              The <a href='https://www-robotics.jpl.nasa.gov/how-we-do-it/systems/exobiology-extant-life-surveyor-eels/'>Exobiology Extant Life Surveyor (EELS)</a> is a snake-like robotic system
              developed at NASA/JPL. Its purpose is to explore the icy moon of Saturn, Enceladus.
            </p>
            <img src={iconEELS} alt="EELS Project Icon" />
            <p>
              I was involved in the autonomy team and worked on risk-aware planning, system-level autonomy, software infrastructure, and reinforcement learning. 
              This was my first project contributing to a large code-base (more than 200k lines of code), with over 15 developers.
            </p>
            <p>
            Over the project, I took part in three field tests in California and Canada, where the algorithms and software infrastructure we developed were tested on snow and ice.
            </p>
          </div>
        )}
      </div>
      <div className="project-box" onClick={() => toggleVisibility('sroc')}>
        <h2>SROC</h2>
        {isVisible.sroc && (
          <div className="project-section">
            <p>The <a href='https://www.esa.int/ESA_Multimedia/Images/2020/04/SROC'>Space Rider Observer Cube</a> (SROC) is a project 
            funded by the European Space Agency (ESA) to build a CubeSat to observe and dock with the <a href='https://en.wikipedia.org/wiki/Space_Rider'>Space Rider</a> vehicle. 
            </p>
            <img src={iconSROC} alt="SROC Project Icon" />
            <p>I was involved with developing a graphical simulation environment to validate SROC's guidance, navigation and control algorithms 
              and also supported the payload's performance analysis.
            </p>
          </div>
        )}
      </div>
      <div className="project-box" onClick={() => toggleVisibility('mppd')}>
        <h2>Plasma Drill</h2>
        {isVisible.mppd && (
          <div className="project-section">
            <p> 
              The <a href='https://doi.org/10.2514/1.T6244'>Plasma Drill</a> project was a research task at NSA/JPL that investigated pulsed plasma discharges 
              as a way to enhance the performance of <a href='https://en.wikipedia.org/wiki/Cryobot'>melt probes</a> by fracturing ice.
              Melt probes move through ice and lose heat to the surrounding environment. These fractures reduce the ice's thermal conductivity, improving the efficiency of melt probes which rely on thermal energy to penetrate the ice.
            </p>
            <img src={iconMPPD} alt="MPPD project icon" />
            <p>
              I was involved with system performance modeling, hardware prototyping, testbed design, manufacturing, and experimental validation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;
