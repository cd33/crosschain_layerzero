import { ethers, network } from "hardhat";
import verify from "../utils/verify";
import {
  _crossChainTokenGoerliAddress,
  _lzEndpointGoerli,
} from "../utils/constants";

async function main() {
  // const crossChainMessageOnGoerli = await ethers.deployContract(
  //   "CrossChainMessage",
  //   [_lzEndpointGoerli]
  // );
  // await crossChainMessageOnGoerli.waitForDeployment();
  // console.log(
  //   `CrossChainMessage deployed on Goerli to ${crossChainMessageOnGoerli.target}`
  // );

  // ************************************************

  // const crossChainTokenOnGoerli = await ethers.deployContract(
  //   "CrossChainToken",
  //   [_lzEndpointGoerli]
  // );
  // await crossChainTokenOnGoerli.waitForDeployment();
  // console.log(
  //   `CrossChainToken deployed on Goerli to ${crossChainTokenOnGoerli.target}`
  // );

  // ************************************************

  if (network.name === "goerli") {
    // console.log("Verifying crossChainMessageOnGoerli...");
    // await crossChainMessageOnGoerli.waitForDeployment();
    // await verify(crossChainMessageOnGoerli.target.toString(), [
    //   _lzEndpointGoerli,
    // ]);

    // ************************************************

    console.log("Verifying crossChainTokenOnGoerli...");
    await verify(_crossChainTokenGoerliAddress, [_lzEndpointGoerli]);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
