import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "reviva123",
  database: "reviva",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Banco conectado!");
});
