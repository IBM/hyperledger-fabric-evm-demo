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
        var tot = valA + valB;
        var perA = (valA / tot) * 100;
        var perB = (valB / tot) * 100;

        console.log(valA);
        console.log(valB);
        console.log(perA);
        console.log(perB);
        this.setState({
            valA: valA,
            valB: valB,
            perA: perA,
            perB: perB,
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
                How awesome is it that you can have the <a
                  href="https://www.hyperledger.org/projects/hyperledger-burrow"
                  target="_blank"
                  rel="noopener noreferrer">Hyperledger Burrow</a> Ethereum VM
                  smart contract engine running as chaincode inside <a
                  href="https://www.hyperledger.org/projects/fabric" target="_blank"
                  rel="noopener noreferrer">Hyperledger Fabric</a>?
              </p>
              {!this.state.loading ? <div className="results__percentage--container">
                  <div className="results__item--container">
                    <p className="resultCategory">Awesome</p>
                    <div id="opta" className="votebar" style={{ width: `${this.state.perA}%` }}>
                      <p className="resultValue" id="resultA">
                        {this.state.valA}
                      </p>
                    </div>
                  </div>
                  <div className="results__item--container">
                    <p className="resultCategory">Spectacular</p>
                    <div id="optb" className="votebar" style={{ width: `${this.state.perB}%` }}>
                      <p className="resultValue" id="resultB">
                        {this.state.valB}
                      </p>
                    </div>
                  </div>
                  <Link to="/vote" className="duo__btn finish__link">
                    Restart
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
