import { ethers } from "hardhat";
import { ReactiveNetwork } from "@reactive-network/sdk";

async function main() {
  // Initialize Reactive Network SDK
  const reactive = new ReactiveNetwork({
    rpcUrl: process.env.REACTIVE_RPC,
    privateKey: process.env.PRIVATE_KEY
  });

  // Deploy Escrow
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy();
  await escrow.deployed();

  // Deploy MarketPlace
  const AsoEbiMarketPlace = await ethers.getContractFactory("AsoEbiMarketPlace");
  const marketplace = await AsoEbiMarketPlace.deploy(escrow.address);
  await marketplace.deployed();

  // Deploy Auction
  const AsoEbiAuction = await ethers.getContractFactory("AsoEbiAution");
  const auction = await AsoEbiAuction.deploy(escrow.address);
  await auction.deployed();

  // Register contracts with Reactive Network
  await reactive.registerContract(escrow.address);
  await reactive.registerContract(marketplace.address);
  await reactive.registerContract(auction.address);

  console.log("Contracts deployed to:", {
    escrow: escrow.address,
    marketplace: marketplace.address,
    auction: auction.address
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 