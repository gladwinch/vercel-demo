import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())

app.get('/hello', function(req, res) {

    res
        .status(200)
        .json({ success: true })
        .end()
})

export default app