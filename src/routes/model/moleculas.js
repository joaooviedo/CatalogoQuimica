import Sequelize from "sequelize";
import { connection } from "../database/connection.js"

export const moleculatabela = connection.define('moleculatabela', {
    id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeiupac: {
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    nomeusual: {
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    imagemnormal: {
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    formula: {
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    grupofuncional: {
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    densidade: {
        type: Sequelize.TEXT, 
        allowNull: false,
    },
    pontodeebuliçao: {
        type: Sequelize.TEXT, 
        allowNull: false,
    },
}, {
    freezeTableName: true,
    createdAt: false,
    updateAt: false,
    timestamps: false,
})