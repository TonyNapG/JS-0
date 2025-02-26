// Evaluador de Notas con Mensajes Personalizados

// Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:
// Si la nota es 90 o más, el estudiante aprueba con "Excelente".
// Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
// Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
// Si la nota es menor de 60, el estudiante no aprueba.

let calificacion = 59
if (calificacion > 90 ){
    console.log(`Felicidades tu calificación es ${calificacion} excelente`)
}
else if  (calificacion >= 75 && calificacion <= 89 ){
    console.log(`bien hecho tu calificación es ${calificacion} bien`)
}
else if  (calificacion >= 60 && calificacion <= 74 ){
    console.log(`tu calificacion es ${calificacion} suficiente`)
}
else{
    console.log('no aprueba')
}

// g