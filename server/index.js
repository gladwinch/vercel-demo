import express from 'express'

const app = express()

app.get('/hello', function(req, res) {

    res
        .status(200)
        .json({ success: true })
        .end()
})

export default app