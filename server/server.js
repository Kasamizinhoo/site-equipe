import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/submit-form", async (req, res) => {
  try {
    const formData = req.body;
    const url = "https://formspree.io/f/xoqojyew"; // Seu link do Formspree aqui

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      res.json({ status: "success", message: "Mensagem enviada com sucesso!" });
    } else {
      throw new Error("Erro ao enviar o formulário.");
    }
  } catch (error) {
    console.error("Erro ao enviar formulário:", error);
    res.status(500).json({ status: "error", message: "Erro ao enviar o formulário" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
