const CONFIG = {
    url: 'https://account.ezeep.com/oauth/access_token',
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'https://wiseprint.cloud/oauth/ezeep',
    code: null,
}

export const oAuthCallback = async (req, res) => {
    updateConfigCode(req.query.code)
    const token = await getAccessToken(CONFIG)
    console.log('Success to get token', token)
    // const userInfo = await getUserInfo(CONFIG.userInfoUrl, token.access_token)

    res.send(userInfo)
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
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                Authorization: `Basic ${auth}`,
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                scope: 'printing',
                redirectUri: options.redirectUri,
                code: options.code,
            }),
        }).then((res) => res.json())
    } catch (e) {
        logger.info('error', e)
    }
}

function updateConfigCode(code) {
    CONFIG.code = code
}
