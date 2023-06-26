import { ethers } from "hardhat";
import {
  _crossChainTokenArbitrumAddress,
  _crossChainTokenGoerliAddress,
  owner,
} from "../utils/constants";

async function main() {
  const crossChainTokenOnGoerli = await ethers.getContractAt(
    "CrossChainToken",
    _crossChainTokenGoerliAddress
  );

  // ************************************************

  // await crossChainTokenOnGoerli.trustAddress(
  //   _crossChainTokenArbitrumAddress
  // );

  // ************************************************

  console.log('Balance Owner :>> ', await crossChainTokenOnGoerli.balanceOf(owner));

  await crossChainTokenOnGoerli.bridge("10000000000000000000000", {
    value: "123456789000000000",
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
