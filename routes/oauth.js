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

let TOKEN = null

export const oAuthCallback = async (req, res) => {
    updateConfigCode(req.query.code)
    const token = await getAccessToken()
    updateTOKEN(token)
    res.redirect('/')
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

        const response = await fetch(CONFIG.url, option)
        const data = await response.json()
        console.log('Success to get token', data)

        return data
    } catch (e) {
        console.log('error', e)
    }
}

function updateConfigCode(code) {
    CONFIG.code = code
}

function updateTOKEN(token) {
    TOKEN = token
}
