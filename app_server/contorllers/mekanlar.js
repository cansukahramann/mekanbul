var express = require('express');
var router = express.Router();

//anasayfa ismi sabit kalması için const yapılır

const anaSayfa = function(req, res, next) {
    res.render('anasayfa', { title: 'Anasayfa' });
  }

const mekanBilgisi = function(req, res, next) {
    res.render('mekanbilgisi', { title: 'Mekan Bilgisi' });
  }

const yorumEkle = function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
  }


// anasayfayı dış dünyaya açmak için 

module.exports = {
    anaSayfa , mekanBilgisi , yorumEkle 
  }

