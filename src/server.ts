import express, {Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDatabase from './configs/database';

// App configuration
dotenv.config();
const port = process.env.PORT || 5000;
const app: Express = express();

// parse body as json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', require('./routes/product.route'));

// Health check
app.get('/api/status', (req:Request, res:Response) => {
    res.status(200).json({
        status: 'OK'
    });
});


// Run server
app.listen(port, () => {
    connectDatabase()
    console.log(`Server started on http://localhost:${port}`);
});