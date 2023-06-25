# crosschain_layerzero
Crosschain communications, passing a string between Goerli and Arbitrum Goerli using LayerZero

## Instructions
Use the trustAddress(address _otherContract) function to approve the other contract address on both deployed contracts.
Once that's done you can send messages both ways using send("Hello World")

Note that you will need to call the send function with some funds by putting a value amount in. I sent 12345678 gwei which seemed to work on testnet and any surplus is refunded back to your wallet.

For tokens, Use the trustAddress(address _otherContract), bridge(anAmount), wait few minutes and check the balanceOf of the contracts

## More Information
https://jamesbachini.com/layerzero-example/