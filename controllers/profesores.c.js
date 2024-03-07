const db = require("./conexion")

//let profesores = [
//    {
//        "id": "1" ,
//        "nombre": "Pedro",
//        "apellido": "Martinez",
//        "materias": ["Matematica 2", "Metodos Numericos"],
//},
//    {
//        "id": "2",
//        "nombre": "Antonio",
//        "apellido": "Perez",
//        "materias": "Logica Basica",
//
//},
//{
//    "id": "3",
//    "nombre": "Mauro",
//    "apellido": "Gonzalez",
//    "materias": "Fisica",
//},
//{
//    "id": "4",
//    "nombre": "Alejandra",
//    "apellido": "Blanco",
//    "materias": "Matematica 0",
//}
//]

class ProfesoresController{

    mostrar(){
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM profesores', function (error, results, fields) {
           
           if (error) reject(error);
           resolve(results);

         });
          
       })
       // return profesores;
    }

    añadir(profesor){  
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO profesores SET ?', profesor, function (error, results, fields) {
            
                if (error) reject(error);
                resolve(results);})
        
        })
       // profesor.id = profesores.length + 1;
       // profesores.push(profesor)
    }

    editar(id, nombre, apellido, materia){
        return new Promise((resolve, reject) => {

            db.query('UPDATE profesores SET nombre=?, apellido=?, materia=? WHERE id=?', [id, nombre, apellido, materia], function (error, results, fields) {
            
                if (error) reject(error);
                resolve(results);})
        
        })
       // for (const p of profesores) {
       //     if (p.id === id) {
       //          p.nombre === nombre;
       //         p.apellido === apellido;
       //         p.materias === materia;
               
      //      }
       // }
    }

    eliminar(id) {
        return new Promise((resolve, reject) => {

            db.query('DELETE FROM profesores WHERE profesores.id=?', [id], function (error, results, fields) {
            
                if (error) reject(error);
                resolve(results);})
            })
       // for (let i = 0; i < profesores.length; i++) {
        //    const profesor = profesores[i];
       //     
       //     if (profesor.id === id) {
       //         profesores.splice(i, 1);
       //     }
        //}
    }
}

module.exports = new ProfesoresController();
