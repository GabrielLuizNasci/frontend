import React from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/navbar/navbar';
import Home from './pages/Home/home';
import Livros from './pages/Livros/livros';
import Editoras from './pages/Editoras/editoras';

function App() {
  return (
    <BrowserRouter>
      <Navbar bgColor="S4"/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros" element={<Livros />} />
        <Route path="/editoras" element={<Editoras />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
