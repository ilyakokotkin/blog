import React, { useState } from 'react';
import './App.css';
import Post from "./Post";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import CreatePost from "./CreatePost";
import Layout from './Layout';
import SinglePost from './SinglePost'; 

function App() {
  const [posts, setPosts] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Post />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/posts/:id" element={<SinglePost />} />
      </Route>
    </Routes>
  );
}

export default App;
