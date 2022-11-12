const { ethers } = require("ethers");
require('dotenv').config()
const { newData } = require('../add-data');

const startingBlock = 2001000;
const endingBlock = 2001500;
let lastCaughtBlock = 0;

async function catchOldBlocks(startingBlock, endingBlock){
    
    const provider = new ethers.providers.AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY);
    if (lastCaughtBlock > endingBlock) {
      console.log(`Reached block number ${endingBlock}\n`);
      console.log(`Finishing execution\n`);
      process.exit();
      
    } else {
      if (lastCaughtBlock == 0){
        lastCaughtBlock = startingBlock - 1;
      }
    const block  = await provider.getBlockWithTransactions(lastCaughtBlock)
  
    console.log(`Block ${block.number} processed.`);
    let valuesString = '';
    block.transactions.map((transaction, index) => {
      let maxpriorityfeepergas = 1
      let  maxfeepergas = 1
      if (transaction.maxPriorityFeePerGas){maxpriorityfeepergas = transaction.maxPriorityFeePerGas}
      if (transaction.maxFeePerGas){maxfeepergas = transaction.maxFeePerGas}
  
      if(index == 0 && block.transactions.length == 1){
      valuesString +=`'${transaction.hash}', '${transaction.type}', '{1}', '${transaction.blockHash}','${transaction.blockNumber}','${transaction.confirmations}','${transaction.from}','${transaction.gasPrice}','${maxpriorityfeepergas}','${maxfeepergas}','${transaction.gasLimit}','${transaction.to}','${transaction.value}','${transaction.nonce}','${transaction.data}','${transaction.r}','${transaction.s}','${transaction.v}','${transaction.chainId}'  `;
      } else if(index == 0){
        valuesString +=`'${transaction.hash}', '${transaction.type}', '{1}', '${transaction.blockHash}','${transaction.blockNumber}','${transaction.confirmations}','${transaction.from}','${transaction.gasPrice}','${maxpriorityfeepergas}','${maxfeepergas}','${transaction.gasLimit}','${transaction.to}','${transaction.value}','${transaction.nonce}','${transaction.data}','${transaction.r}','${transaction.s}','${transaction.v}','${transaction.chainId}'),  `;
        } else if(index != block.transactions.length - 1){
        valuesString +=`('${transaction.hash}', '${transaction.type}', '{1}', '${transaction.blockHash}','${transaction.blockNumber}','${transaction.confirmations}','${transaction.from}','${transaction.gasPrice}','${maxpriorityfeepergas}','${maxfeepergas}','${transaction.gasLimit}','${transaction.to}','${transaction.value}','${transaction.nonce}','${transaction.data}','${transaction.r}','${transaction.s}','${transaction.v}','${transaction.chainId}'),  `;
    }
      else {
      valuesString +=`('${transaction.hash}', '${transaction.type}', '{1}', '${transaction.blockHash}','${transaction.blockNumber}','${transaction.confirmations}','${transaction.from}','${transaction.gasPrice}','${maxpriorityfeepergas}','${maxfeepergas}','${transaction.gasLimit}','${transaction.to}','${transaction.value}','${transaction.nonce}','${transaction.data}','${transaction.r}','${transaction.s}','${transaction.v}','${transaction.chainId}'`;
      }
    });
    newData(valuesString); 
    lastCaughtBlock += 1;
    console.log(`Attempting to process ${lastCaughtBlock}.`);
  } 
  catchOldBlocks(lastCaughtBlock, endingBlock);
}
  catchOldBlocks(startingBlock, endingBlock);

