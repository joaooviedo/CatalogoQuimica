import express from "express";
import { Router } from "express";
import { getIndex, getDetalhes, getDeletar, getCriar, postCriar} from "./controller/QuimicaController.js";

export const routes = express.Router()


//Rotas
routes.get("/", getIndex,);
routes.get( "/detalhes/:id",getDetalhes)
routes.get("/deletar/:id", getDeletar )

routes.get('/criar', getCriar)
routes.post('/criar', postCriar)
