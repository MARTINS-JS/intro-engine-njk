const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.set('view engine', 'njk')

nunjucks.configure('views', {
  express: app
})

app.get('/', function(req, res) {
  return res.render('home')
})

app.listen(8080, function() {
  console.log('> server started...')
})
