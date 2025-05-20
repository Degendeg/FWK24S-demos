import bcrypt from "bcryptjs"
import { useState } from "react"
import { EyeIcon, EyeSlashIcon, ArrowPathIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [hashedPassword, setHashedPassword] = useState('')
  const [loginInput, setLoginInput] = useState('')
  const [match, setMatch] = useState(null)
  const [loading, setLoading] = useState(null)
  const [rounds, setRounds] = useState(12)

  const handleHash = async () => {
    setLoading(true)
    setHashedPassword('')

    const salt = await bcrypt.genSalt(rounds)
    const hash = await bcrypt.hash(password, salt)

    setHashedPassword(hash)
    setLoading(false)
    setMatch(null)
  }

  const handleCompare = async () => {
    setLoading(true)

    const isMatch = await bcrypt.compare(loginInput, hashedPassword)
    setMatch(isMatch)

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center p-4 overflow-y-hidden">
      <div className="relative bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-6">
        <a
          href="https://bcrypt-generator.com/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline absolute top-1 right-2 text-sm"
        >
          bcryptgenerator
        </a>
        <h1 className="text-2xl font-bold text-center">
          <a href="https://www.npmjs.com/package/bcryptjs" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
            bcryptjs</a> demo
        </h1>

        <div>
          <label className="block font-medium mb-1">1. Skriv ett lösenord:</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full border p-2 rounded pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer"
            >
              {showPassword ? (
                <EyeSlashIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          <div className="inline-flex mt-2">
            <button onClick={() => setRounds(prev => prev + 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
              <PlusIcon className="w-5 h-5" />
            </button>
            <button onClick={() => rounds > 0 && setRounds(prev => prev - 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
              <MinusIcon className="w-5 h-5" />
            </button>
            <span className="translate-y-1/6 ml-2"><strong>Rounds</strong>: {rounds}</span>
          </div>
          <button
            onClick={handleHash}
            disabled={password.length < 3}
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            Hasha lösenord
          </button>
        </div>

        {hashedPassword && (
          <div>
            <label className="block font-medium mb-1">Hashat lösenord:</label>
            <div className="bg-gray-200 p-2 rounded break-all select-all font-mono">{hashedPassword}</div>
          </div>
        )}

        {hashedPassword && (
          <div>
            <label className="block font-medium mb-1 mt-4">
              2. Testa att logga in:
            </label>
            <input
              type="password"
              className="w-full border p-2 rounded"
              placeholder="Skriv lösenordet igen"
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
            />
            <button
              onClick={handleCompare}
              className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Jämför
            </button>
          </div>
        )}

        {match !== null && (
          <div className={`text-center font-bold text-lg ${match ? 'text-green-600' : 'text-red-600'}`}>
            {match ? 'Lösenordet stämmer!' : 'Fel lösenord'}
          </div>
        )}

        {loading && (
          <div className="w-full flex justify-center mt-6 animate-spin">
            <ArrowPathIcon className="w-5 h-5" />
          </div>
        )}
      </div>
    </div>
  )
}

export default App
