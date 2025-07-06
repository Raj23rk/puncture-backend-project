const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const setupSwagger = require('./config/swagger');

// Load .env
dotenv.config();

// DB
connectDB();

// Init Express
const app = express();
app.use(cors());
app.use(express.json());

// Swagger docs
setupSwagger(app);

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📘 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
