import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CreateLiderbord from "./pages/createLiderbord";
import SearchLiderbord from "./pages/searchLiderbord";
import { Container } from "@mui/material";
import LiderbordPage from "./pages/liderbord";
import CreateResource from "./pages/createResource";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/l/:id" element={<LiderbordPage />} />
          <Route path="/create-liderbord" element={<CreateLiderbord />} />
          <Route path="/search/:name" element={<SearchLiderbord />} />
          <Route
            path="/create-resource/:liderbordID"
            element={<CreateResource />}
          />
        </Routes>
      </Router>
    </Container>
  );
}
export default App;
