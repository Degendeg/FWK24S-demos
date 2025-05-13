import { useRef, useState } from 'react'
import purify from 'dompurify'
import './App.css'

function App() {
  const [value, setValue] = useState("<img onError=alert('Hacked!') src='fasfasfsfa.com'>")
  const resultRef = useRef(null)

  const params = new URLSearchParams(window.location.search)
  const userInput = params.get('q')

  const resultRefHandler = () => {
    resultRef.current.innerHTML = purify.sanitize(value, {
      FORBID_TAGS: ['marquee', 'img', 'h1']
    })
  }
  return (
    <>
      <h1>Enter something dangerous here</h1>
      <textarea className="xss-textarea" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
      <br />
      <button className="xss-btn" onClick={resultRefHandler}>Send</button>
      <div ref={resultRef}></div>
      <div dangerouslySetInnerHTML={{ __html: userInput }}></div>
    </>
  )
}

export default App
