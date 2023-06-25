import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const INFURA_GOERLI_TESTNET = process.env.INFURA_GOERLI_TESTNET || "";
const ALCHEMY_ARBITRUM_GOERLI_TESTNET =
  process.env.ALCHEMY_ARBITRUM_GOERLI_TESTNET || "";
const PRIVATE_KEY_TEST = process.env.PRIVATE_KEY_TEST || "";
const ETHERSCAN = process.env.ETHERSCAN || "";
const ARBISCAN = process.env.ARBISCAN || "";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    goerli: {
      url: INFURA_GOERLI_TESTNET,
      chainId: 5,
      accounts: [PRIVATE_KEY_TEST],
    },
    arbitrumTestnet: {
      url: ALCHEMY_ARBITRUM_GOERLI_TESTNET,
      chainId: 421613,
      accounts: [PRIVATE_KEY_TEST],
    },
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN,
      arbitrumGoerli: ARBISCAN,
    },
  },
};

export default config;
