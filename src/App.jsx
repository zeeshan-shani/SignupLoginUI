import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login'; // Import Login as named export
import { SignUp } from './pages/SignUp'; // Import SignUp as named export
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
