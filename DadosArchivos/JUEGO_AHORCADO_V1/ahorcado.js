
//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0; 

esMayuscula = function(caracter) {    
    let codigo = caracter.charCodeAt(0);

    if (codigo >= 65 && codigo <= 90) {
        return true;
    } else {
        return false;
    }
}
guardarPalabra = function (){
    let palabra = recuperarTexto("txtSecreta");

    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        let codigo = palabra.charCodeAt(i);
        if (codigo < 65 || codigo > 90) {
            alert("La palabra debe contener solo letras mayúsculas");
            return;
        }
    }

    palabraSecreta = palabra;

    console.log("Palabra guardada:", palabraSecreta);
}
mostrarLetra = function(letra,posicion){
  let idDiv = "div" + posicion;

  let componente = document.getElementById(idDiv);
  componente.innerText = letra;
}
validar = function(letra) {
  let letrasEncontradas = 0;

  for (let i = 0; i < palabraSecreta.length; i++) {
    if (palabraSecreta.charAt(i) === letra) {
      mostrarLetra(letra, i);

      letrasEncontradas++;
      coincidencias++;
      
    }
   }
   if(letrasEncontradas == 0){
    alert("LA LETRA NO ES PARTE DE LA PALABRA");
    errores++;
   }
}
ingresarLetra = function() {
  let letra = recuperarTexto("txtLetra");

  intentos++;
  if (letra >= "A" && letra <= "Z") {
    validar(letra);

    if (coincidencias == 5) {
      alert("HA GANADO");
    }
    if (intentos == 10) {
      alert("HA PERDIDO");
    }

  } else {
    alert("SOLO SE ACEPTAN MAYÚSCULAS");
  }
  document.getElementById("txtLetra").value = "";
  mostrarAhorcado()
  verificarFinDelJuego(palabraSecreta,palabra);

}

mostrarAhorcado = function() {
  let imagen = document.getElementById("ahorcadoImagen"); 
  imagen.src = "Ahorcado" +"_0"+errores+".png"; 
}

verificarFinDelJuego = function(palabraSecreta, palabraActual) {
  
  if (errores >= maxErrores) {
    alert("Perdiste 😢");
    let imagen = document.getElementById("ahorcadoImagen"); 
    imagen.src = "gameOver.gif";
    
  }

  if (palabraSecreta === palabraActual) {
    alert("¡Ganaste! 🎉");
    let imagen = document.getElementById("ahorcadoImagen"); 
    imagen.src = "ganador.gif";
  }
}





