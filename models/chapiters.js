const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('chapiter', {
        idWebnovel: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATEONLY
        }
    }, {
        timestamps: false
    })
}