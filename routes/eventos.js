var express = require('express');
var router = express.Router();
var EventosController = require ("../controllers/eventos.c")

//router.get('/view', function(req, res, next) {
//    EventosController.mostrar()
//    .then(eventos);
//    res.render ('eventos', {
//      title: 'Eventos',
 //     eventos
 //   })
//  });

  router.get('/', function(req, res, next) {
    //res.send (EventosController.mostrar());
    EventosController.mostrar()
      .then((resultado) =>{
        const resultados = {
          eventos:resultado
        }
        res.send(resultados);
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
  //res.send(EventosController.editar(req.params.id, req.body));
  EventosController.editar(req.body, req.params.id)
  .then(()=>{
    EventosController.mostrar()
    .then((resultados)=>{
      res.send(resultados);
    })
   })
});

router.delete('/:id', function(req, res, next) {
  EventosController.eliminar(req.params.id);
  res.send(EventosController.mostrar());
});

module.exports = router;