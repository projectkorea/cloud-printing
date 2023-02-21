import express from 'express'
import qs from 'qs'
import fetch from 'node-fetch'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

const app = express()
app.use(cors())
app.use(morgan('dev'))

const CONFIG = {
    url: 'https://kauth.kakao.com/oauth/token',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'https://wiseprint.cloud/callback',
    code: null,
    userInfoUrl: 'https://kapi.kakao.com/v2/user/me',
}

// app.use('/oauth', (req, res) => {
//     console.log(`app.get '/oauth'`)
//     const authorizationURI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CONFIG.clientID}&redirect_uri=${CONFIG.redirectUri}`
//     res.redirect(authorizationURI)
// })

// app.use('/callback', async (req, res) => {
//     console.log(`app.get '/callback'`)
//     CONFIG.code = req.query.code
//     const token = await getAccessToken(CONFIG)
//     console.log('Success to get token', token)
//     const userInfo = await getUserInfo(CONFIG.userInfoUrl, token.access_token)

//     res.send(userInfo)
// })

// app.use((req, res) => {
//     res.status(404).redirect('/')
// })

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})
