import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        DEV@Deakin
      </Link>

      <input
        type="text"
        placeholder="Search..."
        className="search-box"
      />

      <div className="nav-links">
        <Link to="/#about">About</Link>
        <Link to="/#work">Work</Link>
        <Link to="/#contact">Contact</Link>
        <span>Post</span>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  )
}

export default Navbar