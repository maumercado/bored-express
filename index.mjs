import { fileURLToPath } from 'url'
import express from 'express'
import bodyParser from 'body-parser'
import bunyanLogger from 'express-bunyan-logger'
import activityRoute from './routes/activities.mjs'

const { PORT: port = 3000, NODE_ENV } = process.env

const app = express()

NODE_ENV !== 'test' && app.use(bunyanLogger())

app.use(bodyParser.json())
app.use(activityRoute)

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(port, () => {
    console.log('Server listening on port 3000')
  })
}

export default app
