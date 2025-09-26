// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 15px 0;
  background-color: #fff;
  text-align: center;
  color: #17467c;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  line-height: 1.5; /* espaçamento entre linhas */
  height: 40px;
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #d2ac63;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Highlight>Residencial Reviva Sênior</Highlight> <br />• ©{" "}
      {new Date().getFullYear()} Desenvolvido por{" "}
      <Highlight>Guilherme Gonzalez</Highlight>
    </FooterContainer>
  );
}
