import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      alert('Invalid email or password')
    }
  }

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="auth-box">
          <h1>Login</h1>

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
        <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
      </div>

      <Footer />
    </>
  )
}

export default Login