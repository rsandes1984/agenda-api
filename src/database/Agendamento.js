import { DataTypes } from "sequelize";
import { connection } from "./connection.js";

const Agendamento = connection.define(
  "agendamento",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    serviço: {
      type: DataTypes.ENUM(
        "Corte Tesoura",
        "Corte Maquina",
        "Corte Desenhado",
        "Barba"
      ),
      defaultValue: "Barba",
    },
    data_agendamento: {
      type: DataTypes.DATE,
    },
    hora_agendamento: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
  }
);

export default Agendamento;
