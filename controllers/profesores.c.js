let profesores = [
    {
        "id": "1" ,
        "nombre": "Pedro",
        "apellido": "Martinez",
        "materias": ["Matematica 2", "Metodos Numericos"],
},
    {
        "id": "2",
        "nombre": "Antonio",
        "apellido": "Perez",
        "materias": "Logica Basica",

},
{
    "id": "3",
    "nombre": "Mauro",
    "apellido": "Gonzalez",
    "materias": "Fisica",
},
{
    "id": "4",
    "nombre": "Alejandra",
    "apellido": "Blanco",
    "materias": "Matematica 0",
}
]

class ProfesoresController{

    mostrar(){
        return profesores;
    }

    añadir(profesor){  
        profesor.id = profesores.length + 1;
        profesores.push(profesor)
    }

    editar(id, materia){
        for (const p of profesores) {
            if (p.id === id) {
                p.materias = materia;
            }
        }
    }

    eliminar(id) {
        for (let i = 0; i < profesores.length; i++) {
            const profesor = profesores[i];
            
            if (profesor.id === id) {
                profesores.splice(i, 1);
            }
        }
    }
}

module.exports = new ProfesoresController();
