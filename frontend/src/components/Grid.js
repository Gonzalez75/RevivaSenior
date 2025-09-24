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
  text-align: center;
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

const Grid = ({ idosos, setIdosos, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = idosos.filter((user) => user.id !== id);
        setIdosos(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };
  return (
    <Table>
      <Thead>
        <Tr>
          <Th w="200px">Nome</Th>
          <Th w="50px">Data da Internação</Th>
          <Th w="50px">Data do Nascimento</Th>
          <Th w="100px">CPF</Th>
          <Th w="200px">Nome do Responsável</Th>
          <Th w="100px">Parentesco do Responsável</Th>
          <Th w="100px">Telefone do Responsável</Th>
          <Th w="100px">Convênio</Th>
          <Th w="200px">Diagnóstico</Th>
          <Th w="80px">Status</Th>
          <Th w="400px">Observações</Th>
          <Th w="80px">Editar</Th>
          <Th w="80px">Excluir</Th>
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
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td $alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
