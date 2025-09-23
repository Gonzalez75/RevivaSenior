import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  & > div:nth-child(5),
  & > div:nth-child(6),
  & > div:nth-child(7) {
    grid-column: span 2;
  }
  & > div:nth-child(11) {
    grid-column: span 3;
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  box-sizing: border-box;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 5px;
  display: block;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #d2ac63;
  color: white;
  font-size: 15px;
  height: 42px;
  grid-column: span 4;
`;

const Form = ({ onEdit }) => {
  const ref = useRef();
  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Data Internação</Label>
        <Input name="datainternacao" type="date" />
      </InputArea>
      <InputArea>
        <Label>Data Nascimento</Label>
        <Input name="datanascimento" type="date" />
      </InputArea>{" "}
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" />
      </InputArea>{" "}
      <InputArea>
        <Label>Nome do Responsável</Label>
        <Input name="responsavelnome" />
      </InputArea>{" "}
      <InputArea>
        <Label>Parentesco do Responsável</Label>
        <Input name="responsavelparentesco" />
      </InputArea>
      <InputArea>
        <Label>Telefone do Responsável</Label>
        <Input
          name="responsaveltelefone"
          type="tel"
          maxLength={15}
          onChange={(e) => {
            let value = e.target.value.replace(/\D/g, "");
            if (value.length > 11) value = value.slice(0, 11);
            value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
            value = value.replace(/(\d{5})(\d)/, "$1-$2");
            e.target.value = value;
          }}
        />
      </InputArea>
      <InputArea>
        <Label>Convenio</Label>
        <Input name="convenio" />
      </InputArea>{" "}
      <InputArea>
        <Label>Diagnostico</Label>
        <Input name="diagnostico" />
      </InputArea>{" "}
      <InputArea>
        <Label>Status</Label>
        <Input name="status" />
      </InputArea>
      <InputArea>
        <Label>Observações</Label>
        <Input name="observacoes" />
      </InputArea>
      <Button type="submit" style={{ gridColumn: "span 4" }}>
        SALVAR
      </Button>
    </FormContainer>
  );
};

export default Form;
