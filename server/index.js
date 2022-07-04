const express = require('express')

const app = express()

app.get('/hello', function(req, res) {

    res
        .status(200)
        .json({ success: true, api: 'alex', data: process.env.secret })
        .end()
})

module.exports = {
    path: '/api',
    handler: app,
}