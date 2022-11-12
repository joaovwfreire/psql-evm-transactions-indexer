# Block Indexing tool
This tool uses Alchemy's apis and cost about 5.6 M computting units per month. 10 CU for eth.getBlock and 16 CU for eth.getBlockTransactions every 12 seconds.
Fetches blocks and it's transactions. Posts the data to a PostgreSQL database. 


## How to get started:

          
    git clone https://github.com/joaovwfreire/psql-evm-transactions-indexer
    cd psql-evm-transactions-indexer
    yarn install
    
### Setup a PSQL database and place it's data at a .env file.

    PG_HOST=x
    PG_PORT=x
    PG_USER=x
    PG_PASSWORD=x
    PG_DATABASE=x    
        
### Place your Alchemy's api key at the .env file

    ALCHEMY_API_KEY=x  

### Run the following command to start indexing blocks:

    pm2 start scripts/blockCatcher.js

### Monitor memory and cpu usage: (usually runs between 40mb - 60mb ram and 0% cpu)

    pm2 list

### To log the block number and the amount of transaction rows inserted

     pm2 logs 
       
    


### Postgres commands:

  #### transactions: 
        
        CREATE TABLE transactions
        (
            hash VARCHAR(70) PRIMARY KEY,
            type integer NOT NULL,
            accesslist integer[],
            blockhash VARCHAR(70) NOT NULL,
            blocknumber BIGINT NOT NULL,
            confirmations integer NOT NULL,
            sender VARCHAR NOT NULL,
            gasprice VARCHAR not null,
            maxpriorityfeepergas VARCHAR not null,
            maxfeepergas VARCHAR not null,
            gaslimit VARCHAR not null,
            receiver VARCHAR(64) NOT NULL,
            value VARCHAR not null,
            nonce BIGINT not null,
            data VARCHAR,
            r VARCHAR(70) NOT NULL,
            s VARCHAR(70) NOT NULL,
            v BIGINT not null,
            chainid integer not null
        );

#### Row insertion

    transactions
        INSERT INTO transactions
        (hash, type, accesslist, blockhash, blocknumber, confirmations, sender, gasprice, maxpriorityfeepergas, maxfeepergas, gaslimit, receiver, value, nonce, data, r, s, v, chainid
        ) VALUES (' + data + ') ON CONFLICT DO NOTHING;

    The data variable is the block.transactions array of transaction objects reformatted into a string to fit PSQL commands. 

#### Old blocks

    The simple ethers.js script picks 130 blocks per minute, which is far from ideal. 


## Further improvements:
- [x] Next.js application
- [ ] Next.js JWT-based access control
- [ ] Block snapshots - backend and smart contract.
- [ ] Efficient catches for older blocks.
- [ ] Alchemy API usage optimization.
- [ ] Block indexing.


