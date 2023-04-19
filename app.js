import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import multer from 'multer'
import session from 'express-session'
import {
    ezeepOAuthCallback,
    getConfiguration,
    getPrinter,
    getPrinterProperties,
    prepareFileUpload,
    fileUpload,
    printUploadedFile,
} from './routes/ezeep.js'
import { kakaoOAuthCallback } from './routes/kakao.js'
import { githubOAuthCallback } from './routes/github.js'
import { githubLoginPage, kakaoLoginPage, ezeepLoginPage } from './routes/login.js'

dotenv.config()

// multer 설정
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB
    },
})

const app = express()
app.use(express.static('public'))
app.use(cors())
app.use(morgan('dev'))
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
)

app.use('/api/token', (req, res) => {
    const accessToken = req.session.accessToken

    if (!accessToken) {
        res.json('fail')
        return
    }

    res.json('success')
})

app.use('/login/ezeep', ezeepLoginPage)
app.use('/login/kakao', kakaoLoginPage)
app.use('/login/github', githubLoginPage)

app.use('/oauth/ezeep', ezeepOAuthCallback)
app.use('/oauth/kakao', kakaoOAuthCallback)
app.use('/oauth/github', githubOAuthCallback)

app.use('/ezeep/configuration', getConfiguration)
app.use('/ezeep/printer', getPrinter)
app.use('/ezeep/printer-properties', getPrinterProperties)
app.use('/ezeep/prepareUpload', prepareFileUpload)
app.put('/ezeep/file-upload', upload.single('file'), fileUpload)
app.use('/ezeep/printUploadedFile', printUploadedFile)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})
