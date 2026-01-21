import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Create a new connection pool
// This manages multiple connections to the database automatically
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test the connection logic
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the PostgreSQL Database successfully!');
  }
});

// Export the query function for use in controllers
export const query = (text, params) => pool.query(text, params);