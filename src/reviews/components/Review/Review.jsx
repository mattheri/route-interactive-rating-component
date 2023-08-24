import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import ReviewButton from '../ReviewButton/ReviewButton';

import './Review.css';

const Review = () => {
	const [review, setReview] = useState(0);
	const reviews = Array.from({ length: 5 }, (v, i) => i + 1);
	const navigate = useNavigate();

	const onClick = (value) => {
		if (value === review) {
			setReview(0);
			return;
		}

		setReview(value);
	}

	const onSubmit = () => {
		navigate(`/review/${review}`);
	}

	return (
		<Container fluid className='w-100 h-100 px-0 d-flex justify-content-center align-items-center'>
			<Container className='reviews d-flex flex-column p-4 gap-3'>
				<div>
					<h2>How did we do?</h2>
				</div>
				<p>
					Please tell us how we did. We want to make sure we are providing the best service possible.
				</p>
				<div className='d-flex gap-2'>
					{reviews.map((value, index) => (
						<ReviewButton key={index} value={value} currentValue={review} onClick={onClick} />
					))}
				</div>
				<Button type="button" className='submit-review' disabled={review === 0} onClick={onSubmit}>Submit</Button>
			</Container>
		</Container>
	);
}

export default Review;