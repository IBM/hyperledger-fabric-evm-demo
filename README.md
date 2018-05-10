# fabric-evm-demo

This repo contains a Web3.js client app that invokes methods on a Solidity
[smart contract]() that is running in [Hyperledger Fabric](https://www.hyperledger.org/projects/fabric). The demo includes a
Web3 proxy server that translates Web3 calls to and from the corresponding
Hyperledger Fabric GRPC API calls.

To test the React client locally, run the following commands:

```
npm install
npm start
```

We have provided a manifest.yml so that the web3 web app can be easily
deployed to Cloud Foundry, e.g. using [IBM Cloud](https://console.bluemix.net/).

To deploy the contract, you need a running Hyperledger Fabric cluster
that has the https://github.com/hyperledger/fabric-chaincode-evm plugin
installed. ***insert link to directions here***.

You also need to have a deployed version of our alpha Web3-Fabric proxy server.
***insert link to instructions here***.

You can see the demo [in action](http://fabric-evm-demo.mybluemix.net/)
using the following credentials:

* User account: 9ab9dd6465daf96f9c53abd1d21f5cd2bc0df4ee
* Password: some-password
