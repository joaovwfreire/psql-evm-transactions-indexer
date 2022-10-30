const { ethers } = require("ethers");
require('dotenv').config()
const { newData } = require('../add-data');
async function main() {
  const provider = new ethers.providers.AlchemyProvider('goerli', process.env.ALCHEMY_API_KEY);

  setInterval(function(){
    let main = async () => {
  const block  = await provider.getBlockWithTransactions('latest')

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
  
  //console.log({valuesString})
  newData(valuesString); 
} 
  main();
}, 12000)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
