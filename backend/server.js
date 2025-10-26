require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db'); // MongoDB connection file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const itemsRouter = require('./routes/items');
const ordersRouter = require('./routes/orders');
app.use('/api/items', itemsRouter);
app.use('/api/orders', ordersRouter);

// Default route
app.get('/', (req, res) => {
  res.send('✅ Backend connected to MongoDB successfully!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


