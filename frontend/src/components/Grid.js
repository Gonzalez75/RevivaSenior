import styled from "styled-components";
import { FaEdit } from "react-icons/fa";
import React, { useState } from "react";

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  min-width: 900px;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0px 0px 5px #d2ac63;
  border-radius: 5px;
  margin: 20px auto;
  border-collapse: collapse;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: center;
  padding: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${(props) => (props.w ? props.w : "auto")};
  cursor: pointer;
  user-select: none;
  color: #17467c;
  &:hover {
    background-color: #f9f9f9;
  }
`;

export const Td = styled.td`
  padding: 15px;
  text-align: center;
  width: ${(props) => (props.w ? props.w : "auto")};
  max-width: ${(props) => (props.w ? props.w : "auto")};
  white-space: ${(props) => (props.$breakLine ? "normal" : "nowrap")};
  overflow: ${(props) => (props.$breakLine ? "visible" : "hidden")};
  text-overflow: ${(props) => (props.$breakLine ? "clip" : "ellipsis")};
  box-shadow: inset 0 -1px 0 rgba(210, 172, 99, 0.5);
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
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7
    )}`;
  } else if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(
      6
    )}`;
  } else {
    return phone;
  }
};

const Grid = ({ idosos, setIdosos, setOnEdit }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleEdit = (item) => {
    setOnEdit(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...idosos].sort((a, b) => {
      let valA = a[key];
      let valB = b[key];

      // numérico (ex: CPF)
      if (!isNaN(Number(valA)) && !isNaN(Number(valB))) {
        valA = Number(valA);
        valB = Number(valB);
      } else {
        // texto
        valA = valA?.toString().toLowerCase();
        valB = valB?.toString().toLowerCase();
      }

      if (valA < valB) return direction === "asc" ? -1 : 1;
      if (valA > valB) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setIdosos(sorted);
  };

  const getArrow = (key) => {
    if (sortConfig.key !== key) return "↕";
    return sortConfig.direction === "asc" ? "↑" : "↓";
  };

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th w="200px" onClick={() => handleSort("Nome")}>
              Nome {getArrow("Nome")}
            </Th>
            <Th w="150px" onClick={() => handleSort("DataInternacao")}>
              Data Internação {getArrow("DataInternacao")}
            </Th>
            <Th w="160px" onClick={() => handleSort("DataNascimento")}>
              Data Nascimento {getArrow("DataNascimento")}
            </Th>
            <Th w="120px" onClick={() => handleSort("CPF")}>
              CPF/RNE {getArrow("CPF")}
            </Th>
            <Th w="200px" onClick={() => handleSort("ResponsavelNome")}>
              Nome do Responsável {getArrow("ResponsavelNome")}
            </Th>
            <Th w="120px" onClick={() => handleSort("ResponsavelParentesco")}>
              Parentesco {getArrow("ResponsavelParentesco")}
            </Th>
            <Th w="150px" onClick={() => handleSort("ResponsavelTelefone")}>
              Telefone {getArrow("ResponsavelTelefone")}
            </Th>
            <Th w="120px" onClick={() => handleSort("Convenio")}>
              Convênio {getArrow("Convenio")}
            </Th>
            <Th w="200px" onClick={() => handleSort("Diagnostico")}>
              Diagnóstico {getArrow("Diagnostico")}
            </Th>
            <Th w="100px" onClick={() => handleSort("Status")}>
              Status {getArrow("Status")}
            </Th>
            <Th w="400px" onClick={() => handleSort("Observacoes")}>
              Observações {getArrow("Observacoes")}
            </Th>
            <Th w="80px">Editar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {idosos.map((item) => (
            <Tr key={item.ID}>
              <Td w="200px" $breakLine>
                {item.Nome}
              </Td>
              <Td w="100px">{formatDateBR(item.DataInternacao)}</Td>
              <Td w="100px">{formatDateBR(item.DataNascimento)}</Td>
              <Td w="130px">{item.CPF}</Td>
              <Td w="200px" $breakLine>
                {item.ResponsavelNome}
              </Td>
              <Td w="120px">{item.ResponsavelParentesco}</Td>
              <Td w="150px">{formatPhoneBR(item.ResponsavelTelefone)}</Td>
              <Td w="120px" $breakLine>
                {item.Convenio}
              </Td>
              <Td w="200px" $breakLine>
                {item.Diagnostico}
              </Td>
              <Td w="100px">{item.Status}</Td>
              <Td w="400px" $breakLine>
                {item.Observacoes}
              </Td>
              <Td w="80px">
                <FaEdit onClick={() => handleEdit(item)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
};

export default Grid;
