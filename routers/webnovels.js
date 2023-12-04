const router = require('express').Router();
const webnovelsController = require('../controllers/webnovels');

router.get('/', webnovelsController.getAllNovels);

module.exports = router;