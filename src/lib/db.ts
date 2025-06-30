import 'dotenv/config';

import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function getProducts() {
  const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
  return result.rows;
}
