import express from "express";
import cors from "cors";
import idososRoutes from "./routes/idosos.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", idososRoutes);

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});
