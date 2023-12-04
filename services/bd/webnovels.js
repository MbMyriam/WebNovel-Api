const db = require('../../models');

exports.getAllNovels = async () => {
    return await db.webnovels.findAll();
};