import qs from 'qs'
import fetch from 'node-fetch'

const CONFIG = {
    url: 'https://account.ezeep.com/oauth/access_token',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'https://wiseprint.cloud/oauth/ezeep',
    code: null,
}

const TOKEN = null

export const oAuthCallback = async (req, res) => {
    console.log('query', req.query, req.query.code)
    updateConfigCode(req.query.code)
    const token = await getAccessToken(CONFIG)
    updateTOKEN(token)
    res.redirect('/')
    // const userInfo = await getUserInfo(CONFIG.userInfoUrl, token.access_token)
}

export const getUserInfo = async (url, access_token) => {
    try {
        return await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                Authorization: `Bearer ${access_token}`,
            },
        }).then((res) => res.json())
    } catch (e) {
        console.log('error', e)
    }
}

const getAccessToken = async (options) => {
    try {
        const auth = Buffer.from(`${options.clientID}:${options.clientSecret}`).toString('base64')
        return await fetch(options.url, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${auth}`,
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                scope: 'printing',
                redirect_uri: options.redirectUri,
                code: options.code,
            }),
        }).then((res) => {
            console.log('Success to get token', res, res.json())
            res.json()
        })
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
