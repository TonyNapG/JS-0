let formulario = document.getElementById('form')
let usuario_comentario = document.getElementById('comentarios')
let contador = 0;
let contadorCom = document.getElementById('contador')
let commentbox = document.getElementById('commentbox');
let caracteres = document.getElementById('caracteres')
let usuario = document.getElementById('usuario')
let boton = document.getElementById('submit')

commentbox.addEventListener('input',() =>{
    let long = commentbox.value.length;
    caracteres.textContent = `Caracteres ${long}`

})


function crearContenedorComBotFec(){
    let caja =document.createElement('section')
    caja.classList.add('contenedor_com')
    return caja;
}

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

function com_contador (){
    contador++;
    contadorCom.textContent = `Comentarios ${contador}`;
}
function com_contadormenos(){
    contador -= 1;
    contadorCom.textContent = `Comentarios ${contador}`
}

function validar() {    
    if(usuario.value === '' && commentbox.value===''){
        alert('no has llenado ningun campo')
        return false;
    }
    else if (usuario.value=== '') {
        alert('no has agregado tu usuario, favor de agregarlo');
        return false;
    }
    else if(commentbox.value===''){
        alert('no has agregado tu comentario')
        return false;
    }
    else{
        alert(`tu comentario ha sido añadido gracias ${usuario.value}`)
        return true;
    }
}

    

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validar()) { //(false -> true) cambia el valor booleano al contrio
        return; // detiene al event listener
    }
    

//meter al comentario, elimiar y fecha en un section
    let meter = crearContenedorComBotFec();
    usuario_comentario.appendChild(meter);

    caracteres.textContent = `Caracteres 0`// contador de caracteres en 0 de nuevo

    let nombre = usuario.value
    let usuario_nom = crearElemento();
    usuario_nom.innerHTML = nombre
    meter.appendChild(usuario_nom)
    usuario.value='';

let comentario = commentbox.value
let elemento = crearElemento();
elemento.innerHTML = comentario
meter.appendChild(elemento)
commentbox.value=''; //limpia el commentbox

com_contador();

let fecha = crearFecha();
meter.appendChild(fecha);


let boton = crearBoton();
meter.appendChild(boton);


//almacenar datos en el localstorage
const comentarioData = {
    us : nombre,
    coment: comentario,
    fecha: fecha.textContent //almacenar fecha como texto
};
localStorage.setItem('comentarioG', JSON.stringify(comentarioData)); //convierte objeto a cadena JSON
const obtenerCom =localStorage.getItem('comentarioG');

boton.addEventListener('click', () => {
    com_contadormenos();
    meter.removeChild(elemento);
    meter.removeChild(fecha);
    meter.removeChild(boton);
    usuario_comentario.removeChild(meter);
    localStorage.removeItem('comentarioG')
})

}
)

