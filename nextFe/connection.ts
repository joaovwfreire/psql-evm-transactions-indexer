import { Pool } from 'pg';
let connection: any;

if (!connection){
  connection = new Pool({
    user: process.env.NEXT_PUBLIC_PG_USER,
    password: process.env.NEXT_PUBLIC_PG_PASSWORD,
    host: process.env.NEXT_PUBLIC_PG_HOST,
    port: process.env.NEXT_PUBLIC_PG_PORT as number | undefined,
    database: process.env.NEXT_PUBLIC_PG_DATABASE,
  });
}

export default connection;