import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"

function App() {
  const [captchaValue, setCaptchaValue] = useState(null)
  const [mode, setMode] = useState("login")
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleCaptcha = (value) => setCaptchaValue(value)

  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaValue) {
      alert("reCAPTCHA kunde ej valideras, försök igen!")
      return
    }
    alert(`${mode === "login" ? "Du är nu inloggad" : "Du är nu registrerad"}!`)
  }

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${mode === "login" ? "bg-gray-200" : "bg-gray-300"} `}>
      <div className="bg-white shadow-lg rounded p-6 w-full max-w-sm mb-[10vh]">
        <h1 className="text-xl font-semibold mb-4 text-center">
          {mode === "login" ? "Logga in" : "Registrera dig"}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="test" value="hello_world_123" />
          <input
            name="email"
            type="email"
            placeholder="E-post"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Lösenord"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
          <ReCAPTCHA
            className="ml-4"
            sitekey={import.meta.env.VITE_SITE_KEY}
            onChange={handleCaptcha}
          />
          <button disabled={!captchaValue} className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer disabled:cursor-default disabled:opacity-50">
            {mode === "login" ? "Logga in" : "Registrera"}
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          {mode === "login" ? "Har du inget konto?" : "Har du redan ett konto?"}{" "}
          <button
            type="button"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            className="text-blue-600 underline ml-1 cursor-pointer"
          >
            {mode === "login" ? "Registrera dig" : "Logga in"}
          </button>
        </p>
      </div>
    </div>
  )
}

export default App
