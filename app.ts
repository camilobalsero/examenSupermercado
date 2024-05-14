import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import register from "./controller/register-controller";
import auth from "./routes/auth";
import catalogo from "./routes/catalogo";
import pedido from "./controller/pedidos-controller";
import misPedidos from "./controller/historial-controller";


dotenv.config();

const app = express().use(bodyParser.json());

app.use('/register', register);
app.use('/auth', auth);
app.use('/catalogo',catalogo)
app.use('/pedido',pedido)
app.use('/misPedidos',misPedidos)

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
