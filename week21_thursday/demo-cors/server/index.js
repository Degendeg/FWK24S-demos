const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3333

app.use(cors())
app.use(bodyParser.json())

const mockData = {
  message: 'Hello FWK24S!'
}

app.get('/api/data', (req, res) => {
  res.json(mockData)
})

app.post('/api/echo', (req, res) => {
  const { testMessage } = req.body
  res.json('POST kördes! Du skickade ' + testMessage)
})

app.delete('/api/delete', (req, res) => {
  res.json('DELETE kördes! Inget togs bort men endpointen nåddes fram.')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})