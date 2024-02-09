var express = require('express');
var router = express.Router();
var EventosController = require ("../controllers/eventos.c")

router.get('/', function(req, res, next) {
    const eventos = EventosController.mostrar();
    res.send (eventos)
  });

  router.post('/', function(req, res, next) {
    EventosController.añadir(req.body);
    res.send(EventosController.mostrar());
});

router.put('/:id', function(req, res, next) {
  res.send(EventosController.editar(req.params.id, req.body));
});

router.delete('/:id', function(req, res, next) {
  EventosController.eliminar(req.params.id);
  res.send(EventosController.mostrar());
});

module.exports = router;