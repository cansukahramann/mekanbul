var express = require('express');
var router = express.Router();
var ctrlMekanlar = require('../contorllers/mekanlar');
var ctrlDigerleri = require('../contorllers/digerleri');

/* GET home page. */
router.get('/',ctrlMekanlar.anaSayfa)
router.get('/mekan/:mekanid',ctrlMekanlar.mekanBilgisi)
router.get('/mekan/yorum/yeni',ctrlMekanlar.yorumEkle)
router.get('/hakkinda',ctrlDigerleri.hakkinda)

module.exports = router;
