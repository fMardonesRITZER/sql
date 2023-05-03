const { Sequelize, DataTypes } = require('sequelize');
module.exports = function (connection) {
    const Movies = connection.define('Movies',{
        id:{type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        awards: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        freezeTableName:'movies',
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
    )
    return Movies;

}