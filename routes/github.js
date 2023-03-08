import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

let TOKEN = null

const CONFIG = {
    url: 'https://github.com/login/oauth/access_token',
    clientID: process.env.CLIENT_ID_GITHUB,
    clientSECRET: process.env.CLIENT_SECRET_GITHUB,
    redirectURI: 'http://wiseprint.cloud',
}

export const githubOAuthCallback = async (req, res) => {
    const code = req.query.code
    console.log("code", code)
    const token = await getGithubAccessToken(code)
    updateTOKEN(token)
    console.log(TOKEN)
    res.send(token)
}

const getGithubAccessToken = async (code) => {
    try {
        const option = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: qs.stringify({
                client_id: CONFIG.clientID,
                client_secret: CONFIG.clientSECRET,
                code
            }),
        }
        console.log("option", option)
        const response = await fetch(CONFIG.url, option)
        console.log('Success to get response', response)
        
        const data = await response.json()
        console.log('Success to get token', data)

        return data
    } catch (e) {
        console.log(e)
    }
}

const updateTOKEN = (token) => {
    TOKEN = token
}