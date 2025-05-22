import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [response, setResponse] = useState(null)
  const [testMessage, setTestMessage] = useState('')

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + '/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        if (error.message === 'Failed to fetch') {
          setError('Något gick fel, vänligen försök igen!')
        } else {
          setError(error.message)
        }
      })
  }, [])



  return (
    <div className="App">
      <section className="App-section">
        <h1>
          <a href="https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/" target="_blank">
            CORS
          </a>
          DEMO
        </h1>
        {data && <h2>{data.message}</h2>}
        {!data && !error && <p>Loading..</p>}
        {error && <p>{error}</p>}
      </section>
    </div>
  )
}

export default App
