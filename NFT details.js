// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(anish, description) {
  let nft = {
    name: anish,
    description: description
  };
  nftCollection.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("Name: " + nftCollection[i].name);
    console.log("Description: " + nftCollection[i].description);
    console.log("--------------------");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log("Total NFTs: " + nftCollection.length);
}

// call your functions below this line
mintNFT("NFT 1", "This is my first NFT");
mintNFT("NFT 2", "This is my second NFT");
mintNFT("NFT 3", "This is my third NFT");

listNFTs();

getTotalSupply();
