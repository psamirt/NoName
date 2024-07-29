import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routes from './src/routes/index.js';
import connection from './src/database/index.js';

dotenv.config();

const { PORT } = process.env || 3000;

const app = express();
const server = createServer(app);

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.get("/", (_req, res) => {
    res.status(200).send("noname funcionanding");
});

connection()
.then(() => {
    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error("Error on connecting", error);
});