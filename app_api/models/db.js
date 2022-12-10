var mongoose = require('mongoose');
require("./mekansema");
var dbURI = 'mongodb+srv://cansu:1234@cluster0.ekztqet.mongodb.net/mekanbul?retryWrites=true&w=majority';
//var dbURI = 'mongodb://localhost/mekanbul';
mongoose.connect(dbURI);

function kapat(msg, callback) {
  mongoose.connection.close(() => {
    console.log(msg);
    callback();
  });
}

process.on("SIGINT", () => {
  kapat("Uygulama kapatıldı", () => {
    process.exit(0);
  });
});

mongoose.connection.on("connected", () => {
  console.log(dbURI + " adresindeki veritabanına bağlandı");
});

mongoose.connection.on("disconnect", () => {
  console.log(dbURI + " adresindeki veritabanı bağlantısı koptu");
});

mongoose.connection.on("error", () => {
  console.log("Bağlantı hatası");
});

require("./mekansema");