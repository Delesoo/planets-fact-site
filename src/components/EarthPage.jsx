import React from "react";
import Navigation from './Navigation';
import data from './data.json';
import { useState } from "react";
import earthLogo from '/src/assets/planet-earth.svg';
import structureImage from '/src/assets/planet-earth-internal.svg';

function EarthPage() {
    const  earthData = data.find(planet => planet.name === 'Earth');
    const [selectedTab, setSelectedTab] = useState('overview');
    const [earthImage, setEarthImage] = useState(earthLogo);

    const handleTabClick = (tab) => {
        setSelectedTab(tab);

        if(tab === 'structure') {
          setEarthImage(structureImage);
        } else if (tab === 'geology') {
          setEarthImage(earthLogo); 
        } else {
          setEarthImage(earthLogo);
        }
    };

    return(
    <div className="main-container">

        <Navigation />
        <div className="line-cont"></div>

        <div className="earth-logo">
            <img src={earthImage} alt="earth" />

        <div className="content">

        {selectedTab === 'overview' && (
          <div>
            <h2>Earth</h2>
            <p>{earthData.overview.content}</p>
            <a href={earthData.overview.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
          </div>
        )}
        {selectedTab === 'structure' && (
          <div>
            <h2>Earth</h2>
            <p>{earthData.structure.content}</p>
            <a href={earthData.structure.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
          </div>
        )}
        {selectedTab === 'geology' && (
          <div>
            <h2>Earth</h2>
            <p>{earthData.geology.content}</p>
            <a href={earthData.geology.source} target="_blank" rel="noopener noreferrer">
              Wikipedia <img src="/src/assets/icon-source.svg" alt="icon" />
            </a>
            <img className="pin" src="/src/assets/geology-earth.png" alt="pin" />
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
            <h3>{earthData.rotation}</h3>
          </div>
          <div className="info two">
            <p>revolution time</p>
            <h3>{earthData.revolution}</h3>
          </div>
          <div className="info three">
            <p>radius</p>
            <h3>{earthData.radius}</h3>
          </div>
          <div className="info four">
            <p>average temp</p>
            <h3>{earthData.temperature}</h3>
          </div>
        </div> 

    </div>
    );
}

export default EarthPage;