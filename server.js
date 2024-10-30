const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.set('view engine', 'njk')
app.use(express.static('./'))

nunjucks.configure('views', {
  express: app
})

app.get('/', function(req, res) {
  return res.render('pages/home', { conditional: true })
})

app.get('/about', function(req, res) {
  return res.render('pages/about', { conditional: false })
})

app.listen(8080, function() {
  console.log('> server started...')
})
