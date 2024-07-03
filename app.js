
/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero';
*/

let numeroSecreto = 0;
let intentos = 0;
let listanumeroSorteados = [];
let numeromaximo = 10;

console.log(numeroSecreto);

function asignarTextoelemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    let numerodeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numerodeUsuario === numeroSecreto){
        asignarTextoelemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numerodeUsuario > numeroSecreto){
                asignarTextoelemento('p', 'Numero secreto es menor');
        } else {
                asignarTextoelemento('p', 'Numero secreto es mayor');
        }
        intentos++;
        valorCero();
        }   
    return;
}


function valorCero(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumerosecreto(){
    let numerogenerado = Math.floor(Math.random()*numeromaximo)+1;

    console.log(numerogenerado);
    console.log(listanumeroSorteados);

    if(listanumeroSorteados.length == numeromaximo){
        asignarTextoelemento('p','Ya se sorteron todos los numeros posibles');

    }else{

    if(listanumeroSorteados.includes(numerogenerado)){
        return generarNumerosecreto();

      }  else{
            listanumeroSorteados.push(numerogenerado);
            return numerogenerado;
        }
    }
}


function condicionesIniciales(){
    asignarTextoelemento('h1', 'Juego del numero secreto');
    asignarTextoelemento('p', `Indica un numero del 1 al ${numeromaximo}`);
    numeroSecreto = generarNumerosecreto();
    intentos = 1;
}

function reiniciarJuego(){
    valorCero();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();