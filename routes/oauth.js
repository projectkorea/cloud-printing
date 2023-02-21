export const getAccessToken = async (options) => {
    try {
        return await fetch(options.url, {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                client_id: options.clientID,
                client_secret: options.clientSecret,
                redirectUri: options.redirectUri,
                code: options.code,
            }),
        }).then((res) => res.json())
    } catch (e) {
        logger.info('error', e)
    }
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
        logger.info('error', e)
    }
}
