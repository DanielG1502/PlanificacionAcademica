//let materias = [
//    {
//        "id": "1" ,
//        "nombre": "Matematica 2",
//        "secciones": "C2",
//        "numalumnos": 15,
//},
//    {
//        "id": "2",
//        "nombre": "Logica Basica",
//        "secciones": "B4",
//        "numalumnos": 26,
//
//},
//    {
//    "id": "3",
//    "nombre": "Metodos Numericos",
//    "secciones": "A1",
//    "numalumnos": 10,
//},
//    {
//    "id": "4",
//    "nombre": "Matematica 0",
//    "secciones": ["E1", "E3"],
//    "numalumnos": 40,
//},
//    {
//    "id": "5",
//    "nombre": "Fisica",
//    "secciones": "C3",
//    "numalumnos": 18,
//}
//]

class MateriasController{

    mostrar(){
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM materias', function (error, results, fields) {
           
           if (error) reject(error);
           resolve(results);

         });
          
       })
        //return materias;
    }

    añadir(materia){  
        materia.id = materias.length + 1;
        materias.push(materia)
    }

    editar(id, nombre, seccion, alumnos){
        for (const m of materias) {
            if (m.id === id) {
                m.nombre === nombre;
                m.secciones === seccion;
                m.numalumnos === alumnos;
            }
        }
    }

    eliminar(id) {
        for (let i = 0; i < materias.length; i++) {
            const materia = materias[i];
            
            if (materia.id === id) {
                materias.splice(i, 1);
            }
        }
    }
}

module.exports = new MateriasController();