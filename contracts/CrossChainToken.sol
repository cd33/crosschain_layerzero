// SPDX-License-Identifier: MIT
pragma solidity >=0.8.17;

import "@layerzerolabs/solidity-examples/contracts/lzApp/NonblockingLzApp.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CrossChainToken is NonblockingLzApp, ERC20 {
    uint16 destChainId;
    
    constructor(address _lzEndpoint) NonblockingLzApp(_lzEndpoint) ERC20("BibsCoin", "BIBS") {
        if (_lzEndpoint == 0x6aB5Ae6822647046626e83ee6dB8187151E1d5ab) destChainId = 10121;
        if (_lzEndpoint == 0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23) destChainId = 10143;
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function _nonblockingLzReceive(uint16, bytes memory, uint64, bytes memory _payload) internal override {
       (address toAddress, uint amount) = abi.decode(_payload, (address,uint));
       _mint(toAddress, amount);
    }

    function bridge(uint _amount) public payable {
        _burn(msg.sender, _amount);
        bytes memory payload = abi.encode(msg.sender, _amount);
        _lzSend(destChainId, payload, payable(msg.sender), address(0x0), bytes(""), msg.value);
    }

    function trustAddress(address _otherContract) public onlyOwner {
        trustedRemoteLookup[destChainId] = abi.encodePacked(_otherContract, address(this));   
    }
}