import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';

const BooksGrid = (props) => {
	const { books } = props;
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{books.map((book) => (
				<BookCard
					key={book._id}
					id={book._id}
					publishYear={book.publishYear}
					title={book.title}
					author={book.author}
				/>
			))}
		</div>
	);
};

BooksGrid.propTypes = {
	books: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
			publishYear: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default BooksGrid;
