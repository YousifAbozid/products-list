import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

const app: express.Application = express()
dotenv.config()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Server is running')
})

app.listen(port, () => {
  console.log(
    `Server running on port ${port} \nClick on the link to visit it ==> (http://localhost:${port})`
  )
})
