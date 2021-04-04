const Router = artifacts.require('PancakeRouter01.sol');
const WBNB = artifacts.require('WBNB.sol');

module.exports = async function (deployer, _network, addresses) {
    let wbnb;
    const FACTORY_ADDRESS = '0x1169CDb77d969726e0645BB33dD274c3Cf359C9d';
    // '0xa8AEF8E0C505065b0d0BEc7d11E798e632f93BbD';


    if (_network === 'mainnet') {
        wbnb = await WBNB.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    } else {
        await deployer.deploy(WBNB);
        wbnb = await WBNB.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, wbnb.address);
};