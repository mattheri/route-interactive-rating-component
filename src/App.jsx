import { Route, Routes } from 'react-router-dom';
import Review from './reviews/components/Review/Review';
import Submit from './submit/components/Submit/Submit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Review />} />
      <Route path='/review/:review' element={<Submit />} />
    </Routes>
  );
}

export default App
