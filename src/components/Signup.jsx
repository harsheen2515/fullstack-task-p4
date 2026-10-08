import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (e) => {
    e.preventDefault()

    if (!fullName || !email || !password) {
      alert('Please fill in all fields')
      return
    }

    if (password.length < 6) {
    alert('Password must be at least 6 characters')
    return
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      await setDoc(doc(db, 'users', user.uid), {
        fullName: fullName,
        email: email
      })

      alert('Account created successfully')

      window.location.href = '/login'
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  return (
    <>
      <Navbar />

      <div className="auth-page">
      <div className="auth-box">
        <h1>Sign Up</h1>

          <form className="auth-form" onSubmit={handleSignUp}>
            <input
              type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

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

          <button type="submit">Sign Up</button>
        </form>
        <p>
        Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
      </div>

      <Footer />
    </>
  )
}

export default SignUp