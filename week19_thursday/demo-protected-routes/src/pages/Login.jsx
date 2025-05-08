import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault() // förhindra sida att ladda om, för form gör en callback
    // mockad logik, om `user123` och `pwd123` matas in så beviljas man access med att en "JWT" sätts i web storage
    if (username === import.meta.env.VITE_MOCK_USER && password === import.meta.env.VITE_MOCK_PWD) {
      localStorage.setItem('token', 'fwk24s_jwt_token_here')
      navigate('/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login 👤</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          Login
        </button>
      </form>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md mt-5">
        <details>
          <summary>credentials here 🆔</summary>
          user123 : pwd123
        </details>
      </div>
    </div>
  )
}

export default Login