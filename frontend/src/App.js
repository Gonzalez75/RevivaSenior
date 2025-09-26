import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  position: absolute;
  height: auto;
  top: 20px;
  left: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
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
      <Container>
        <Title>Idosos</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getIdosos={getIdosos} />
        <Grid idosos={idosos} setIdosos={setIdosos} setOnEdit={setOnEdit} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
