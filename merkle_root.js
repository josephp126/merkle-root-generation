//OG and WL root

const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');
const wllist = require("./wllist.json");
const oglist = require("./oglist.json");

let whitelistAddresses = wllist.wllist;
let oglistAddresses = oglist.oglist;
const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});

const ogleafNodes = oglistAddresses.map(addr => keccak256(addr));
const ogmerkleTree = new MerkleTree(ogleafNodes, keccak256, { sortPairs: true});

// 4. Get root hash of the `merkleeTree` in hexadecimal format (0x)
// Print out the Entire Merkle Tree.
const rootHashWL = merkleTree.getHexRoot();
const rootHashOG = ogmerkleTree.getHexRoot();
console.log('Whitelist Merkle Tree\n', merkleTree.toString());
console.log("WLRoot Hash: ", rootHashWL);
console.log('OGlist Merkle Tree\n', ogmerkleTree.toString());
console.log("OGRoot Hash: ", rootHashOG);