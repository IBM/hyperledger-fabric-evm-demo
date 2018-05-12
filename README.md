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
installed. Here's a video with the steps to deploy this, and the correponding
Web3-Fabric proxy server:

<iframe width="560" height="315" src="https://www.youtube.com/embed/yRdaaWkLgZ0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

And here's the [repo](https://github.com/swetharepakula/fabric-evm-ibm-container-service)
with the bits you'll need.

You can see the demo [in action](http://fabric-evm-demo.mybluemix.net/)
using the following credentials:

* Password: some-password
