var express = require('express');
var router = express.Router();
var Noticia =  require ('../models/noticia');

/* GET home page. */
router.get('/',  async function (req, res, next) {
  json = await Noticia.find();
  res.json(json); 
    
  });

router.get('/visualizar',  async function (req, res, next) {
  json = await Noticia.findById(req.query.id);
    res.json(json); 
    
  });
  router.get('/contador', async function (req, res, next) {
  quantidade = await Noticia.find().count();
  res.json({ quantidade:quantidade });
});



module.exports = router;