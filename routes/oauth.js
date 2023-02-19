import express from 'express'
import { AuthorizationCode } from 'simple-oauth2'

const app = express()

const KAKAO = {
    CLIENT_ID: 'ae74ca8408e21c2e29915ceee47739fc',
    CLIENT_SECRET: 'kwhQ40xHQOagUsoVZYUp5KIGC3FjdCm8',
}

const config = {
    client: {
        id: KAKAO.CLIENT_ID,
        secret: KAKAO.CLIENT_SECRET,
    },
    auth: {
        tokenHost: 'https://kauth.kakao.com',
    },
}

async function run(req, res) {
    const client = new AuthorizationCode(config)
    const authorizationUri = client.authorizeURL({
        redirect_uri: 'http://localhost:3001/callback',
    })

    console.log('authorizationUri', authorizationUri)
    res.redirect(authorizationUri)

    // const tokenParams = {
    //     code: '<code>',
    //     redirect_uri: 'http://localhost:3000/callback',
    // };

    // try {
    //     const accessToken = await client.getToken(tokenParams);
    //     console.log('✅ Access Token Success', accessToken)
    // } catch (error) {
    //     console.log('❌ Access Token Error', error.message);
    // }
}

run()

export function oauth(req, res) {
    console.log(req, res)
    run(req, res)
}
