import styled from "styled-components";
import { FaEdit } from "react-icons/fa";

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  min-width: 900px;
  background-color: #fff;
  padding: 15px;
  box-shadow: 0px 0px 5px #ccc;
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
  const handleEdit = (item) => {
    setOnEdit(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <TableWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th w="200px">Nome</Th>
            <Th w="140px">Data Internação</Th>
            <Th w="150px">Data Nascimento</Th>
            <Th w="120px">CPF</Th>
            <Th w="200px">Nome do Responsável</Th>
            <Th w="120px">Parentesco</Th>
            <Th w="150px">Telefone</Th>
            <Th w="120px">Convênio</Th>
            <Th w="200px">Diagnóstico</Th>
            <Th w="100px">Status</Th>
            <Th w="400px">Observações</Th>
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
              <Td w="120px">{item.CPF}</Td>
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
