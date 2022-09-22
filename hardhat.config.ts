import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const { API_URL, PRIVATE_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};

export default config;
