import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

let TOKEN = null

const GITHUB = {
    url: 'https://github.com/login/oauth/access_token',
    clientID: process.env.CLIENT_ID_GITHUB,
    clientSECRET: process.env.CLIENT_SECRET_GITHUB,
    redirectURI: 'https://wiseprint.cloud/oauth/github',
}

export const githubOAuthCallback = (req, res) => {
    const code = req.query.code
    const token = getGithubAccessToken(code)
    updateTOKEN(token)
    console.log(TOKEN)
    res.send(token)
}

const getGithubAccessToken = async (code) => {
    try {
        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                client_id: GITHUB.clientID,
                client_secret: GITHUB.clientSECRET,
                redirect_uri: GITHUB.redirectURI,
                code
            }),
        }
        const response = await fetch(CONFIG.url, option)
        const data = await response.json()
        console.log('Success to get response', response)
        console.log('Success to get token', data)
        return data
    } catch (e) {
        console.log(e)
    }
}

const updateTOKEN = (token) => {
    TOKEN = token
}