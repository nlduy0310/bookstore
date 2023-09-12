import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksGrid from '../components/home/BooksGrid';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showType, setShowType] = useState('table');
	useEffect(() => {
		setIsLoading(true);

		axios
			.get(`${import.meta.env.VITE_BACKEND_BASE_URL}/books`)
			.then((response) => {
				setBooks(response.data.books);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="p-4">
			<div className="flex justify-center items-center gap-x-4">
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setShowType('table')}
				>
					Table
				</button>
				<button
					className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
					onClick={() => setShowType('cards')}
				>
					Cards
				</button>
			</div>
			<div className="flex justify-between item-center">
				<h1 className="text-3xl my-3">Books List</h1>
				<Link to="/books/create">
					<MdOutlineAddBox className="text-sky-800 text-4xl" />
				</Link>
			</div>
			{isLoading ? (
				<Spinner />
			) : showType == 'table' ? (
				<BooksTable books={books} />
			) : (
				<BooksGrid books={books} />
			)}
		</div>
	);
};

export default Home;
