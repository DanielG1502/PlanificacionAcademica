var express = require('express');
var router = express.Router();
var MateriasController = require ("../controllers/materias.c")

router.get('/view', function(req, res, next) {
    const materias = MateriasController.mostrar();
    res.render ('materias', {
      title: 'Materias',
      materias: materias
    })
  });

  router.get('/', function(req, res, next) {
    res.send (MateriasController.mostrar());
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