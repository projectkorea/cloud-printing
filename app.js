import express from 'express'
import qs from 'qs'
import fetch from 'node-fetch'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())

const CONFIG = {
    url: 'https://kauth.kakao.com/oauth/token',
    clientID: process.env.CLIENT_KEY,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'http://localhost:3001/callback',
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

app.get('/oauth', (req, res) => {
    const authorizationURI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CONFIG.clientID}&redirect_uri=${CONFIG.redirectUri}`
    res.redirect(authorizationURI)
})

app.get(`/callback`, async (req, res) => {
    CONFIG.code = req.query.code
    const token = await getAccessToken(CONFIG)
    console.log('Success to get token', token)
    const userInfo = await getUserInfo(CONFIG.userInfoUrl, token.access_token)

    res.send(userInfo)
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})
