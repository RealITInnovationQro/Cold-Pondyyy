import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FaBullhorn, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background-color: #101010;
    color: #e6e6e6;
  }
`;

const Wrapper = styled.div``;

const Navbar = styled.header`
  position: sticky;
  top: 0;
  background: #181818;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ff4d4d;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ff4d4d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const Section = styled.section`
  max-width: 900px;
  margin: auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  color: #ff4d4d;
`;

const Post = styled.div`
  background-color: #1a1a1a;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #ff4d4d;
  border-radius: 6px;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #181818;
  color: #888;
  font-size: 0.9rem;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Navbar>
        <Logo>
          <FaBullhorn /> Real ITInnovation Qro
        </Logo>
        <NavLinks>
          <a href="#inicio">Inicio</a>
          <a href="#denuncias">Denuncias</a>
          <a href="#contacto">Contacto</a>
        </NavLinks>
      </Navbar>

      <Section id="inicio">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title>¿Qué es Real ITInnovation Qro?</Title>
          <p>
            Este proyecto existe para dar voz a estudiantes, profesores y
            administrativos que deseen denunciar injusticias, abusos o
            irregularidades cometidas dentro del campus IT Innovation School
            Querétaro.
          </p>
        </motion.div>
      </Section>

      <Section id="denuncias">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Title>Denuncias recientes</Title>
          {[
            {
              title: "Cobro injustificado de $500",
              date: "15 junio 2025",
              content:
                "Se pidió un pago por un evento que nunca ocurrió. No se dio explicación y nadie fue reembolsado.",
            },
            {
              title: "Profesores impuntuales",
              date: "12 junio 2025",
              content:
                "Los maestros frecuentemente llegan tarde, pero sancionan al alumno que llega con minutos de retraso.",
            },
          ].map((post, i) => (
            <Post key={i}>
              <h2>{post.title}</h2>
              <p style={{ fontSize: "0.9rem", color: "#999" }}>{post.date}</p>
              <p>{post.content}</p>
            </Post>
          ))}
        </motion.div>
      </Section>

      <Section id="contacto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Title>Contacto</Title>
          <p>
            Para enviar tu denuncia de forma anónima, escríbenos directamente al
            correo:
          </p>
          <p
            style={{ fontSize: "1.2rem", marginTop: "1rem", color: "#ff4d4d" }}
          >
            <FaEnvelope /> real.ITInnovationqro@gmail.com
          </p>
        </motion.div>
      </Section>

      <Footer>
        &copy; 2025 Real ITInnovation Qro. Sitio hecho para la verdad y la
        transparencia.
      </Footer>
    </Wrapper>
  );
};

export default App;
