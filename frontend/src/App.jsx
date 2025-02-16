import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/Login/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/Login" element={<LoginPage />}  />
        </Routes>
    </BrowserRouter>
  );
};

export default App;