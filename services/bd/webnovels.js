const db = require('../../models');

exports.getAllNovels = async () => {
    return await db.webnovels.findAll();
};

exports.addWebnovel = async (title, date) => {
    return await db.webnovels.create({title, date});
};