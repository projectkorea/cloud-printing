import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const KAKAO = {
    url: 'https://kauth.kakao.com/oauth/token',
    CLIENT_ID: process.env.CLIENT_ID_KAKAO,
    CLIENT_SECRET: process.env.CLIENT_SECRET_KAKAO,
    redirect_uri: 'https://wiseprint.cloud/oauth/kakao',
}

export const kakaoOAuthCallback = async (req, res) => {
    const token = await getKakaoAccessToken(req.query.code)
    res.send(token)
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

        console.log('Success to get token', data)
        return data
    } catch (e) {
        console.log(e)
    }
}
