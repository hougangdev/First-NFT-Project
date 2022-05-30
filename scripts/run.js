const main = async () => {
    //Generate the files we need to work with under the artifacts directory.
    const nftContractFactory  = await hre.ethers.getContractFactory('MyEpicNFT');
    //Create local ETH network and destroys after script is complete.
    const nftContract = await nftContractFactory.deploy();
    //wait until contract is official mined before deploying to our local blockchain.
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    //Call the function
    let txn = await nftContract.makeAnEpicNFT()
    //wait for it to be minted
    await txn.wait()

    //mint another NFT for fun
    txn = await nftContract.makeAnEpicNFT()
    //wait for it to be minted
    await txn.wait()
};


const runMain = async () => {

    try {
        await main();
        process.exit(0);   
    }   catch(error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();