const express = require('exprexx')

const app = express()

app.get('/hello', function(req, res) {

    res
        .status(200)
        .json({ success: true })
        .end()
})

module.exports = app