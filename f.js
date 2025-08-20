const boton1 = document.getElementById('uno');
const boton2 = document.getElementById('dos');
const boton3 = document.getElementById('tres');
const boton4 = document.getElementById('cuatro');
const boton5 = document.getElementById('cinco');
const boton6 = document.getElementById('seis');
const boton7 = document.getElementById('siete');
const boton8 = document.getElementById('ocho');
const boton9 = document.getElementById('nueve');
const botonCero = document.getElementById('cero');
const botonIgual = document.getElementById('igual');
const botonMas = document.getElementById('mas');
const botonMenos = document.getElementById('menos');
const botonDividir = document.getElementById('dividir');
const botonMultiplicar = document.getElementById('multiplicar');
const borrar = document.getElementById('borrar');

const pantalla = document.getElementById('pantalla');


botonMas.addEventListener("click", () => operadores('+'));
botonMenos.addEventListener("click",() => operadores ('-'));
botonDividir.addEventListener("click", () => operadores('/'));
botonMultiplicar.addEventListener("click", () => operadores('*'));
borrar.addEventListener('click',borrarPantalla);
botonIgual.addEventListener('click', () => {
    try{
        pantalla.value = eval(pantalla.value)
    }   catch{
        pantalla.value = 'ERROR'
    }
});


function agregarNumero(num) {
    pantalla.value += num;
}

boton1.addEventListener("click", () => agregarNumero(1));
boton2.addEventListener("click", () => agregarNumero(2));
boton3.addEventListener("click", () => agregarNumero(3));
boton4.addEventListener("click", () => agregarNumero(4));
boton5.addEventListener("click", () => agregarNumero(5));
boton6.addEventListener("click", () => agregarNumero(6));
boton7.addEventListener("click", () => agregarNumero(7));
boton8.addEventListener("click", () => agregarNumero(8));
boton9.addEventListener("click", () => agregarNumero(9));
botonCero.addEventListener("click", () => agregarNumero(0));

function borrarPantalla(){
    pantalla.value = ""
}

function operadores(op){
    pantalla.value += op;
}