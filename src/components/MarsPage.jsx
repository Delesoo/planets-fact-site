import React from "react";
import Navigation from './Navigation';
import data from './data.json';
import { useState } from "react";
import marsLogo from '/src/assets/planet-mars.svg';
import structureImage from '/src/assets/planet-mars-internal.svg';

function MarsPage() {
    const  marsData = data.find(planet => planet.name === 'Mars');
    const [selectedTab, setSelectedTab] = useState('overview');
    const [marsImage, setMarsImage] = useState(marsLogo);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);

        if(tab === 'structure') {
          setMarsImage(structureImage);
        } else if (tab === 'geology') {
          setMarsImage(marsLogo); 
        } else {
          setMarsImage(marsLogo);
        }
    };

    return(
    <div className="main-container">

        <Navigation />
        <div className="line-cont"></div>

        <div className="earth-logo">
            <img src={marsImage} alt="mars" />

        <div className="content">

        {selectedTab === 'overview' && (
          <div>
            <h2>Mars</h2>
            <p>{marsData.overview.content}</p>
            <a href={marsData.overview.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
          </div>
        )}
        {selectedTab === 'structure' && (
          <div>
            <h2>Mars</h2>
            <p>{marsData.structure.content}</p>
            <a href={marsData.structure.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
          </div>
        )}
        {selectedTab === 'geology' && (
          <div>
            <h2>Mars</h2>
            <p>{marsData.geology.content}</p>
            <a href={marsData.geology.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
            <img className="pin" src="/src/assets/geology-mars.png" alt="pin" />
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
            <h3>{marsData.rotation}</h3>
          </div>
          <div className="info two">
            <p>revolution time</p>
            <h3>{marsData.revolution}</h3>
          </div>
          <div className="info three">
            <p>radius</p>
            <h3>{marsData.radius}</h3>
          </div>
          <div className="info four">
            <p>average temp</p>
            <h3>{marsData.temperature}</h3>
          </div>
        </div> 

    </div>
    );
}

export default MarsPage;