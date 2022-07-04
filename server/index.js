const express = require('express')

const app = express()

app.get('/hello', function(req, res) {

    res
        .status(200)
        .json({ success: true, data: process.env.secret })
        .end()
})

module.exports = {
    path: '/a',
    handler: app,
}