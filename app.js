import express  from 'express'
import bodyParser from 'body-parser'

import router from './routes/route.js'

const app = express()

//using json data format
app.use(bodyParser.json(true))

app.use('/user',router)

app.listen(3000,() => console.log('server running...'))