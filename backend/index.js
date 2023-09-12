import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import BooksRoute from './routes/booksRoute.js';

const app = express();
const port = process.env.PORT || 2000;

// Parsing request body
app.use(express.json());

// Handling CORS Policy
// Option 1: Allow all access
// app.use(cors());
// Option 2: Allow custom access
app.use(
	cors({
		origin: process.env.FRONTEND_BASE_URL,
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		allowedHeaders: ['Content-Type'],
	})
);

app.get('/', (req, res) => {
	res.send('Home page');
});

// Books router
app.use('/books', BooksRoute);

// Establish database connection
mongoose
	.connect(process.env.MONGODB_CONNECTION_URI)
	.then(() => {
		console.log('Connected to database!');
		app.listen(port, () => {
			console.log(`App running on port ${port}`);
		});
	})
	.catch((error) => {
		console.error(error);
	});
