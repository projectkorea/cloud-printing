import qs from 'qs'
import fetch from 'node-fetch'
import dotenv, { config } from 'dotenv'
dotenv.config()

const CONFIG = {
    url: 'https://account.ezeep.com/oauth/access_token',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'https://wiseprint.cloud/oauth/ezeep',
    code: null,
}

const KAKAO = {
    url: 'https://kauth.kakao.com/oauth/token',
    clientID: 'ba0978cda441cd7c19ec044f0be74fbe',
    CLIENT_SECRET: 'QmNE3H1NQhhhbuxh3rATrNKJCAUvTj2l',
    redirect_uri: 'https://wiseprint.cloud/callback',
    code: null,
}

let TOKEN = null

export const callback = (req, res) => {
    KAKAO.code = req.query.code
    const token = getKakaoAccessToken()
    updateTOKEN(token)
    console.log(TOKEN)
    res.redirect('/')
}

export const oAuthCallback = async (req, res) => {
    console.log('✅ oAuthCallback called')
    updateConfigCode(req.query.code)
    const token = await getAccessToken()
    updateTOKEN(token)
    res.redirect('/')
}

const getKakaoAccessToken = async () => {
    try {
        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                client_id: KAKAO.clientID,
                client_secret: KAKAO.CLIENT_SECRET,
                redirect_uri: KAKAO.redirect_uri,
                code: KAKAO.code,
            }),
        }
        const response = await fetch(KAKAO.url, option)
        const data = await response.json()
        console.log('Success to get response', response)
        console.log('Success to get token', data)
        return data
    } catch (e) {
        console.log(e)
    }
}
const getAccessToken = async () => {
    try {
        console.log(CONFIG.code)
        const auth = Buffer.from(`${CONFIG.clientID}:${CONFIG.clientSecret}`).toString('base64')
        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${auth}`,
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                scope: 'printing',
                code: CONFIG.code,
                redirect_uri: CONFIG.redirectUri,
            }),
        }
        console.log('✅ fetch called')
        const response = await fetch(CONFIG.url, option)
        console.log('Response', response)
        // const data = await response.json()
        // console.log('Success to get token', data)

        // return data
    } catch (e) {
        console.log(e)
    }
}

function updateConfigCode(code) {
    CONFIG.code = code
}

function updateTOKEN(token) {
    TOKEN = token
}
