const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb+srv://chanuka-san:YOQ8mBWIFnru2JZ9@cluster0.j9yqxys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/local';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDBcd mern-app-frontend
mongoose.connect(mongoURI
)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// CORS Middleware
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Define a Mongoose model for your entry data
const Entry = mongoose.model('Entry', {
  title: { type: String, required: true },
  content: { type: String, required: true }
});

// Route to create a new entry
app.post('/entries', async (req, res) => {
    console.log(`hello iewncsoo`)
  const { title, content } = req.body;

  try {
    const newEntry = new Entry({ title, content });
    await newEntry.save();
    res.status(201).json({ message: 'Entry created successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating entry' });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
