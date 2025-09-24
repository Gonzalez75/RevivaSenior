import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px 20px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
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
  margin-top: 28px;
`;

const Form = ({ getIdosos, onEdit, setOnEdit }) => {
  const [formData, setFormData] = useState({
    nome: "",
    datainternacao: "",
    datanascimento: "",
    cpf: "",
    responsavelnome: "",
    responsavelparentesco: "",
    responsaveltelefone: "",
    convenio: "",
    diagnostico: "",
    status: "",
    observacoes: "",
  });

  useEffect(() => {
    if (onEdit) {
      setFormData({
        nome: onEdit.Nome || "",
        datainternacao: onEdit.DataInternacao || "",
        datanascimento: onEdit.DataNascimento || "",
        cpf: onEdit.CPF || "",
        responsavelnome: onEdit.ResponsavelNome || "",
        responsavelparentesco: onEdit.ResponsavelParentesco || "",
        responsaveltelefone: onEdit.ResponsavelTelefone || "",
        convenio: onEdit.Convenio || "",
        diagnostico: onEdit.Diagnostico || "",
        status: onEdit.Status || "",
        observacoes: onEdit.Observacoes || "",
      });
    }
  }, [onEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Máscara para telefone
    if (name === "responsaveltelefone") {
      let val = value.replace(/\D/g, "");
      if (val.length > 11) val = val.slice(0, 11);
      val = val.replace(/^(\d{2})(\d)/g, "($1) $2");
      val = val.replace(/(\d{5})(\d)/, "$1-$2");
      setFormData({ ...formData, [name]: val });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    const emptyField = Object.entries(formData).find(([key, value]) => !value);
    if (emptyField) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      // Monta o objeto para enviar para a API
      const payload = {
        Nome: formData.nome,
        DataInternacao: formData.datainternacao,
        DataNascimento: formData.datanascimento,
        CPF: formData.cpf,
        ResponsavelNome: formData.responsavelnome,
        ResponsavelParentesco: formData.responsavelparentesco,
        ResponsavelTelefone: formData.responsaveltelefone,
        Convenio: formData.convenio,
        Diagnostico: formData.diagnostico,
        Status: formData.status,
        Observacoes: formData.observacoes,
      };

      let response;
      if (onEdit) {
        response = await axios.put(
          `http://localhost:8800/${onEdit.id}`,
          payload
        );
      } else {
        response = await axios.post("http://localhost:8800", payload);
      }

      toast.success(response.data);

      // Reseta o formulário
      setFormData({
        nome: "",
        datainternacao: "",
        datanascimento: "",
        cpf: "",
        responsavelnome: "",
        responsavelparentesco: "",
        responsaveltelefone: "",
        convenio: "",
        diagnostico: "",
        status: "",
        observacoes: "",
      });

      setOnEdit(null);
      getIdosos();
    } catch (err) {
      // Se o backend retornar mensagem de erro, mostre ela
      if (err.response && err.response.data) {
        toast.error(err.response.data);
      } else {
        toast.error("Erro ao salvar os dados!");
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" value={formData.nome} onChange={handleChange} />
      </InputArea>
      <InputArea>
        <Label>Data Internação</Label>
        <Input
          name="datainternacao"
          type="date"
          value={formData.datainternacao}
          onChange={handleChange}
        />
      </InputArea>
      <InputArea>
        <Label>Data Nascimento</Label>
        <Input
          name="datanascimento"
          type="date"
          value={formData.datanascimento}
          onChange={handleChange}
        />
      </InputArea>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf" value={formData.cpf} onChange={handleChange} />
      </InputArea>
      <InputArea>
        <Label>Nome do Responsável</Label>
        <Input
          name="responsavelnome"
          value={formData.responsavelnome}
          onChange={handleChange}
        />
      </InputArea>
      <InputArea>
        <Label>Parentesco do Responsável</Label>
        <Input
          name="responsavelparentesco"
          value={formData.responsavelparentesco}
          onChange={handleChange}
        />
      </InputArea>
      <InputArea>
        <Label>Telefone do Responsável</Label>
        <Input
          name="responsaveltelefone"
          type="tel"
          maxLength={15}
          value={formData.responsaveltelefone}
          onChange={handleChange}
        />
      </InputArea>
      <InputArea>
        <Label>Convenio</Label>
        <Input
          name="convenio"
          value={formData.convenio}
          onChange={handleChange}
        />
      </InputArea>
      <InputArea>
        <Label>Diagnostico</Label>
        <Input
          name="diagnostico"
          value={formData.diagnostico}
          onChange={handleChange}
        />
      </InputArea>
      <InputArea>
        <Label>Status</Label>
        <Input name="status" value={formData.status} onChange={handleChange} />
      </InputArea>
      <InputArea>
        <Label>Observações</Label>
        <Input
          name="observacoes"
          value={formData.observacoes}
          onChange={handleChange}
        />
      </InputArea>
      <InputArea style={{ gridColumn: "span 1" }}>
        <Button type="submit">SALVAR</Button>
      </InputArea>
    </FormContainer>
  );
};

export default Form;
