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
    clientID: process.env.CLIENT_KEY,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'https://wiseprint.cloud/callback',
    code: null,
    userInfoUrl: 'https://kapi.kakao.com/v2/user/me',
}

const getAccessToken = async (options) => {
    try {
        return await fetch(options.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                client_id: options.clientID,
                client_secret: options.clientSecret,
                redirectUri: options.redirectUri,
                code: options.code,
            }),
        }).then((res) => res.json())
    } catch (e) {
        logger.info('error', e)
    }
}

const getUserInfo = async (url, access_token) => {
    try {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                Authorization: `Bearer ${access_token}`,
            },
        }).then((res) => res.json())
    } catch (e) {
        logger.info('error', e)
    }
}

app.use('/oauth', (req, res) => {
    console.log(`app.get '/oauth'`)
    const authorizationURI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CONFIG.clientID}&redirect_uri=${CONFIG.redirectUri}`
    res.redirect(authorizationURI)
})

app.use('/callback', async (req, res) => {
    console.log(`app.get '/callback'`)
    CONFIG.code = req.query.code
    const token = await getAccessToken(CONFIG)
    console.log('Success to get token', token)
    const userInfo = await getUserInfo(CONFIG.userInfoUrl, token.access_token)

    res.send(userInfo)
})

app.get('/', (req, res) => {
    console.log(`app.get '/'`)
    res.sendFile('index.html', { root: 'public' })
})

app.get('*', (req, res) => {
    console.log(`app.get '/'`)
    res.send('404 Not Found')
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})
