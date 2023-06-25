import { ethers } from "hardhat";
import {
  _crossChainTokenArbitrumAddress,
  _crossChainTokenGoerliAddress,
  owner,
} from "../utils/constants";

async function main() {
  const crossChainTokenOnArbitrum = await ethers.getContractAt(
    "CrossChainToken",
    _crossChainTokenArbitrumAddress
  );

  // ************************************************

  // await crossChainTokenOnArbitrum.trustAddress(
  //   _crossChainTokenGoerliAddress
  // );

  // ************************************************

  // console.log('Balance Owner :>> ', await crossChainTokenOnArbitrum.balanceOf(owner));

  // await crossChainTokenOnArbitrum.bridge("1000000000000000000000", {
  //   value: "123456789000000000",
  // });
  
  // ************************************************

  console.log('Balance Owner :>> ', await crossChainTokenOnArbitrum.balanceOf(owner));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
