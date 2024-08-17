
const encabezado = document.getElementById('titulo');
const parrafo = document.getElementById('texto'); 
const boton = document.getElementById('botonOperacion');

function cambiarTexto() {
    parrafo.textContent = 'change';
}

function cambiarColor() {
    encabezado.style.color = 'green';
}

function restaurarColor() {
    encabezado.style.color = '';
}

boton.addEventListener('click', cambiarTexto);

encabezado.addEventListener('mouseover', cambiarColor);
encabezado.addEventListener('mouseout', restaurarColor);
