import Web3 from "web3";

var myContract;
// var provider = "http://localhost:5000";
var provider = "https://fabproxy.mybluemix.net";

export function getAccountAddress() {
    var name = "ETHAccount=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    console.log(name);
    console.log(decodedCookie);
    console.log(ca);
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    console.log("Failed to get ethereum account address. Please login")
    return;

}

export function getContract() {
    console.log("Getting the Contract")
    var web3;
    if (typeof window.web3 !== "undefined" && typeof window.web3.currentProvider !== "undefined") {
        web3 = new Web3(window.web3.currentProvider);
    } else {
        web3 = new Web3();
    }
    web3.setProvider(new web3.providers.HttpProvider(provider));
    var account = getAccountAddress();
    web3.eth.defaultAccount = '0x' + account;
    console.log("Account " + account)
    var address = "1da3646c7bcc7d5a46940946eb9e8a259031bb69"

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

export function getResults() {
    var myContract = getContract();
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

    var results = {
        valA: valA,
        valB: valB,
        percentA: perA,
        percentB: perB,
    }

    return results;
    // document.getElementById('resultA').innerText = valA.toString();
    // document.getElementById('opta').style.width = perA.toString() + '%';
    // document.getElementById('resultB').innerText = valB.toString();
    // document.getElementById('optb').style.width = perB.toString() + '%';
}
