import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import ProtectedRoute from '../components/ProtectedRoute'
import Navbar from './Navbar'
import Home from '../pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* Här är våran wrapper som pekar på ProtectedRoute komponenten */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App