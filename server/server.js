import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware Configuration
// CORS: Allow requests from different origins (Security)
app.use(cors());
// JSON Parsing: Allow server to read JSON data from body
app.use(express.json());

// Health Check Route
// Verifies if the API is running correctly
app.get('/', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'Project Flaneur API is running!' 
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});