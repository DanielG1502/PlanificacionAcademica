var express = require('express');
var router = express.Router();
var ProfesoresController = require ("../controllers/profesores.c")

//router.get('/view', function(req, res, next) {
  //  const profesores = ProfesoresController.mostrar();
  //  res.render ('profesores', {
   //   tite: 'Profesores',
  //    profesores: profesores
   // });
 // });

  router.get('/', function(req, res, next) {
    EventosController.mostrar()
      .then((resultado) =>{
        const resultados = {
          eventos:resultado
        }
        res.send(resultados);
      })

  //  res.send (ProfesoresController.mostrar());
    });

  router.post('/', function(req, res, next) {
    EventosController.añadir(req.body)
    .then(()=>{
     EventosController.mostrar()
     .then((resultados)=>{
       res.send(resultados);
     })
    })
  //  ProfesoresController.añadir(req.body);
  //  res.send(ProfesoresController.mostrar());
});

router.put('/:id', function(req, res, next) {
  EventosController.editar(req.body, req.params.id)
  .then(()=>{
    EventosController.mostrar()
    .then((resultados)=>{
      res.send(resultados);
    })
   })
 // res.send(ProfesoresController.editar(req.params.id, req.body));
});

router.delete('/:id', function(req, res, next) {
  ProfesoresController.eliminar(req.params.id);
  res.send(ProfesoresController.mostrar());
});

module.exports = router;