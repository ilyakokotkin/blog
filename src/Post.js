import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the server
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.log('Error fetching posts:', error));
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <div>
    {posts.map(post => (
      <div key={post._id} className='post'>
        <div className='image'>
        <img src={`http://localhost:4000/uploads/${post.cover}`} alt="Post cover" />
        </div>
        <div className='texts'>
            <h2><Link to={`/posts/${post._id}`} style={{ textDecoration: 'none', color: 'inherit'}}>{post.title}</Link></h2>
            <p className='info'>
              <a className='author'>Ilya Kokotkin</a>
              <time>{new Date(post.createdAt).toLocaleString()}</time>
            </p>
            <p className='summary'>{post.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
