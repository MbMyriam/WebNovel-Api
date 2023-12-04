const webnovelsService = require('../services/bd/webnovels');


exports.getAllNovels = (req, res) => {
    const webnovels = webnovelsService.getAllNovels();
    res.set('Cache-Control', 'max-age=30');
    res.json({success: true, data: webnovels});
 };