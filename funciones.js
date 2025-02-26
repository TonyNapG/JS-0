// // crea una función que reciba un array de num y retorne cuantos num son pares


// function contarPares(numeros){
//     contador = 0
//     for(i=0; i < numeros.length; i++){
//         if(numeros[i] % 2 === 0){
//             contador++
//         }
//     }
//     return contador;
// }
// console.log(contarPares([1,2,3,4,5,6]))

// // crear una funcion que reciba un arrey y retorne el num mas grande

// function numMayor(nume){
//     let mayor = nume[0]
//     for(let i=0; i < nume.length; i++){
//         nume[i]
//         if(mayor < nume[i]){
//             mayor = nume[i]
//         }
//     }
//     return mayor;
// }
// console.log(numMayor([55,21,2,100,4,3]))

// // crear un objeto el cual sea un estudiante (nombre, edad y array de nota)
// //función que reciba este objeto y returne el promedio de las notas

// let estudiante = {
//     nombre: 'Tony',
//     edad: 28,
//     notas: [100, 80, 90, 0]
// }

// function calcularPromedio(estudiante){
//     let suma = 0;
//     for(let i=0; i < estudiante.notas.length; i++){
//         suma += estudiante.notas[i]
//     }
//     return suma / estudiante.notas.length
// }
// console.log(calcularPromedio(estudiante));

// // crear una funcion que reciba un arrey de objetos con estudiantes
// // y que returne un nuevo arrey con los nombres y el promedio

// const estudiantes = [
//     {nombre: 'Tony', notas: [100, 80, 90]},
//     {nombre: 'Miguel', notas: [90, 65, 90]},
//     {nombre: 'Mau', notas: [70, 85, 90]},
// ]

// function generarReporte(estudiantes){
//     let reporte =[];
//     for(let i=0; i <estudiantes.length; i++){
//         let suma =0;
//         for(let j=0; j < estudiantes[i].notas.length; j++){
//             suma +=estudiantes[i].notas[j]
//         }
//         let promedio = suma /estudiantes[i].notas.length;
//         reporte.push({nombre: estudiantes[i].nombre, promedio: promedio })
//     }
//     return reporte;
// }
// console.log(generarReporte(estudiantes));

// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
let librosLeidos =[]

function agregarLibro(...titulo){
    
        librosLeidos.push(...titulo)
    return librosLeidos;
}
console.log(agregarLibro('Cien años de soledad'));
console.log(agregarLibro('Nomas', 'el principito'));
console.log(agregarLibro('La Odisea', 'Crimen y castigo', 'El gran Gatsby', 'Mujercitas', 'El hobbit', 'El señor de los anillos', 'Harry Potter y la piedra filosofal'));
//console.log(`estos son los libros leidos ${librosLeidos}`);



//Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

function mostrarLibrosLeidos(librosLeido){
    for(i=0; i < librosLeido.length; i++){
        console.log(librosLeido[i]);  
    }
    return true;
}
console.log(mostrarLibrosLeidos(librosLeidos));
