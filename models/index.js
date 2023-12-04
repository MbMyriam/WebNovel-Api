const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

// Uncomment this block to use Mysql, don't forget to adapt db.config.js
/*const instance = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
        host: dbConfig.hostname,
        port: dbConfig.port,
        dialect: "mysql"
})*/

// Uncomment this block to use Sqlite, don't forget to adapt db.config.js
const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

// 1 seul module.exports mais plusieurs exports, équivalence:
// exports.instance = instance
// exports.users = require('users')(instance)

module.exports = {
    instance,
    webnovels: require('./webnovels')(instance),
};