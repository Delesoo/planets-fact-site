import React from "react";
import Navigation from './Navigation';
import data from './data.json';
import { useState } from "react";
import jupiterLogo from '/src/assets/planet-jupiter.svg';
import structureImage from '/src/assets/planet-Jupiter-internal.svg';

function JupiterPage() {
    const  jupiterData = data.find(planet => planet.name === 'Jupiter');
    const [selectedTab, setSelectedTab] = useState('overview');
    const [jupiterImage, setJupiterImage] = useState(jupiterLogo);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);

        if(tab === 'structure') {
          setJupiterImage(structureImage);
        } else if (tab === 'geology') {
          setJupiterImage(jupiterLogo); 
        } else {
          setJupiterImage(jupiterLogo);
        }
    };

    return(
    <div className="main-container">

        <Navigation />
        <div className="line-cont"></div>

        <div className="earth-logo">
            <img src={jupiterImage} alt="jupiter" />

        <div className="content">

        {selectedTab === 'overview' && (
          <div>
            <h2>Jupiter</h2>
            <p>{jupiterData.overview.content}</p>
            <a href={jupiterData.overview.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
          </div>
        )}
        {selectedTab === 'structure' && (
          <div>
            <h2>Jupiter</h2>
            <p>{jupiterData.structure.content}</p>
            <a href={jupiterData.structure.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
          </div>
        )}
        {selectedTab === 'geology' && (
          <div>
            <h2>Jupiter</h2>
            <p>{jupiterData.geology.content}</p>
            <a href={jupiterData.geology.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
            <img className="pin" src="/src/assets/geology-jupiter.png" alt="pin" />
          </div>
        )}
        
        <div className="tab-container">
        <div
          className={`tab ${selectedTab === 'overview' ? 'active' : ''}`}
          onClick={() => handleTabClick('overview')}
        >
          Overview
        </div>
        <div
          className={`tab ${selectedTab === 'structure' ? 'active' : ''}`}
          onClick={() => handleTabClick('structure')}
        >
          Internal Structure
        </div>
        <div
          className={`tab ${selectedTab === 'geology' ? 'active' : ''}`}
          onClick={() => handleTabClick('geology')}
        >
          Surface Geology
        </div>
      </div>

      </div>  
        </div>

        <div className="bottom-info">
          <div className="info one">
            <p>rotation time</p>
            <h3>{jupiterData.rotation}</h3>
          </div>
          <div className="info two">
            <p>revolution time</p>
            <h3>{jupiterData.revolution}</h3>
          </div>
          <div className="info three">
            <p>radius</p>
            <h3>{jupiterData.radius}</h3>
          </div>
          <div className="info four">
            <p>average temp</p>
            <h3>{jupiterData.temperature}</h3>
          </div>
        </div> 

    </div>
    );
}

export default JupiterPage;