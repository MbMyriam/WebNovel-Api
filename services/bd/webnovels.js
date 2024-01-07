const db = require('../../models');

exports.getAllNovels = async () => {
    return await db.webnovels.findAll();
};

exports.addWebnovel = async (title, date) => {
    return await db.webnovels.create({title, date});
};

exports.getWebnovelById = async (id) => {
    return await db.webnovels.findOne({
        where: {
            id
        }
    });
};

exports.deleteWebnovelById = (id) => {
    return db.webnovels.destroy({
        where: {
            id
        }
    });
};