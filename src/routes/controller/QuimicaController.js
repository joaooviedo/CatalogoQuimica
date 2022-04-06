import { moleculatabela } from "../model/moleculas.js";

export const getIndex = async (req, res) => {
  try {
    let moleculaquimica = await moleculatabela.findAll();
    res.status(200).render("index.ejs", {
      moleculaquimica,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const getDetalhes = async (req, res) => {
  try {
    let moleculadet = await moleculatabela.findByPk(req.params.id);
    res.status(200).render("detalhes.ejs", {
      moleculadet,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const getDeletar = async (req, res) => {
  try {
    await moleculatabela.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message)
  }
};
export const getCriar = (req, res) => {
  res.status(200).render("criar.ejs")
}
export const postCriar = (req, res) => {
  console.log(req.body)
  const { nomeiupac, nomeusual, imagemnormal, grupofuncional, densidade, pontodeebuliçao} = req.body
}