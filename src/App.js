import React, { Component } from 'react';
import './App.css';
import './css/reset.css'
import './css/white-black.css'
require('dotenv').config();

class App extends Component {
  render() {
    return (
      <div className="App">
        	<main>
            <div className="intro">Hello, I'm Madhur! (Aka MKS)</div>
            {/* add sub line later  */}
              <div className="tagline">Spark DEV | DevOps | Blockchain Fanatic | Linux Hacker </div>
             
                  <div className="icons-social">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/madhur4444"><i className="fa fa-github"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/madhur4444"><i className="fa fa-twitter"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madhurkumarsharma/"><i className="fa fa-linkedin"></i></a>
	    		              <a target="_blank" rel="noopener noreferrer" href="https://devpost.com/madhur44444444"><i className="fa fa-code"></i></a>
                  </div>
                  <div className="currentProjects"><p><b>Current Updates - </b> <br></br> <br></br>
                  - Working at <a href="https://messari.io/">Messari</a> in their R&D <br></br> </p>
                  </div>

                  <div className="currentProjects">
                  <span>Website Last Updated on 21st Aug, 2021</span>
                  </div>

	        </main>
      </div>
    );
  }
}

export default App;
