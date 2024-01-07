const db = require('../../models');

exports.getAllChapiters = async () => {
    return await db.chapiters.findAll();
};

exports.addChapiter = async (title, date) => {
    return await db.chapiters.create({title, date});
};

exports.getChapiterByNumber = async (number) => {
    return await db.chapiters.findOne({
        where: {
            number
        }
    });
};

exports.deleteChapiterByNumber = (number) => {
    return db.chapiters.destroy({
        where: {
            number
        }
    });
};