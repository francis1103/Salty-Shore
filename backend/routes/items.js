const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Import MongoDB model

// GET all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find(); // Fetch all items from MongoDB
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new item
router.post('/', async (req, res) => {
  try {
    const { name, price, description } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: 'Name and price are required' });
    }

    const newItem = new Item({ name, price, description });
    const savedItem = await newItem.save(); // Save to MongoDB
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE an item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

