const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  res.send('About Page')
})
app.get('/contact', (req, res) => {
  res.send('Contact Page')
})
app.get('/meow', (req, res) => {
  res.send('meow World!')
})
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})