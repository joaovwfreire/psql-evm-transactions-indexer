This is a [RainbowKit](https://rainbowkit.com) + [wagmi](https://wagmi.sh) + [Next.js](https://nextjs.org/) project bootstrapped with [`create-rainbowkit`](https://github.com/rainbow-me/rainbowkit/tree/main/packages/create-rainbowkit).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database connection

You can connect to the Postgres database by creating a .env/.env.local/.env.test.local/.env.development.local file and placing values that refer to the same database that stores the transactions processed by the indexer. 

## Quick briefing
This Next.js application offers wallet connection and displays transactions from the last block indexed via Next's rpc requests. For this logic to work, only a single ethers rpc request is needed. From that point on, all requests are directed to the connected Database, hence saving lots of API provider computing resources. 

## Further improvements:
- [ ] User dashboard
- [ ] Block snapshots - frontend 
- [ ] Registering logic

