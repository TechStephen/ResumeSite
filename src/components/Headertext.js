import React from 'react';
import Typed from 'react-typed';

const Headertext = () => {
    return(
      <div className="Header-wrapper">
        <div className="main-info">
          <h1>Stephen Schmitz Personal Website</h1>
          <Typed 
            className="typed-text"
            strings={["Cloud Engineering", "DevOps", "CI/CD", "Container Orchestration", "AWS", "Azure"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
      </div>
    )
}

export default Headertext;
