const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const User = require('./user');

const app = express();
const PORT = process.env.PORT || 7000;

connectDB();

app.use(bodyParser.json());

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Add User - POST
app.post('/users', async (req, res) => {
    try {
      const { name, role, email, phoneNumber } = req.body;
      const user = new User({ name, role, email, phoneNumber });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get all Users - GET
  app.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Get Single User by ID - GET
  app.get('/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Delete Single User by ID - DELETE
  app.delete('/users/:id', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update User by ID - PUT
  app.put('/users/:id', async (req, res) => {
    try {
      const { name, role, email, phoneNumber } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { name, role, email, phoneNumber },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });