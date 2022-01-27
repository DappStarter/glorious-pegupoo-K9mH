require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remind arrow guess process bridge tell'; 
let testAccounts = [
"0x08a20ed1c40750876beedf4c6043b76b74732c6949ba1ac6638e9e9b321f6fcf",
"0x47d37f7fa3b8779094b8e09f8959205d26a321d3961b18401bd736c8df8df0c9",
"0x505fd49e5486bd106237056c359ad6d6a0be1c845b6716d42f0fe83987344cc2",
"0x7ef07dfed5dbf8a455c7f197b1ad36ec27ebf12eb3c7758ba6a7e1e24c3d5404",
"0x01d8b2d08415230298865024d05b26f0fc053927a550d2d00ece02dd60a028b5",
"0x02723d851a1ea64a09c812f8bd10889bfcb0b341ffa4ed84d403ac4bfacd8872",
"0xba110b2e2b4333d5feb48f054e90b5861ce2ab0a4ac6156e9151941756e8e045",
"0x917e19ebf7f49baf23568752651329e68809c7592bd72e6289870b30a4afe626",
"0xe7660a7495b2e6cd88b0bcebebd82ca32564f0e33bad19831886a8e25821a684",
"0xe234212cd5925b46d839879ea6b94df5337121491a8bedcf9c65b8ab36a52c0a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

