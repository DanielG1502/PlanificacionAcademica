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
        console.log("punto")
        return new Promise((resolve, reject) => {
             db.query('SELECT * FROM eventos', function (error, results, fields) {
            
            if (error) reject(error);
            resolve(results);
            console.log("hola")
          });
           
        })
       
        // return eventos;
    }

    añadir(evento){  
        evento.id = eventos.length + 1;
        eventos.push(evento)
    }

    editar(id, tipo, fecha, materia){
        for (const e of eventos) {
            if (e.id === id) {
                e.tipo === tipo;
                e.fecha === fecha;
                e.materia === materia;
            }
        }
    }

    eliminar(id) {
        for (let i = 0; i < eventos.length; i++) {
            const evento = eventos[i];
            
            if (evento.id === id) {
                eventos.splice(i, 1);
            }
        }
    }
}

module.exports = new EventosController();