const express = require('express')
const app = express()
const port = 3000
// Using path function to join with dirname to serve html using express
const path = require('path');
// staticPath is variable viz connecting the __dirname to public folder
const staticPath = path.join(__dirname,'public');
// app.use(express.static(path.join(__dirname  ,'/index.html')))
// console.log(path.join(__dirname,'public'))
// using ap.use function and express static middleware to serve static files
app.use(express.static(staticPath))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})