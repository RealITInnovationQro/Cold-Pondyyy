import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FaBullhorn } from "react-icons/fa";
import Home from "./pages/Home";
import Denuncias from "./pages/Denuncias";
import Contacto from "./pages/Contacto";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #101010;
    color: #e6e6e6;
  }
`;

const Navbar = styled.header`
  background: #181818;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ff4d4d;
`;

const NavLinks = styled.nav`
  a {
    color: #ccc;
    margin-left: 1rem;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: #ff4d4d;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff4d4d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Container = styled.main`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #181818;
  color: #888;
  font-size: 0.9rem;
`;

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar>
        <Logo>
          <FaBullhorn /> Real ITInnovation Qro
        </Logo>
        <NavLinks>
          <Link to="/">Inicio</Link>
          <Link to="/denuncias">Denuncias</Link>
          <Link to="/contacto">Enviar</Link>
        </NavLinks>
      </Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/denuncias" element={<Denuncias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Container>
      <Footer>&copy; 2025 real.ITInnovationQro</Footer>
    </Router>
  );
};

export default App;
