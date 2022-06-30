const express = require('express')

const app = express()

app.get('/hello', function(req, res) {

    res
        .status(200)
        .json({ success: true })
        .end()
})

module.exports = {
    path: '/',
    handler: app,
}

// Start standalone server if directly running
if (require.main === module) {
    const port = process.env.PORT || 3001
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`API server listening on port ${port}`)
    })
}