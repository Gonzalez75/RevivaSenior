import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/global";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

const Container = styled.div`
  margin: 0 40px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function App() {
  const [idosos, setIdosos] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getIdosos = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setIdosos(res.data.sort((a, b) => (a.Nome > b.Nome ? 1 : -1)));
    } catch (err) {
      toast.error(err.response?.data || "Erro ao carregar idosos");
    }
  };

  useEffect(() => {
    getIdosos();
  }, []);

  return (
    <>
      <Header title="Idosos" subtitle="Gerencie os registros de idosos" />
      <Container>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getIdosos={getIdosos} />
        <Grid idosos={idosos} setIdosos={setIdosos} setOnEdit={setOnEdit} />
      </Container>
      <Footer />
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
