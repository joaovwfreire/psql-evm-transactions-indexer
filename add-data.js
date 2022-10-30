const { getClient } = require('./get-client');

module.exports.newData = async (data) => {
  const client = await getClient();
  //console.log('INSERT INTO transactions(hash, type, accesslist, blockhash, blocknumber, confirmations, sender, gasprice, maxpriorityfeepergas, maxfeepergas, gaslimit, receiver, value, nonce, data, r, s, v, chainid) VALUES (' + data + ') ON CONFLICT DO NOTHING;');
  if (data){
    let insertRows = await client.query('INSERT INTO transactions(hash, type, accesslist, blockhash, blocknumber, confirmations, sender, gasprice, maxpriorityfeepergas, maxfeepergas, gaslimit, receiver, value, nonce, data, r, s, v, chainid) VALUES (' + data + ') ON CONFLICT DO NOTHING;');
    console.log(`Inserted ${insertRows.rowCount} row(s)\n`);
  }
  
  await client.end();
}
