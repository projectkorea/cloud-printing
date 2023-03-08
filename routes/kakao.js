import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

let TOKEN = null

const KAKAO = {
    url: 'https://kauth.kakao.com/oauth/token',
    CLIENT_ID: process.env.CLIENT_ID_KAKAO,
    CLIENT_SECRET: process.env.CLIENT_SECRET_KAKAO,
    redirect_uri: 'https://wiseprint.cloud/oauth/kakao',
}

export const kakaoOAuthCallback = (req, res) => {
    const token = getKakaoAccessToken(req.query.code)
    updateTOKEN(token)
    res.send()
}

const getKakaoAccessToken = async (code) => {
    try {
        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                client_id: KAKAO.CLIENT_ID,
                client_secret: KAKAO.CLIENT_SECRET,
                redirect_uri: KAKAO.redirect_uri,
                code,
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

function updateTOKEN(token) {
    TOKEN = token
}
