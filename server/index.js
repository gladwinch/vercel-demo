const express = require('express')

const app = express()

app.get('/hello', function(req, res) {

    let oldVal = process.env.VERCEL_URL
    process.env.VERCEL_URL = "my new value"
    let newVal = process.env.VERCEL_URL
    res
        .status(200)
        .json({ success: true, api: 'alex', data: process.env.VERCEL_URL, oldVal, newVal })
        .end()
})


console.log('VERCEL: ------', process.env.VERCEL)
console.log('VERCEL_URL: ------', process.env.VERCEL_URL)

module.exports = {
    path: '/api',
    handler: app,
}