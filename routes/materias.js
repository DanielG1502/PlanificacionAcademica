var express = require('express');
var router = express.Router();
var MateriasController = require ("../controllers/materias.c")

router.get('/', function(req, res, next) {
    const materias = MateriasController.mostrar();
    res.send (materias)
  });

  router.post('/', function(req, res, next) {
    MateriasController.añadir(req.body);
    res.send(MateriasController.mostrar());
});

router.put('/:id', function(req, res, next) {
  res.send(MateriasController.editar(req.params.id, req.body));
});

router.delete('/:id', function(req, res, next) {
  MateriasController.eliminar(req.params.id);
  res.send(MateriasController.mostrar());
});

module.exports = router;