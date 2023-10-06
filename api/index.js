const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const uploadMiddleware = multer({ dest: 'uploads/' });
const Post = require('./models/Post.js');
require('dotenv').config();


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));


app.get('/', (req, res) => {
    res.send('test 2');
  });

app.post('/post', uploadMiddleware.single('cover'),async (req,res) => {
  
  const { title, summary, content } = req.body;
  const file = req.file;

  const newPost = new Post({
    title,
    summary,
    content,
    cover: file ? file.filename : null
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: 'Error creating new post', error });
  }
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }); 
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching posts', error });
  }
});


app.listen(4000, () => {
    console.log('Server running on port 4000');
  });
