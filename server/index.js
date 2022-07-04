const express = require('express')

const app = express()

app.get('/hello', function(req, res) {

    res
        .status(200)
        .json({ success: true, data: process.env.NOW_URL })
        .end()
})

module.exports = {
    path: '/a',
    handler: app,
}