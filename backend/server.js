const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let notas = [{ id: 1, texto: "Primera nota" }];

app.get("/api/notas", (req, res) => {
  res.json(notas);
});

app.post("/api/notas", (req, res) => {
  const { texto } = req.body;
  if (!texto) return res.status(400).json({ error: "Texto requerido" });

  const nuevaNota = { id: notas.length + 1, texto };
  notas.push(nuevaNota);
  res.status(201).json(nuevaNota);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});