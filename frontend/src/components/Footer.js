// Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 15px 10px; /* espaço lateral para telas menores */
  background-color: #fff;
  text-align: center;
  color: #17467c;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  font-size: 0.9rem;
  line-height: 1.5;
  height: auto; /* altura dinâmica */

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 5px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.3;
    padding: 8px 5px;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #d2ac63;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Highlight>Residencial Reviva Sênior</Highlight>
      <br />
      • © {new Date().getFullYear()} Desenvolvido por{" "}
      <Highlight>Guilherme Gonzalez</Highlight>
    </FooterContainer>
  );
}
