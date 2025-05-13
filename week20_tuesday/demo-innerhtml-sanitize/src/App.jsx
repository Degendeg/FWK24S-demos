import { useState, useEffect } from 'react'
import TopSection from './components/TopSection'
import MiddleSection from './components/MiddleSection'
import BottomSection from './components/BottomSection'
import DOMPurify from 'dompurify'

function App() {
  const [data, setData] = useState(null)
  const query = `
    query {
      home {
        topSection
        middleSection
        bottomSection
      }
    }
  `

  useEffect(() => {
    fetch(import.meta.env.VITE_CMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_CMS_API_KEY}`
      },
      body: JSON.stringify({ query }),
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data.home)
      })
      .catch((err) => console.error("Error fetching from DatoCMS:", err))
  }, [])

  if (!data) {
    return <p className="text-white text-center mt-10">Laddar...</p>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-4">
      <TopSection content={DOMPurify.sanitize(data.topSection)} />
      <MiddleSection content={DOMPurify.sanitize(data.middleSection)} />
      <BottomSection content={DOMPurify.sanitize(data.bottomSection)} />
    </div>
  )
}

export default App
