import { useState } from "react"

function App() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    avatar: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const isValidUrl = (url) => {
    try {
      return Boolean(new URL(url))
    } catch {
      return false
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Registrera dig</h2>

        <input
          type="text"
          name="username"
          placeholder="Användarnamn"
          value={form.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="password"
          name="password"
          placeholder="Lösenord"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="email"
          name="email"
          placeholder="E-post"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <div className="relative w-full">
          <input
            type="url"
            name="avatar"
            placeholder="Avatar URL, eg: https://picsum.photos/75/75"
            value={form.avatar}
            onChange={handleChange}
            className="w-full px-4 py-2 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="button"
            onClick={() =>
              setForm({ ...form, avatar: `https://picsum.photos/75?random=${Math.floor(Math.random() * 1000)}` })
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 text-lg cursor-pointer"
            title="Slumpa avatar"
          >
            🎲
          </button>
        </div>

        {isValidUrl(form.avatar) && (
          <div className="w-24 h-24 mx-auto mt-4">
            <img
              src={form.avatar}
              alt="Avatar Preview"
              className="w-full h-full object-cover rounded-full shadow-md border"
            />
          </div>
        )}

        <button
          onClick={() => alert("Registrerad!")}
          disabled={Object.values(form).some(v => !v)}
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 disabled:bg-blue-100 transition"
        >
          Registrera
        </button>
      </div>
    </div>
  )
}

export default App