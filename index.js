const express = require('express')
const fs = require('fs')

const app = express()
const PORT = 3000




app.get('/home', (req, res) => {
  return res.json({
    Home: 'This is homepage',
  })
})


app.get('/movie', (req, res) => {
  return res.json({
    Movie: 'This is Moviepage',
  })
})


app.get('/cricket', (req, res) => {
  return res.json({
    Cricket: 'This is Cricketpage',
  })
})


app.get('/update', (req, res) => {
  fs.readFile('update.txt', 'utf-8', (err, data) => {
    if (err) {
      return res.send(
        'File not Found',
      )
    }
    res.send(data)
  })
})


app.post('/update', (req, res) => {
  const data = req.body.data
  fs.writeFile('update.txt', data, (err) => {
    if (!err) res.send(data)
  })
})


app.use((req, res) => {
  res.status(404).send('Page not Found!')
})


app.get('*', (req, res) => {
  res.status(404).send('abcd??')
})

app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
