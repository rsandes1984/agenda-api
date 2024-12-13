import { Router } from "express";
import Agendamento from "../database/Agendamento.js";


const agendamentoRouters = Router();

agendamentoRouters.get("/agendamento", async (req, res) => {
  try {
    const agendamento = await Agendamento.findAll();
    res.json(agendamento);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

agendamentoRouters.get("/agendamento/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const agendamento = await Agendamento.findByPk(id);

    if (agendamento) {
      res.json(agendamento);
    } else {
      res.status(404).json({
        mensagem: "Agendamento não encontrado.",
      });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

agendamentoRouters.post("/agendamento", async (req, res) => {
  try {
    const dados = req.body;
    const salvo = await Agendamento.create(dados);
    res.json(salvo);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde.",
    });
  }
});

agendamentoRouters.put("/agendamento/:id", async (req, res) => {
  try{
    const { id } = req.params;
    const dados = req.body;
    const agendamento = await Agendamento.findByPk(id);

    if(agendamento) {
        await agendamento.update(dados);
        res.json(agendamento);
    } else{
      res.status(404).json ({
        mensagem: "Agendamento não encontrado."
      });
    }

  }
  catch(erro) {
    res.status(500).json({
      mensagem: "Erro interno no servidor. Tente mais tarde."
    });
  }
});

agendamentoRouters.delete("/agendamento/:id", async (req, res) => {
    try{
        const { id } = req.params;
        const agendamento = await Agendamento.findByPk(id);
        if(agendamento) {
            await agendamento.destroy();
            res.json({
              mensagem:"Agendamento removida."
            });
        } else{
          res.status(404).json({
            mensagem: "Agendamento não encontrado."
          });
        }
    }
    catch(erro){
      res.status(500).json({
        mensagem: "Erro interno no servidor. Tente mais tarde."
      });
    }
});

export default agendamentoRouters;