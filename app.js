import express from 'express';
import {oauth} from './routes/oauth.js';
import {sfapi} from './routes/sfapi.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/oauth', oauth);
app.use('/sfapi', sfapi);

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen('3001', () => console.log(`✅SERVER ON: http://localhost:3001`));