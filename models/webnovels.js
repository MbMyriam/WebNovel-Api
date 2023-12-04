const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('webnovels', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING
        },
        chapiter: {
            type: DataTypes.ARRAY(DataTypes.INTEGER, DataTypes.STRING)
        },
        date: {
            type: DataTypes.DATEONLY
        }
    }, {
        timestamps: false
    })
}