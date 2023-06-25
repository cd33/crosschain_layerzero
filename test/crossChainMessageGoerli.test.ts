import { ethers } from "hardhat";
import {
  _crossChainMessageArbitrumAddress,
  _crossChainMessageGoerliAddress,
} from "../utils/constants";

async function main() {
  const crossChainMessageOnGoerli = await ethers.getContractAt(
    "CrossChainMessage",
    _crossChainMessageGoerliAddress
  );

  // ************************************************

  // await crossChainMessageOnGoerli.trustAddress(
  //   _crossChainMessageArbitrumAddress
  // );

  // ************************************************

  // await crossChainMessageOnGoerli.send("Hello from Goerli !", {
  //   value: "123456789000000000",
  // });

  // ************************************************

  const message = await crossChainMessageOnGoerli.data()
  console.log('message :>> ', message);
  console.log('message should be Hello from Arbitrum ! :>> ', message === "Hello from Arbitrum !" );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
