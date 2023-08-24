import Container from 'react-bootstrap/Container';

import './Submit.css';
import { useParams } from 'react-router-dom';
import ThankYou from '../ThankYou/ThankYou';

const Submit = () => {
	const params = useParams();

	return (
		<Container fluid className='w-100 h-100 px-0 d-flex justify-content-center align-items-center'>
			<Container className='submit d-flex flex-column align-items-center p-4 gap-3'>
				<ThankYou />
				<span className='review-score'>
					{params.review} out of 5
				</span>
				<h2 className='text-center'>
					Thank you for your feedback!
				</h2>
				<p className='text-center'>
					We are always looking to improve our service. If you have any additional feedback, please let us know.
				</p>
			</Container>
		</Container>
	);
}

export default Submit;