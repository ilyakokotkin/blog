import React, { useEffect, useState } from 'react';

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
            {/* You can replace this with the actual image path if you are storing images */}
            <img src="https://techcrunch.com/wp-content/uploads/2022/09/instacart-logo.jpg?w=730&crop=1" alt=""></img>
          </div>
          <div className='texts'>
            <h2>{post.title}</h2>
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
