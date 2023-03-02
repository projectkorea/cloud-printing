import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { ezeepOAuthCallback } from './routes/ezeep.js'
import { kakaoOAuthCallback } from './routes/kakao.js'

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.use('/oauth/ezeep', ezeepOAuthCallback)
app.use('/oauth/kakao', kakaoOAuthCallback)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})
