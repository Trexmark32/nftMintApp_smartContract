import { ethers } from "hardhat";

async function main() {
    const Shark = await ethers.getContractFactory("Shark");
    const shark = await Shark.deploy();
    await shark.deployed();
    console.log("deployed at", shark.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
