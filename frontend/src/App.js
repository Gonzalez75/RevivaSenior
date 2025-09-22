import styled from "styled-components";
import GlobalStyle from "./styles/global.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./components/Form.js"

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  color: #fff;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Idosos</Title>
         <Form />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
    </>
  );
}

export default App;
