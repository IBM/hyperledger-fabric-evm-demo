import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Vote from "./Vote";
import Results from "./Results";
import fabricImage from "./assets/images/Hyperledger_Fabric_Logo_White.png";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={fabricImage} className="header__fabric" alt=""/>
        </header>
        <div className="main__container">
            <Router>
                <div>
                    <Route exact path="/" component={Vote} />
                    <Route exact path="/results" component={Results} />
                </div>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
