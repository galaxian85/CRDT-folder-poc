import express from 'express'

const app = express()
const port = 3000

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.redirect('/index.html')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})