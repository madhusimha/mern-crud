import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './routes/route.js';


const app = express();
app.use(cors());
const PORT = 8000;
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.get('/add', (req, res) => {
    res.send('Hello World')
  })

app.listen(PORT, () => console.log(`Server is running successfully on http://localhost:${PORT}`));