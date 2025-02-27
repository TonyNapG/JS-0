let formulario = document.getElementById('form')
let usuario_comentario = document.getElementById('comentarios')



function crearElemento(){
    let elemento = document.createElement('span')
        elemento.classList.add('comentario')
        return elemento;
}

function crearBoton(){
    let boton = document.createElement('button')
    boton.classList.add('botonEliminar')
    boton.textContent = "Eliminar";
    return boton;
}

function crearFecha(){
    let dia = new Date().toLocaleDateString();
    let hora = new Date().toLocaleTimeString();
    let fecha = document.createElement('div');
    fecha.classList.add('fecha')
    fecha.textContent = `${dia} ${hora}`
    return fecha;
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
let comentario = document.getElementById('commentbox').value
let elemento = crearElemento();
elemento.innerHTML = comentario
usuario_comentario.appendChild(elemento)
document.getElementById('commentbox').value=''; //limpia el commentbox


let fecha = crearFecha();
usuario_comentario.appendChild(fecha);


let boton = crearBoton();
usuario_comentario.appendChild(boton);


boton.addEventListener('click', () => {
    usuario_comentario.removeChild(elemento);
    usuario_comentario.removeChild(fecha);
    usuario_comentario.removeChild(boton);
})


}
)

