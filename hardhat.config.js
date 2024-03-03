/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const fs = require("fs");
const path = require("path");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");

let BBTestnet;
try {
  BBTestnet = JSON.parse(
    fs.readFileSync(path.join(__dirname, "./testnet.json")).toString().trim()
  );
} catch {}

module.exports = {
  defaultNetwork: BBTestnet ? "buildbear" : "localhost",

  networks: {
    hardhat: {},
    buildbear: {
      url: BBTestnet ? BBTestnet.rpcUrl : "https://rpc.buildbear.io/superior-vision-0112df33",
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.13",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      buildbear: "verifyContract",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: BBTestnet ? BBTestnet.chainId : 15218,
        urls: {
          apiURL: BBTestnet ? BBTestnet.verificationUrl : "https://rpc.buildbear.io/verify/etherscan/superior-vision-0112df33",
          browserURL: BBTestnet ? BBTestnet.explorerUrl : "https://explorer.buildbear.io/superior-vision-0112df33",
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000000000,
  },
};
