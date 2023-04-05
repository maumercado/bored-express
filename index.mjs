import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import bunyanLogger from 'express-bunyan-logger'
import express from 'express'

import activityRoute from './routes/activities.mjs'
import userRoute from './routes/users.mjs'

const { PORT: port = 3000, NODE_ENV } = process.env

const app = express()

/**
 * Initialize DB
 */
export const db = new Low(new JSONFile('db.json'))
await db.read()
db.data ||= { users: [] }
//

NODE_ENV !== 'test' && app.use(bunyanLogger())

app.use(bodyParser.json())
app.use(activityRoute)
app.use(userRoute)

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(port, () => {
    console.log('Server listening on port 3000')
  })
}

export default app
