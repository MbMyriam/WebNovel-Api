const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('webnovel', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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