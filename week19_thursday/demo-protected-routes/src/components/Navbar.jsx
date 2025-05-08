import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex gap-4 justify-center">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/login" className="hover:underline">Login</Link>
        </li>
        <li>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link to="/settings" className="hover:underline">Settings</Link>
        </li>
        <li>
          <button class="bg-red-500 hover:bg-red-800 text-white font-bold text-xs p-1 cursor-pointer"
            onClick={() => localStorage.removeItem('token')}>
            Delete JWT
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar