const MyContract = artifacts.require("MyContract");
const LinkTokenInterface = artifacts.require("LinkTokenInterface");


const linkTokenAddress = "0x20fE562d797A42Dcb3399062AE9546cd06f63280";
const oracle = "0x4a3fbbb385b5efeb4bc84a25aaadcd644bd09721";

/*
const linkTokenAddress = "0x01be23585060835e02b77ef475b0cc51aa1e0709";
const oracle = "0x7AFe1118Ea78C1eae84ca8feE5C65Bc76CcF879e";
*/
//const jobId = web3.utils.toHex("67c9353f7cc94102b750f84f32027217");
const jobId = web3.utils.toHex("a37ee8100c4c4ab19e30ae8039289b67");
const perCallLink = web3.utils.toWei("0.1");
const depositedLink = web3.utils.toWei("1");

module.exports = async function(deployer) {
  await deployer.deploy(
    MyContract,
    linkTokenAddress,
    oracle,
    jobId,
    perCallLink
  );
  const myContract = await MyContract.deployed();

  const linkToken = await LinkTokenInterface.at(linkTokenAddress);
  await linkToken.transfer(myContract.address, depositedLink);
};
