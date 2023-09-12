import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import BookModal from './BookModal';

const BookCard = (props) => {
	const { id, publishYear, title, author } = props;

	const [showModal, setShowModal] = useState(false);

	return (
		<div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
			<h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
				{publishYear}
			</h2>
			<h4 className="my-2 text-gray-500">{id}</h4>
			<div className="flex justify-start items-center gap-x-2">
				<PiBookOpenTextLight className="text-red-300 text-2xl" />
				<h2 className="my-1">{title}</h2>
			</div>
			<div className="flex justify-start items-center gap-x-2">
				<BiUserCircle className="text-red-300 text-2xl" />
				<h2 className="my-1">{author}</h2>
			</div>
			<div className="flex justify-between items-center gap-x-2 mt-4 p-4">
				<BiShow
					className="text-3xl text-blue-800 hover:text-black cursor-pointer"
					onClick={() => setShowModal(true)}
				/>
				<Link to={`/books/details/${id}`}>
					<BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
				</Link>
				<Link to={`/books/edit/${id}`}>
					<AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
				</Link>
				<Link to={`/books/delete/${id}`}>
					<MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
				</Link>
			</div>
			{showModal && (
				<BookModal
					id={id}
					title={title}
					author={author}
					publishYear={publishYear}
					onClose={() => setShowModal(false)}
				/>
			)}
		</div>
	);
};

BookCard.propTypes = {
	id: PropTypes.string.isRequired,
	publishYear: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
};

export default BookCard;
