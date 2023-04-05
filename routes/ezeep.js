import qs from 'qs'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
import multer from 'multer'
import FormData from 'form-data'
dotenv.config()

const CONFIG = {
    url: 'https://account.ezeep.com/oauth/access_token/',
    clientID: process.env.CLIENT_ID_EZEEP,
    clientSecret: process.env.CLIENT_SECRET_EZEEP,
    redirectUri: 'https://wiseprint.cloud/oauth/ezeep',
    baseURL: 'https://printapi.ezeep.com',
    isUsingEzeepLibrary: true,
}

export const ezeepOAuthCallback = async (req, res) => {
    if (CONFIG.isUsingEzeepLibrary) {
        const result = await getAccessToken(req.query.code, req.query.code_challenge)
        return result
    } else {
        const { access_token, refresh_token } = await getAccessToken(req.query.code)
        req.session.accessToken = access_token
        req.session.refreshToken = refresh_token
        res.redirect('/')
    }
}

const getAccessToken = async (code, codeVerifier = null) => {
    try {
        const auth = Buffer.from(`${CONFIG.clientID}:${CONFIG.clientSecret}`).toString('base64')
        const option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${auth}`,
            },
            body: qs.stringify({
                grant_type: 'authorization_code',
                scope: 'printing',
                code,
                redirect_uri: CONFIG.redirectUri,
                code_verifier: codeVerifier,
            }),
        }
        const response = await fetch(CONFIG.url, option)
        const data = await response.json()
        console.log('Success to get token', data)

        return data
    } catch (e) {
        console.log(e)
    }
}

export const getConfiguration = async (req, res) => {
    try {
        const response = await fetch(`${CONFIG.baseURL}/sfapi/GetConfiguration/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${req.session.accessToken}`,
            },
        })
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error('Error fetching configuration:', error)
    }
}

export const getPrinter = async (req, res) => {
    try {
        const response = await fetch(`${CONFIG.baseURL}/sfapi/GetPrinter/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${req.session.accessToken}`,
            },
        })
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error('Error fetching configuration:', error)
    }
}

export const getPrinterProperties = async (req, res) => {
    try {
        const response = await fetch(`${CONFIG.baseURL}/sfapi/GetPrinterProperties/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${req.session.accessToken}`,
            },
        })
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error('Error fetching configuration:', error)
    }
}

export const prepareFileUpload = async (req, res) => {
    try {
        const response = await fetch(`${CONFIG.baseURL}/sfapi/PrepareUpload/`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${req.session.accessToken}`,
            },
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching configuration:', error)
    }
}

export const fileUpload = async (req, res) => {
    try {
        const { fileid, sasUri } = await prepareFileUpload(req)

        const form = new FormData()
        form.append('file', req.file.buffer, { filename: req.file.originalname })

        const options = {
            method: 'PUT',
            headers: {
                'x-ms-blob-type': 'BlockBlob',
                'Content-Type': 'multipart/form-data',
            },
            body: form,
        }

        const response = await fetch(sasUri, options)

        if (response.status === 201) {
            req.session.fileIds = { one: fileid }
            console.log('TEST', req.session.fileIds, fileid)
            return res.sendStatus(201)
        } else {
            const data = await response.text()
            console.error(`Error ${response.status}: ${data}`)
            return res.status(response.status).send(data)
        }
    } catch (error) {
        console.error('Error uploading file:', error)
        return res.status(500).send(error.message)
    }
}

function getTempValue() {
    const BrotherDCP = '8d5f5242-a188-4965-a7cd-9bb13f9a3642'
    const MicrosoftPrint = '9cd91d4f-1825-431c-a342-31b418616249'
    const SEC842519C14383 = '618d7c34-396d-4694-b614-0c1862f8c9c6'

    const printerid = BrotherDCP
    const type = 'pdf'

    return { printerid, type }
}

export const printUploadedFile = async (req, res) => {
    try {
        console.log('TEST2', req.session.fileIds)
        const fileid = req.session.fileIds?.one
        const { printerid, type } = getTempValue()
        const response = await fetch(`${CONFIG.baseURL}/sfapi/Print/`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${req.session.accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fileid, printerid, type }),
        })

        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error('Error fetching configuration:', error)
    }
}
