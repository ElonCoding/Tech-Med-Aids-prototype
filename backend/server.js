import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/connectDB.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';   

const app = express();

app.get ('/api', (req, res) => {
    res.send('server is ready');

});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
});

// get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, joke: "Why don't programmers like nature? It has too many bugs." },
        { id: 2, joke: "Why do Java developers wear glasses? Because they don't see sharp." },
        { id: 3, joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem." },
        { id: 4, joke: "Why did the programmer quit his job? Because he didn't get arrays." },
        { id: 5, joke: "What do you call a group of 8 Hobbits? A Hobbyte." }
    ];
    res.json(jokes);
});