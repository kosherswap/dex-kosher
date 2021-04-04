// import { bytecode } from './build/contracts/PancakePair.json'
const bytecode = require('./build/contracts/PancakePair.json').bytecode;
// const bytecode = require('./build/contracts/PancakeFactory.json').bytecode;
// const bytecode = require('./build/contracts/PancakeERC20.json').bytecode;
const kek = require('@ethersproject/solidity/')
// import { keccak256 } from '@ethersproject/solidity'

const COMPUTED_INIT_CODE_HASH = kek.keccak256(['bytes'], [bytecode]);

console.log(COMPUTED_INIT_CODE_HASH);