const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const {home, styles, script, sig, Ar, background} = require('./controllers/pageCtrl')
app.get('/', home)
app.get('/css', styles)
app.get('/js', script)
app.get('/sig', sig)
app.get('/Ar', Ar)
app.get('/background', background)


const { PORT } = process.env

app.listen(PORT, () => console.log((`server listening on port ${PORT}`)))


