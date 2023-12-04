const router = require('express').Router();
const webnovelsController = require('../controllers/webnovels');

router.get('/webnovels', webnovelsController.getAllNovels);

module.exports = router;