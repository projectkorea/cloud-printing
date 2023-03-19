import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const CONFIG = {
    url: 'https://account.ezeep.com/oauth/access_token/',
    clientID: process.env.CLIENT_ID_EZEEP,
    clientSecret: process.env.CLIENT_SECRET_EZEEP,
    redirectUri: 'https://wiseprint.cloud/oauth/ezeep',
    baseURL: 'https://printapi.ezeep.com/',
}

export const ezeepOAuthCallback = async (req, res) => {
    const { access_token, refresh_token } = await getAccessToken(req.query.code)
    req.session.accessToken = access_token
    res.redirect('/')
}

const getAccessToken = async (code) => {
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
                code,
                redirect_uri: CONFIG.redirectUri,
            }),
        }
        const response = await fetch(CONFIG.url, option)
        const data = await response.json()
        console.log('Success to get token', data)

        return data
    } catch (e) {
        console.log(e)
    }
}

export const getConfiguration = async (req, res) => {
    try {
        const response = await fetch(`${CONFIG.baseURL}/sfapi/GetConfiguration/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${req.session.accessToken}`,
            },
        })

        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error('Error fetching configuration:', error)
    }
}
