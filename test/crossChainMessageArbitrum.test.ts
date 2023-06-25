import { ethers } from "hardhat";
import {
  _crossChainMessageArbitrumAddress,
  _crossChainMessageGoerliAddress,
} from "../utils/constants";

async function main() {
  const crossChainMessageOnArbitrum = await ethers.getContractAt(
    "CrossChainMessage",
    _crossChainMessageArbitrumAddress
  );

  // ************************************************

  // await crossChainMessageOnArbitrum.trustAddress(
  //   _crossChainMessageGoerliAddress
  // );

  // ************************************************

  // await crossChainMessageOnArbitrum.send("Hello from Arbitrum !", {
  //   value: "123456789000000000",
  // });

  // ************************************************

  const message = await crossChainMessageOnArbitrum.data()
  console.log('message should be Hello from Goerli ! :>> ', message === "Hello from Goerli !" );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
