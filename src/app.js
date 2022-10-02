const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
const path = require('path')
const db = require('./db/mongoose_db')
const cookieParser = require('cookie-parser')
// const router = require('./routes')

dotenv.config()
db()
const PORT = process.env.PORT || 3000

const app = express()

// setup view engine (ejs - Embedded JS Template)
app.set('view engine', 'ejs')
app.use(express.static(path.join("assets")))
app.use(express.json())
app.use(cookieParser())

// start server
app.listen(PORT, () => {
  console.log('App running at http://localhost:' + PORT)
})

// setup logger
app.use(morgan('dev'))

// app.use(router);

app.use((req, res) => {
    res.status(404).render('404')
})
