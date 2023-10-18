require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.SEPOLIA_RPC_URL;

const RINKEBY_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

module.exports = {
  solidity:{
version:"0.8.21",
compilers: [{ path: "/opt/homebrew/Cellar/solidity/0.8.21/" }]},
  networks: {
    sepolia: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};
