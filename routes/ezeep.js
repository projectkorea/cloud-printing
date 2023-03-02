import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const CONFIG = {
    url: 'https://account.ezeep.com/oauth/access_token',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'https://wiseprint.cloud/oauth/ezeep',
}

let TOKEN = null

export const ezeepOAuthCallback = async (req, res) => {
    console.log('✅ oAuthCallback called')
    const authorizationCode = req.query.code
    updateConfigCode()
    const token = await getAccessToken(authorizationCode)
    updateTOKEN(token)
    res.redirect('/')
}

const getAccessToken = async () => {
    try {
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
                code: authorizationCode,
                redirect_uri: CONFIG.redirectUri,
            }),
        }
        const response = await fetch(CONFIG.url, option)
        console.log('Response', response)
        const data = await response.json()
        console.log('Success to get token', data)

        // return data
    } catch (e) {
        console.log(e)
    }
}

function updateTOKEN(token) {
    TOKEN = token
}