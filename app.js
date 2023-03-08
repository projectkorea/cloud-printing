import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { ezeepOAuthCallback } from './routes/ezeep.js'
import { kakaoOAuthCallback } from './routes/kakao.js'
import { githubOAuthCallback } from './routes/github.js'
import { githubLoginPage, kakaoLoginPage } from './routes/login.js'

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.use('/login/kakao', kakaoLoginPage)
app.use('/login/github', githubLoginPage)
app.use('/oauth/ezeep', ezeepOAuthCallback)
app.use('/oauth/kakao', kakaoOAuthCallback)
app.use('/oauth/github', githubOAuthCallback)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})
