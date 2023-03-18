import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const CONFIG = {
    url: 'https://github.com/login/oauth/access_token',
    clientID: process.env.CLIENT_ID_GITHUB,
    clientSECRET: process.env.CLIENT_SECRET_GITHUB,
    redirectURI: 'https://wiseprint.cloud/oauth/github',
}

export const githubOAuthCallback = async (req, res) => {
    const token = await getGithubAccessToken(req.query.code)
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
                code,
            }),
        }
        console.log('option', option)
        const response = await fetch(CONFIG.url, option)
        console.log('Success to get response', response)

        const data = await response.json()
        console.log('Success to get token', data)

        return data
    } catch (e) {
        console.log(e)
    }
}
