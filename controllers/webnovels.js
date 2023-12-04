const { getAllNovels} = require('../services/webnovels');


exports.getAllNovels = (req, res) => {
    res.json(getAllNovels());
}