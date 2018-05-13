import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as dapp from "./dapp";
import arrow from "./assets/images/arrow-left.svg";
import diagram from "./assets/images/diagram.png";
import "./results.css";

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount() {
        console.log("hello");
        this.getResults();
    }

    getResults = () => {
        console.log("FETCHING RESULTS");
        var myContract = dapp.getContract();
        var optionA = myContract.proposals(0).toString();
        var valA = parseInt(optionA.substring(optionA.indexOf(',') + 1), 10);
        var optionB = myContract.proposals(1).toString();
        var valB = parseInt(optionB.substring(optionB.indexOf(',') + 1), 10);
        var optionC = myContract.proposals(2).toString();
        var valC = parseInt(optionC.substring(optionC.indexOf(',') + 1), 10);
        var optionD = myContract.proposals(3).toString();
        var valD = parseInt(optionD.substring(optionC.indexOf(',') + 1), 10);

        var tot = valA + valB + valC + valD;
        var perA = (valA / tot) * 100;
        var perB = (valB / tot) * 100;
        var perC = (valC / tot) * 100;
        var perD = (valD / tot) * 100;

        console.log(valA);
        console.log(valB);
        console.log(valC);
        console.log(valD);
        console.log(perA);
        console.log(perB);
        console.log(perC);
        console.log(perD);

        this.setState({
            valA: valA,
            valB: valB,
            valC: valC,
            valD: valD,
            perA: perA,
            perB: perB,
            perC: perC,
            perD: perD,
            loading: false
        });
    }


    render() {
        return <div className="results__container">
            <div>
              <Link to="/vote" className="arrow__container">
                <img src={arrow} alt="Arrow icon" className="back__arrow" />
              </Link>
              <h1>Results</h1>
              <p>
                How interested are you in having a robust permissioned blockchain
                  platform such as <a href="https://www.hyperledger.org/projects/fabric" target="_blank"
                  rel="noopener noreferrer">Hyperledger Fabric</a> that runs Ethereum contracts?
              </p>
              {!this.state.loading ? <div className="results__percentage--container">
                  <div className="results__item--container">
                    <p className="resultCategory">Not at all.</p>
                    <div id="opta" className="votebar" style={{ width: `${this.state.perA}%` }}>
                      <p className="resultValue" id="resultA">
                        {this.state.valA !== 0 && this.state.valA}
                      </p>
                    </div>
                  </div>
                  <div className="results__item--container">
                    <p className="resultCategory">Some, tell me more.</p>
                    <div id="optb" className="votebar" style={{ width: `${this.state.perB}%` }}>
                      <p className="resultValue" id="resultB">
                        {this.state.valB !== 0 && this.state.valB}
                      </p>
                    </div>
                  </div>
                  <div className="results__item--container">
                    <p className="resultCategory">Very, tell me more!</p>
                    <div id="optc" className="votebar" style={{ width: `${this.state.perC}%` }}>
                      <p className="resultValue" id="resultC">
                        {this.state.valC !== 0 && this.state.valC}
                      </p>
                    </div>
                  </div>
                  <div className="results__item--container">
                    <p className="resultCategory">Must have now!</p>
                    <div id="optd" className="votebar" style={{ width: `${this.state.perD}%` }}>
                      <p className="resultValue" id="resultD">
                        {this.state.valD !== 0 && this.state.valD}
                      </p>
                    </div>
                  </div>
                  <Link to="/vote" className="duo__btn finish__link">
                    Restart
                  </Link>
                  <Link to="https://twitter.com/christo4ferris/status/994979811515883523">
                    Learn all about it here.
                  </Link>
                </div> : "Loading"}
            </div>
            <div className="side__panel--container">
              <h1>HyperLedger Fabric with EVM Architecture</h1>
              <img src={diagram} alt="" className="diagram__image" />
              <p>
                A Web3-based client interacts with our Web3->Hyperledger
                Fabric SDK proxy server to send/receive API calls to the
                Fabric network components enabling Ethereum developers
                to interact with Hyperledger Fabric just as they would
                with Ethereum.
              </p>
            </div>
          </div>;
    }
}

export default Results;
