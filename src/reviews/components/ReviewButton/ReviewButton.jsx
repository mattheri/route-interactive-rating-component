import Button from 'react-bootstrap/Button';

import './ReviewButton.css'

const ReviewButton = ({ onClick, value, currentValue }) => {
	const handleClick = () => {
		onClick(value);
	}

	const classnames = ['review-button'];

	if (value === currentValue) {
		classnames.push('active');
	}

	return (
		<Button type='button' className={classnames.join(' ')} onClick={handleClick}>
			{value}
		</Button>
	);
}

export default ReviewButton;