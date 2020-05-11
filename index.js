console.log(“welcome to publicbytes”)

const express = require('express')
const app = express()
const port = 80;

app.get('/', (req, res) => res.send('Welcome to publicbytes!'))

app.listen(port, () => console.log(`Publicbytes listening at http://localhost:${port}`))
