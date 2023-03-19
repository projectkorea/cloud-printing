import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { ezeepOAuthCallback } from './routes/ezeep.js'
import { kakaoOAuthCallback } from './routes/kakao.js'
import { githubOAuthCallback } from './routes/github.js'
import { githubLoginPage, kakaoLoginPage, ezeepLoginPage } from './routes/login.js'
import fetch from 'node-fetch'

const app = express()
app.use(cors())
app.use(morgan('dev'))

app.use('/test', (req, res) => {
    res.status(200).send('POST request received')
})

app.use('/login/ezeep', ezeepLoginPage)
app.use('/login/kakao', kakaoLoginPage)
app.use('/login/github', githubLoginPage)

app.use('/oauth/ezeep', ezeepOAuthCallback)
app.use('/oauth/kakao', kakaoOAuthCallback)
app.use('/oauth/github', githubOAuthCallback)

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.listen(3001, () => {
    console.log(`🌈Server started on port 3001`)
})

const checkCORS = async (url, method) => {
    try {
        const response = await fetch(url, {
            method, // 또는 다른 HTTP 메소드를 사용할 수 있습니다.
        })

        const headers = response.headers
        console.log(url, method)
        console.log('Access-Control-Allow-Origin:', headers.get('Access-Control-Allow-Origin'))
        console.log('Access-Control-Allow-Methods:', headers.get('Access-Control-Allow-Methods'))
        console.log('Access-Control-Allow-Headers:', headers.get('Access-Control-Allow-Headers'))
        console.log('Access-Control-Allow-Credentials:', headers.get('Access-Control-Allow-Credentials'))
    } catch (error) {
        console.error('Error while checking CORS:', error)
    }
}

// console.log('3 시작')
// await checkCORS('https://wiseprint.cloud/test', 'POST')

// console.log('4 시작')
// await checkCORS('http://wiseprint.cloud/test', 'POST')

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error))

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error))
