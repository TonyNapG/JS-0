// Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.
// Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
let libros = {
    titulo: 'Cien años de soledad', // propiedad titulo
    autor: 'Gabriel García Márquez',
    anio: 1967,
    estado: 'disponible',
//También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
    //metodo (funcion dentro de un objeto)
    describirLibro: function() {
        return `${this.titulo}, escrito por ${this.autor} en el año ${this.anio} se encuentra ${this.estado}`
    },
//Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
    capitulos: ['Fundación de Macondo', 'La llegada de los gitanos'],

    agregarCapitulo: function(nuevoCapitulo){
        this.capitulos.push(nuevoCapitulo)
        console.log(`capitulo ${nuevoCapitulo} agregado`);
        
    },
    eliminarCapitulo: function(){
        this.capitulos.pop()
        console.log(`capitulo eliminado`);
        
    }

    
}
console.log(libros.describirLibro());
libros.agregarCapitulo('prueba')
console.log(libros.capitulos);

libros.eliminarCapitulo()
console.log(libros.capitulos);
