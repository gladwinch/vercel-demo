const express = require('express')

const app = express()

app.get('/hello', function(req, res) {

    let oldVal = process.env.VERCEL_URL
    process.env.VERCEL_URL = "my new value"
    let newVal = process.env.VERCEL_URL

    let isVercel = false 

    if(process.env.VERCEL === 1) isVercel = true
    res
        .status(200)
        .json({ success: true, 
            api: 'alex', 
            data: process.env.VERCEL_URL, 
            oldVal, newVal, 
            isVercels: process.env.VERCEL,
            isVercel
        })
        .end()
})

module.exports = {
    path: '/api',
    handler: app,
}