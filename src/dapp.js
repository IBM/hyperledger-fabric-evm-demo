import Web3 from "web3";

var myContract;
var provider = "http://localhost:5000";

export function getContract() {
    console.log("Getting the Contract")
    var web3;
    if (typeof window.web3 !== "undefined" && typeof window.web3.currentProvider !== "undefined") {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        web3 = new Web3();
    }
    web3.setProvider(new web3.providers.HttpProvider(provider));
    var account = web3.eth.accounts[0]
    web3.eth.defaultAccount = account;
    console.log("Account " + account)
    //Don't forget to edit the contract address below with your contract address
    var address = "change-to-real-contract-address"

    console.log("Got address: " + address)
    var votingABI = [
        {
            "inputs": [
                {
                    "name": "proposalNames",
                    "type": "bytes32[]"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "proposal",
                    "type": "uint256"
                }
            ],
            "name": "vote",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "proposals",
            "outputs": [
                {
                    "name": "name",
                    "type": "bytes32"
                },
                {
                    "name": "voteCount",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];
    var VotingContract = web3.eth.contract(votingABI);
    myContract = VotingContract.at(address);
    return myContract;
}

// export function vote() {
//     if (document.getElementById('optionA').checked == true) {
//         return voteA()
//     }
//     return voteB()
// }

export function voteA(func) {
        console.log("voted for option A");
        var myContract = getContract();
        myContract.vote(0);

    // window.location.href = 'results.html';
}

export function voteB(func) {
    console.log("voted for option B");
    var myContract = getContract();
    myContract.vote(1);
    // window.location.href = 'results.html';
}

export function voteC(func) {
    console.log("voted for option C");
    var myContract = getContract();
    myContract.vote(2);
    // window.location.href = 'results.html';
}

export function voteD(func) {
    console.log("voted for option D");
    var myContract = getContract();
    myContract.vote(3);
    // window.location.href = 'results.html';
}

export function getResults() {
    var myContract = getContract();
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

    var results = {
        valA: valA,
        valB: valB,
        valC: valC,
        valD: valD,
        percentA: perA,
        percentB: perB,
        percentC: perC,
        percentD: perD,
    }

    return results;
    // document.getElementById('resultA').innerText = valA.toString();
    // document.getElementById('opta').style.width = perA.toString() + '%';
    // document.getElementById('resultB').innerText = valB.toString();
    // document.getElementById('optb').style.width = perB.toString() + '%';
}
