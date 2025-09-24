import { db } from "../db.js";

export const getIdosos = (req, res) => {
  const q = "SELECT * FROM idosos";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addIdoso = (req, res) => {
  const q =
    "INSERT INTO idosos(`Nome`,`DataInternacao`,`DataNascimento`,`CPF`,`ResponsavelNome`,`ResponsavelParentesco`,`ResponsavelTelefone`,`Convenio`,`Diagnostico`,`Status`,`Observacoes`) VALUES (?)";

  const values = [
    req.body.Nome,
    req.body.DataInternacao,
    req.body.DataNascimento,
    req.body.CPF,
    req.body.ResponsavelNome,
    req.body.ResponsavelParentesco,
    req.body.ResponsavelTelefone,
    req.body.Convenio,
    req.body.Diagnostico,
    req.body.Status,
    req.body.Observacoes,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Idoso adicionado com sucesso!");
  });
};

export const updateIdoso = (req, res) => {
  const q =
    "UPDATE idosos SET `Nome` = ?, `DataInternacao` = ?, `DataNascimento` = ?, `CPF` = ?, `ResponsavelNome` = ?, `ResponsavelParentesco` = ?, `ResponsavelTelefone` = ?, `Convenio` = ?, `Diagnostico` = ?, `Status` = ?, `Observacoes` = ? WHERE `ID` = ?";

  const values = [
    req.body.Nome,
    req.body.DataInternacao,
    req.body.DataNascimento,
    req.body.CPF,
    req.body.ResponsavelNome,
    req.body.ResponsavelParentesco,
    req.body.ResponsavelTelefone,
    req.body.Convenio,
    req.body.Diagnostico,
    req.body.Status,
    req.body.Observacoes,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Idoso atualizado com sucesso!");
  });
};

export const deleteIdoso = (req, res) => {
  const q = "DELETE FROM idosos WHERE `ID` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Idoso deletado com sucesso!");
  });
};
