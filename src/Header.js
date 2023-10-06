import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
    <header>
        <Link to='/' className='logo'>Guzzle Guru</Link>
        <img className='header-img'src='guzzleguru.jpeg'/>
        <nav>
          <Link to="/create">Create new post</Link>
        </nav>
      </header>
    );
}