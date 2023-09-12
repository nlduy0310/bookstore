import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = (props) => {
	const { id, title, author, publishYear, onClose } = props;
	return (
		<div
			className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
			onClick={onClose}
		>
			<div
				className="flex flex-col relative w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 gap-3"
				onClick={(event) => event.stopPropagation()}
			>
				<AiOutlineClose
					className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
					onClick={onClose}
				/>
				<h2 className="px-4 py-1 w-fit bg-red-300 rounded-lg">{publishYear}</h2>
				<h4 className="my-2 text-gray-500">{id}</h4>
				<div className="flex justify-start items-center gap-x-2">
					<PiBookOpenTextLight className="text-red-300 text-2xl" />
					<h2 className="my-1">{title}</h2>
				</div>
				<div className="flex justify-start items-center gap-x-2">
					<BiUserCircle className="text-red-300 text-2xl" />
					<h2 className="my-1">{author}</h2>
				</div>
				<h2 className="font-bold text-2xl underline">Brief:</h2>
				<p className="text-gray-600">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis tellus
					eget eros sollicitudin maximus. Morbi a hendrerit nunc. Sed vestibulum est vitae
					odio efficitur egestas. Etiam ante leo, faucibus et tortor ut, lacinia dapibus
					lectus. Integer sapien nisl, tristique et est vitae, consequat egestas est.
					Vivamus eu odio vel libero vehicula aliquet sit amet non sapien. Nulla nec arcu
					mauris.
				</p>
			</div>
		</div>
	);
};

BookModal.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	publishYear: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default BookModal;
