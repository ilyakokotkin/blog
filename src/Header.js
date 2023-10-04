import { Link } from 'react-router-dom'

export default function Header() {
    return (
    <header>
        <Link to='/' className='logo'>Guzzle Guru</Link>
        <nav>
          <Link to="/create">Create new post</Link>
        </nav>
      </header>
    );
}