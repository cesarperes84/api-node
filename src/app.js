import express from "express";
import "module-alias/register.js";
import './config.js';
import { router } from "./routes/api.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.status(404).send("END POINT INVÁLIDO!");
});

app.use(express.json());

app.use("/api", router);

// error handling middleware
app.use((error, request, response, next) => {
  console.log(error);
  response.status(422).send({error: error.message});
});

app.listen(process.env.PORT, () => {
  console.log('Servidor em execução na porta: '+ process.env.PORT);
});
