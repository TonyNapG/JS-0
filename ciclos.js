//Tu tarea es escribir un programa en Javascript que recorra los números del 1 al 100 y siga estas reglas:
// si un numero es multiplo de 3 imprime "Fizz".
// si un número es multiplo de 5, imprime Buzz 
// si un número es múltiplo de 3 y de 5, imprime "FizzBuzz".
// Si un número no es múltiplo de 3 ni de 5, simplemente imprime el número.


// for(num = 1; num <=100 ; num++){
//     if(num%3 === 0){
//         if ( num%5 === 0){
//             console.log(`Fizz Buzz ${num}`) 
//          }
//         console.log(`Fizz ${num}`)
//     }
//     else if(num%5 === 0){
//         console.log(`Buzz ${num}`)
//     }
//     else{
//         console.log(num)
//     }
// }

//Clasificación de Frutas
// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.
// Opcional: intenta implementar la solución con el otro ciclo también (for/while).

let frutas = ['Manzana', 'Banana', 'Naranja', 'Uva', 'Frutilla', 'Arándano', 'Mango', 'Piña', 'Sandía', 'Melón', 'Kiwi', 'Pera', 'Durazno', 'Ciruela', 'Cereza', 'Frambuesa', 'Mora', 'Aguacate', 'Limón', 'Lima']
let contador_de_frutas_1 = 0
let contador_de_frutas = 0

for(i = 0; i <= frutas.length; i++){
    contador_de_frutas_1 += 1
}
console.log(contador_de_frutas_1)

while(contador_de_frutas <= frutas.length){
    contador_de_frutas += 1
}
console.log(contador_de_frutas)

