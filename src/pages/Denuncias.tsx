import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const posts = [
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
];

const Post = styled.div`
  background-color: #1a1a1a;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #ff4d4d;
  border-radius: 6px;
`;

const Denuncias: React.FC = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1>Denuncias recientes</h1>
      {posts.map((post, i) => (
        <Post key={i}>
          <h2>{post.title}</h2>
          <p style={{ fontSize: "0.9rem", color: "#999" }}>{post.date}</p>
          <p>{post.content}</p>
        </Post>
      ))}
    </motion.div>
  );
};

export default Denuncias;
