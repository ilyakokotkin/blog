import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SinglePost() {
    const [post, setPost] = useState(null);
    const { id } = useParams(); // Get the ID from the URL

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
          .then(response => response.json())
          .then(data => setPost(data))
          .catch(error => console.log('Error fetching single post:', error));
      }, [id]);
    
      return (
        <div>
          {post ? (
            <>
              <h1>{post.title}</h1>
              <p>{post.summary}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              {/* Add more fields as needed */}
            </>
          ) : (
            'Loading...'
          )}
        </div>
      );
    }