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
  sourcify: { 
    enabled: false, 
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