import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";

const App = () => {
  return (
    <section className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
