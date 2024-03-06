var express = require('express');
var router = express.Router();
var EventosController = require ("../controllers/eventos.c");
const eventosC = require('../controllers/eventos.c');

router.get('/view', function(req, res, next) {
    const eventos = EventosController.mostrar().then(respuesta);
    res.render ('eventos', {
      title: 'Eventos',
      respuesta: eventos
    })
  });

  router.get('/', function(req, res, next) {
    //res.send (EventosController.mostrar());
    EventosController.mostrar()
      .then((resultado) =>{
        const respuesta = {
          eventos:resultado
        }
        res.send(respuesta);
      })
    });

  router.post('/', function(req, res, next) {
   // EventosController.añadir(req.body);
   // res.send(EventosController.mostrar());
   EventosController.añadir(req.body)
   .then(()=>{
    EventosController.mostrar()
    .then((resultados)=>{
      res.send(resultados);
    })
   })
});

router.put('/:id', function(req, res, next) {
  res.send(EventosController.editar(req.params.id, req.body));
});

router.delete('/:id', function(req, res, next) {
  EventosController.eliminar(req.params.id);
  res.send(EventosController.mostrar());
});

module.exports = router;