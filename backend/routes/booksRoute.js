import express from 'express';
import Book from '../models/bookModel.js';

const router = express.Router();

// Route to get all books
router.get('/', async (req, res) => {
	try {
		const allBooks = await Book.find({});
		return res.status(200).json({
			count: allBooks.length,
			books: allBooks,
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

// Route for creating a new book
router.post('/', async (req, res) => {
	try {
		if (!(req.body.title && req.body.author && req.body.publishYear)) {
			return res
				.status(400)
				.send({ message: 'Send all required fields: title, author, publishYear' });
		}

		const bookData = {
			title: req.body.title,
			author: req.body.author,
			publishYear: req.body.publishYear,
		};

		const book = await Book.create(bookData);
		return res.status(200).send(book);
	} catch (error) {
		console.log(error.message);
		res.status(500).send({ message: error.message });
	}
});

// Route to get one book by its id
router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const book = await Book.findById(id);
		return res.status(200).json(book);
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

// Route to update a book by its id
router.put('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		if (!(req.body.title || req.body.author || req.body.publishYear)) {
			return res
				.status(400)
				.send({ message: 'Provide at least one field: title, author, publishYear' });
		}

		const updateData = {
			...(req.body.title && { title: req.body.title }),
			...(req.body.author && { author: req.body.author }),
			...(req.body.publishYear && { publishYear: req.body.publishYear }),
		};

		const result = await Book.findByIdAndUpdate(id, updateData);

		if (!result) {
			return res.status(404).send({ message: 'Book not found' });
		}

		return res.status(200).json({
			message: 'Book updated successfully!',
			result: result,
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: error.message });
	}
});

// Route for deleting a book by its id
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const result = await Book.findByIdAndDelete(id);

		if (!result) {
			return res.status(404).send({ message: 'Book not found' });
		}

		return res.status(200).send({ message: 'Book successfully deleted' });
	} catch (error) {
		console.error(error.message);
		return res.status(500).send({ messsage: error.message });
	}
});

export default router;