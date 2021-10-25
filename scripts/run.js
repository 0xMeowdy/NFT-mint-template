const main = async () => {
	// compile and generate artifacts for contract
	// hre is hardhat runtime environment, basically npx hardhat triggers it
	// so you don't need to import from hardhat
	const nftContractFactory = await hre.ethers.getContractFactory('MyNFT')
	// deploy contract to specified blockchain in config
	const nftContract = await nftContractFactory.deploy()
	// wait for contract to be deployed
	await nftContract.deployed()
	// log the address of where it has been deployed
	console.log('Contract deployed to:', nftContract.address)

	// Mint an NFT from the contract
	let txn = await nftContract.mintAnNFT()
	// Wait for it to be mined.
	await txn.wait()

	// Mint another NFT.
	txn = await nftContract.mintAnNFT()
	// Wait for it to be mined.
	await txn.wait()
}

// give an error if the above doesn't work, else run it and close the program
const runMain = async () => {
	try {
		await main()
		process.exit(0)
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

runMain()
