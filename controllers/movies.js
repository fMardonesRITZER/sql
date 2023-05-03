const { Sequelize, DataTypes } = require('sequelize');
const connection = require ('../database/mysql_connection');
const movies = require('../models/movies');
const moduleMovie = require('../models/movies')(connection);
const controller = {
    list: (req,res) =>{
        moduleMovie.findAll({

        })
        .then( movies =>{
            res.render ('list.ejs', {movies})
        })
    }
}


module.exports = controller;