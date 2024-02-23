import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import {WaitScreen} from "./pages/WaitScreen";
import Auth from "./pages/Auth";
import "./App.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/wait" element={<WaitScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
