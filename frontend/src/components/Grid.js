import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin: 20px auto;
  border-collapse: collapse;
  table-layout: auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: center;
  padding: 15px;
  white-space: ${(props) => (props.$nowrap ? "nowrap" : "normal")};
`;
export const Td = styled.td`
  padding: 15px;
  text-align: ${(props) => (props.$alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  white-space: ${(props) => (props.$nowrap ? "nowrap" : "normal")};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const formatDateBR = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return date.toLocaleDateString("pt-BR");
};

const formatPhoneBR = (phone) => {
  if (!phone) return "";
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 11) {
    const ddd = cleaned.slice(0, 2);
    const part1 = cleaned.slice(2, 7);
    const part2 = cleaned.slice(7);
    return `(${ddd}) ${part1}-${part2}`;
  } else if (cleaned.length === 10) {
    const ddd = cleaned.slice(0, 2);
    const part1 = cleaned.slice(2, 6);
    const part2 = cleaned.slice(6);
    return `(${ddd}) ${part1}-${part2}`;
  } else {
    return phone;
  }
};

const Grid = ({ idosos }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th style={{ width: "150px" }}>Nome</Th>
          <Th style={{ width: "120px" }}>Data da Internação</Th>
          <Th style={{ width: "120px" }}>Data do Nascimento</Th>
          <Th style={{ width: "120px" }}>CPF</Th>
          <Th style={{ width: "150px" }}>Nome do Responsável</Th>
          <Th style={{ width: "120px" }}>Parentesco do Responsável</Th>
          <Th style={{ width: "130px" }}>Telefone do Responsável</Th>
          <Th style={{ width: "100px" }}>Convênio</Th>
          <Th style={{ width: "200px" }}>Diagnóstico</Th>
          <Th style={{ width: "80px" }}>Status</Th>
          <Th style={{ width: "250px" }}>Observações</Th>
          <Th>Editar</Th>
          <Th>Excluir</Th>
        </Tr>
      </Thead>
      <Tbody>
        {idosos.map((item, i) => (
          <Tr key={i}>
            <Td>{item.Nome}</Td>
            <Td $alignCenter width="120px">
              {formatDateBR(item.DataInternacao)}
            </Td>
            <Td $alignCenter width="120px">
              {formatDateBR(item.DataNascimento)}
            </Td>
            <Td>{item.CPF}</Td>
            <Td>{item.ResponsavelNome}</Td>
            <Td>{item.ResponsavelParentesco}</Td>
            <Td $alignCenter width="130px">
              {formatPhoneBR(item.ResponsavelTelefone)}
            </Td>
            <Td>{item.Convenio}</Td>
            <Td>{item.Diagnostico}</Td>
            <Td>{item.Status}</Td>
            <Td>{item.Observacoes}</Td>
            <Td $alignCenter width="5%">
              <FaEdit />
            </Td>
            <Td $alignCenter width="5%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
