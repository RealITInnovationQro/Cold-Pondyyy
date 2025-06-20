import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { motion } from "framer-motion";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TextArea = styled.textarea`
  background-color: #1a1a1a;
  border: 1px solid #444;
  color: white;
  padding: 1rem;
  border-radius: 6px;
  resize: vertical;
`;

const Button = styled.button`
  background-color: #ff4d4d;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e84141;
  }
`;

const Contacto: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log("Mensaje:", data);
    alert("Gracias por tu mensaje anónimo.");
    reset();
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Enviar una denuncia</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextArea
          placeholder="Describe aquí tu denuncia (no se guardan datos personales)"
          rows={6}
          {...register("mensaje", { required: true })}
        />
        <Button type="submit">Enviar</Button>
      </Form>
      <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#bbb" }}>
        También puedes escribirnos a:{" "}
        <strong>real.ITInnovationqro@gmail.com</strong>
      </p>
    </motion.div>
  );
};

export default Contacto;
