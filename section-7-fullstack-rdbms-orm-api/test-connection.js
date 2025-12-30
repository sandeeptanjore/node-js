const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
  database: 'mydb',
  ssl: false,
});

async function test() {
  try {
    const client = await pool.connect();
    console.log('✅ Node.js pg driver SUCCESS!');
    const result = await client.query('SELECT version()');
    console.log('Version:', result.rows[0].version);
    client.release();
  } catch (err) {
    console.error('❌ Node.js pg driver FAILED:', err.message);
  }
  await pool.end();
}

test();
