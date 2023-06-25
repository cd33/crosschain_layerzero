import { ethers, network } from "hardhat";
import verify from "../utils/verify";
import {
  _crossChainTokenArbitrumAddress,
  _lzEndpointArbitrum,
} from "../utils/constants";

async function main() {
  // const crossChainMessageOnArbitrum = await ethers.deployContract(
  //   "CrossChainMessage",
  //   [_lzEndpointArbitrum]
  // );
  // await crossChainMessageOnArbitrum.waitForDeployment();
  // console.log(
  //   `CrossChainMessage deployed on Arbitrum to ${crossChainMessageOnArbitrum.target}`
  // );

  // ************************************************

  // const crossChainTokenOnArbitrum = await ethers.deployContract(
  //   "CrossChainToken",
  //   [_lzEndpointArbitrum]
  // );
  // await crossChainTokenOnArbitrum.waitForDeployment();
  // console.log(
  //   `CrossChainToken deployed on Arbitrum to ${crossChainTokenOnArbitrum.target}`
  // );

  if (network.name === "arbitrumTestnet") {
    // console.log("Verifying CrossChainMessage...");
    // await crossChainMessageOnArbitrum.waitForDeployment();
    // await verify(crossChainMessageOnArbitrum.target.toString(), [
    //   _lzEndpointArbitrum,
    // ]);

    // ************************************************

    console.log("Verifying crossChainTokenOnArbitrum...");
    await verify(_crossChainTokenArbitrumAddress, [_lzEndpointArbitrum]);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
