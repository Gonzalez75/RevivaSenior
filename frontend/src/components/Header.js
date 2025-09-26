import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #17467c;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  margin: 0;
  color: #17467c;
`;

export default function Header({ title, subtitle }) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderContainer>
  );
}
