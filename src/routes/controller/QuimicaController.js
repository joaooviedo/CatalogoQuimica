import { moleculatabela } from "../model/moleculas.js";

export const getIndex = async (req, res) => {
  try {
    let moleculaquimica = await moleculatabela.findAll({
      order: [["nomeiupac","ASC"]]
    });
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
    res.status(500).send(err.message);
  }
};
export const getCriar = (req, res) => {
  res.status(200).render("criar.ejs");
};
export const postCriar = async (req, res) => {
  try {
    const {
      nomeiupac,
      nomeusual,
      imagemnormal,
      formula,
      grupofuncional,
      densidade,
      pontodeebuliçao,
    } = req.body;
    await moleculatabela.create({
      nomeiupac,
      nomeusual,
      imagemnormal,
      formula,
      grupofuncional,
      densidade,
      pontodeebuliçao,
    });
    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const getEditar = async (req, res) => {
  const molecula = await moleculatabela.findByPk(req.params.id);
  res.status(200).render("editar.ejs", {
    molecula,
  });
};
export const postEditar = async (req, res) => {
  const {
    nomeiupac,
    nomeusual,
    imagemnormal,
    formula,
    grupofuncional,
    densidade,
    pontodeebuliçao,
  } = req.body;

  try {
    await moleculatabela.update({
      nomeiupac: nomeiupac,
      nomeusual:nomeusual,
      imagemnormal:imagemnormal,
      formula:formula,
      grupofuncional:grupofuncional,
      densidade:densidade,
      pontodeebuliçao:pontodeebuliçao,
    }, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).redirect('/')
  } catch (err) {
    res.status(500).send(err.message)
  }
};
