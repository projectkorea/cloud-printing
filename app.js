import express from 'express'
import { AuthorizationCode } from 'simple-oauth2'
import cors from 'cors'

const app = express()
app.use(cors())

const KAKAO = {
    CLIENT_ID: 'ba0978cda441cd7c19ec044f0be74fbe',
    // CLIENT_SECRET: 'rXxWfn0zwmuldPPsHERHC8Lt2xACl9yU',
}

const config = {
    client: {
        id: KAKAO.CLIENT_ID,
        secret: KAKAO.CLIENT_SECRET,
    },
    auth: {
        authorizePath: '/oauth/authorize',
        tokenHost: 'https://kauth.kakao.com',
        tokenPath: '/oauth/token',
    },
    options: {
        bodyFormat: 'form',
    },
}

console.log(config.client.id, config.client.secret)
app.get('/oauth', (req, res) => {
    const client = new AuthorizationCode(config)
    const authorizationUri = client.authorizeURL({
        redirect_uri: 'http://localhost:3001/callback',
    })
    console.log('authorizationUri', authorizationUri)
    res.redirect(authorizationUri)
})

app.get('/callback', async (req, res) => {
    const client = new AuthorizationCode(config)
    const tokenParams = {
        code: req.query.code,
        redirect_uri: 'http://localhost:3001/callback',
    }
    const httpOptions = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
    }
    try {
        const accessToken = await client.getToken(tokenParams, httpOptions)
        console.log('✅ Access Token Success', accessToken)
        res.send('Access token: ' + accessToken.token.access_token)
    } catch (error) {
        console.log('❌ Access Token Error', error)
        res.send('Error: ' + error)
    }
})

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})
