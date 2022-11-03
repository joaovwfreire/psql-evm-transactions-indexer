// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { emitWarning } from 'process';
import connection from "../../connection";

async function getBlockTransactions(blockNumber: any){

  const query = `SELECT * FROM transactions WHERE blocknumber = ${blockNumber.data.blockNumber};`
     
   
    
      const result = await connection.query(query);
      

  return result;
}



type Data = {
  blockNumber: number,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>){
    
    const blockNumber = req.body;
    
    if (req.method === 'POST') {
      try{
        
        const transactions = await getBlockTransactions(blockNumber);
        
       
        res.json( transactions )
      }catch(e){
        res.status(400).json(e)
      }
      }

    
  


  }