import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { oAuthCallback } from './routes/oauth.js'

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.use('/oauth/ezeep', oAuthCallback)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})
