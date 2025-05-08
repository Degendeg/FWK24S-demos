import { Navigate, Outlet } from 'react-router-dom'

// denna mockfunktion är tänkt att kolla ifall användaren är inloggad, i detta fall webstorage som är satt i handleLogin i Login.jsx
const isAuthenticated = () => {
  return localStorage.getItem('token') === 'fwk24s_jwt_token_here'
}

/*
  här har vi våran protected route
  är man authad: då byts outlet ut mot en komponent som matchar path, så /dashboard blir Dashboard.jsx
  är man inte authad: då blir man redirectad till login
*/
const ProtectedRoute = () => {
  return (
    isAuthenticated() ? <Outlet /> : <Navigate to="/login" />
  )
}

export default ProtectedRoute