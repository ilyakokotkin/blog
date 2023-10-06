const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new mongoose.Schema({
  title: String,
  summary: String,
  content: String,
  cover: String, 
}, { 
  timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;