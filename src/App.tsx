import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import CreateLiderbord from "./pages/createLiderbord";
import SearchLiderbord from "./pages/searchLiderbord";
import { Container } from "@mui/material";
import Login from "./pages/login";
import LiderbordPage from "./pages/liderbord";
import CreateResource from "./pages/createResource";

function App() {
  // Moralis.start(Option= {serverUrl=moralisKeys.serverUrl, appId:moralisKeys.appId})
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/l/:id" element={<LiderbordPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-liderbord" element={<CreateLiderbord />} />
          <Route path="/search" element={<SearchLiderbord />} />
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
