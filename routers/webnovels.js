const router = require('express').Router();
const webnovelsController = require('../controllers/webnovels');

router.get('/', webnovelsController.getAllNovels);
router.post('/add', webnovelsController.addWebnovel);

module.exports = router;