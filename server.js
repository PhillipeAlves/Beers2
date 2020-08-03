const express = require('express')
const app = express()
const port = 4567

app.use(express.static('public'))

app.get('/', function(req, res) {
    let number = 99;
    res.render('index.ejs', {number: number})
})

app.get('/:number', function(req, res) {

    let number = req.params.number;

    res.render('countDown.ejs', {number: number})
})

app.listen(port, () => {
    console.log(`listening on port#{port}`)
})