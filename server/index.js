const express = require('express')

const app = express()

app.get('/hello', function(req, res) {

    res
        .status(200)
        .json({ success: true, api: 'alex', data: process.env.DEPLOY_PRIME_URL })
        .end()
})

module.exports = {
    path: '/api',
    handler: app,
}