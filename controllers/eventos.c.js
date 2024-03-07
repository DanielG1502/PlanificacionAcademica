const db = require("./conexion")

//let eventos = [
//    {
//        "id": "1" ,
//        "tipo": "Encuentro Presencial",
//        "fecha": "15/02/2024",
//        "materia": "Matematica 0"
//},
//    {
//        "id": "2",
//       "tipo": "Videoconferencia",
//        "fecha": "14/03/2024",
//        "materia": "Fisica"
//
//},
//    {
//    "id": "3",
//    "tipo": "Evaluacion",
//    "fecha": "23/02/2024",
//    "materia": "Logica Basica"
//}
//]

class EventosController{

    mostrar(){

        return new Promise((resolve, reject) => {
             db.query('SELECT * FROM eventos', function (error, results, fields) {
            
            if (error) reject(error);
            resolve(results);

          });
           
        })
       
        // return eventos;
    }

    añadir(evento){
        
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO eventos SET ?', evento, function (error, results, fields) {
            
                if (error) reject(error);
                resolve(results);})
        
        })
        //evento.id = eventos.length + 1;
        //eventos.push(evento)
    }

    editar(id, tipo, fecha, materia){

        return new Promise((resolve, reject) => {

            db.query('UPDATE eventos SET tipo=?, fecha=?, materia=? WHERE id=?', [id, tipo, fecha, materia], function (error, results, fields) {
            
                if (error) reject(error);
                resolve(results);})
        
        })
       // for (const e of eventos) {
       //     if (e.id === id) {
       //         e.tipo === tipo;
       //         e.fecha === fecha;
       //        e.materia === materia;
       //     }
       //}
        }


    eliminar(id) {
       
        return new Promise((resolve, reject) => {

            db.query('DELETE FROM eventos WHERE eventos.id=?', [id], function (error, results, fields) {
            
                if (error) reject(error);
                resolve(results);})
            })
        // for (let i = 0; i < eventos.length; i++) {
        //    const evento = eventos[i];
            
          //  if (evento.id === id) {
         //       eventos.splice(i, 1);
        //}
       // }
    }
}

module.exports = new EventosController();