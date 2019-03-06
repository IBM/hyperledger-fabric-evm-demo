# fabric-evm-demo

This repo contains a Web3.js client app that invokes methods on a Solidity
[smart contract](poll.sol) that is running in [Hyperledger Fabric](https://www.hyperledger.org/projects/fabric).
The demo includes a Web3 proxy server that translates Web3 calls to and from the corresponding
Hyperledger Fabric GRPC API calls.


## Running the App

1. First deploy the [contract](poll.sol). When initializing the contract pass in four proposals with any names.
The specific proposal names do not matter, four proposals are needed for the
dApp.

For this step, you need a running Hyperledger Fabric cluster
that has the EVM Chaincode ([EVMCC](https://github.com/hyperledger/fabric-chaincode-evm))
installed. Follow the [tutorial](https://github.com/hyperledger/fabric-chaincode-evm/blob/master/examples/EVM_Smart_Contracts.md)
to learn how to install the EVMCC and get Fab3 running.

2. Update the [provider variable](https://github.com/IBM/hyperledger-fabric-evm-demo/blob/master/src/dapp.js#L5)
with the address of your instance of the Fab3 proxy.
```
var provider = "https://localhost:5000"
```

3. Update the [contract address](https://github.com/IBM/hyperledger-fabric-evm-demo/blob/master/src/dapp.js#L40)
with the contract address of the contract you deployed in step 1.

4. To run the dApp, run the following commands at the root of this repo.
```
npm install
npm start
```

Once tested locally, you can easily deploy the application to a Cloud Foundry
environment, e.g. [IBM Cloud](https://console.bluemix.net/)

5. Update the [provided manifest](manifest.yml) with the desired name of your application.

6. Build the artifacts necessary by running the following command:
```
yarn build
```

7. Push to Cloud Foundry.
```
cf push
```

And here's the [repo](https://github.com/swetharepakula/fabric-evm-ibm-container-service)
with the bits you need to deploy a Fabric network with the EVMCC installed to the IBM
Cloud Kubernetes Service(IKS).
