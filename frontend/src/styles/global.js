import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
  width: 100%;
  min-height: 100vh;
  background-color: #17467C;
  overflow-x: hidden;
}
`;
export default GlobalStyle;
