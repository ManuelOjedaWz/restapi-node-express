import express from 'express'
import bodyParser from 'body-parser'
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import helmet from 'helmet'

dotenv.config()

const app = express()
const port = process.env.APP_PORT

app.use(helmet())

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.DB_SERVER}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Running with Node and Express')
})

app.listen(port, () => {
  console.log(`Running at port ${port}`)
})
