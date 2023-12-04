const db = require('../../models/webnovels');

exports.getAllNovels = async () => {
    return await db.webnovels.findAll();
};