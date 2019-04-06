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
              <div className="tagline">Spark DEV | Blockchain Fanatic | Linux Hacker | Yeahh</div>
             {/* Fonts are here https://fontawesome.com/icons?d=gallery&s=brands */}
                  <div className="icons-social">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/madhur4444"><i className="fa fa-github"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/madhur4444"><i className="fa fa-twitter"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madhurkumarsharma/"><i className="fa fa-linkedin"></i></a>
                        {/* add link to devpost blogs and other projects, see louisgv.ga, add resume*/}
                  </div>
	        </main>
      </div>
    );
  }
}

export default App;
