import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const handleMessage = (event) => {
    setMessage(event.target.value)
    sessionStorage.setItem('message', event.target.value)
  }

  return (
    <>
      <input type="text" placeholder="message" value={message} onChange={handleMessage} />
      <code>Message is: {message}</code><br />
      <code>sessionStorage message is: {sessionStorage.getItem('message')}</code>
    </>
  )
}

export default App
