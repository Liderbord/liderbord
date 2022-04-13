import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
import Login from "./pages/login";
import Register from "./pages/register";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </Router>

  );
}

export default App;