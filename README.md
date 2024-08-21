# Contract Verification

Verifying smart contracts is a fundamental process in the blockchain ecosystem. It ensures that the source code of a smart contract matches the deployed bytecode on the blockchain. This process promotes transparency, security, and trust within the blockchain community by allowing anyone to validate the correctness and integrity of the contract.

We will explore three methods for verifying smart contracts on Conflux eSpace:

1. **Hardhat Ignition**: A deployment manager for Hardhat that simplifies the verification process through integrated commands.
2. **Hardhat Verify Task**: A Hardhat command used to verify deployed contracts by providing their address and constructor arguments.
3. **Manual Verification on ConfluxScan**: A method that involves manually verifying contracts through the ConfluxScan block explorer.

## Requirements

Before proceeding, ensure you have the following:

- **Deployed Smart Contract**
- **Contract Source Code**
- **Configured Hardhat Project**

## Deployment:

   ``npx hardhat ignition deploy ignition/modules/ContractName.js --network eSpaceTestnet``
   
   ``npx hardhat run scripts/deploy.js``

## Configuration

To verify smart contracts on Conflux, you need to configure your Hardhat project to interact with the Conflux network. This configuration involves setting up your hardhat configuration file with the appropriate network details and API keys.

Update your hardhat.config.js file to include network details and API keys. Here is an example configuration for Conflux eSpace Testnet:

```javascript
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(); 
 
module.exports = { 
    solidity: "0.8.24", 
    networks: { 
        eSpaceTestnet: { 
            url: "https://evmtestnet.confluxrpc.com", 
            accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [], 
        }, 
    }, 
    etherscan: { 
        apiKey: { 
            eSpaceTestnet: 'espace', 
        }, 
        customChains: [ 
            { 
                network: 'eSpaceTestnet', 
                chainId: 71, 
                urls: { 
                    apiURL: 'https://evmapi-testnet.confluxscan.io/api/', 
                    browserURL: 'https://evmtestnet.confluxscan.io/', 
                }, 
            }, 
        ], 
    }, 
};
```

## Method 1: Verifying with Hardhat Ignition

You will need an ignition build module to be able to use this method.
If your contract is already deployed and you want to verify it, use the following command with your deployment ID:

``npx hardhat ignition verify deployment-id``

To deploy and verify your smart contract simultaneously using Hardhat Ignition, you need to use the deploy command with the --verify flag.

``npx hardhat ignition deploy ignition/modules/VerificationExample.js --network eSpaceTestnet –-verify ``

## Method 2: Verifying with Hardhat Verify Task

Another method to verify your smart contract is by using the built-in Hardhat `verify` task. 
You need to  specify the contract address and constructor arguments on the command line.

``npx hardhat verify --network eSpaceTestnet <YOUR_CONTRACT_ADDRESS> <CONSTRUCTOR_ARG>``

## Method 3: Manual Verification on ConfluxScan
The third method involves manually verifying your contract using the ConfluxScan explorer. This is a more manual approach but can be helpful if other methods fail.

Go to ConfluxScan Testnet, search for your contract address, and navigate to the "Contract" section. Look for the "Verify & Publish" button.

On the verification page, fill in the necessary details.
Copy and paste the source code of your smart contract into the provided field, then click "Submit."
