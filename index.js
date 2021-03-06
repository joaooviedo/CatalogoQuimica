import express from "express";
import { routes } from "./src/routes/routes.js";
import path, { dirname } from "path";
import dotenv from "dotenv";
import { urlencoded } from "express";

dotenv.config();

const app = express();
const port = 3002;
const __dirname = path.resolve(path.dirname(""));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(routes);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));



app.listen(port, (req, res) =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
