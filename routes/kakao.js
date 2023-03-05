import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()

const KAKAO = {
    url: 'https://kauth.kakao.com/oauth/token',
    clientID: '',
    CLIENT_SECRET: '',
    redirect_uri: 'https://wiseprint.cloud/callback',
    code: null,
}

export const kakaoOAuthCallback = (req, res) => {
    KAKAO.code = req.query.code
    const token = getKakaoAccessToken()
    updateTOKEN(token)
    console.log(TOKEN)
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

function updateTOKEN(token) {
    TOKEN = token
}