import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
import Login from "./pages/login";
import Register from "./pages/register";
import CreateLiderbord from "./pages/createLiderbord";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/mainPage" element={<MainPage/>}/>
        <Route path="/createliderbord" element={<CreateLiderbord/>}/>
      </Routes>
    </Router>

  );
}

export default App;