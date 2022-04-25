import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { useState, useEffect } from 'react';
import HomePage from './pages/home';
import CreateLiderbord from "./pages/createLiderbord";
import Moralis from 'moralis';
import { useMoralis } from "react-moralis";
import { Box } from "@mui/system";
import HappyButton from "./components/HappyButton";
import moralisKeys from "./moralis-keys.json"
import { Container } from "@mui/material";
import Login from "./pages/login";



function App() {
  // Moralis.start(Option= {serverUrl=moralisKeys.serverUrl, appId:moralisKeys.appId})
  return (
    <Container>
        <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-liderbord" element={<CreateLiderbord />} />
        </Routes>
      </Router>
    </Container>
    )
  } 
export default App;