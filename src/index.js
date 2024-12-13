import "dotenv/config";
import express from "express";
import cors from "cors";
import agendamentoRouters from "./routes/agendamentoRoute.js";
import authenticate from "./database/connection.js";

authenticate();

const servidor = express();

servidor.use(cors({ origin: "*" }));

servidor.use(express.json());

servidor.use(agendamentoRouters);

servidor.listen(3000, () => {
  console.log("Servidor em execução.");
});
