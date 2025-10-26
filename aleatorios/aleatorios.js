
retornoNumeroAleatorio = function(){
    let numeroAleatorio ;
    numeroAleatorio = Math.random() * 100;
    let numeroFinal = parseInt(numeroAleatorio) + 1;
    return numeroFinal;
}
generarAleatorio = function(){
    let aleatorio = [];
    let numeroCaja = document.getElementById("Numero");
    let numeroFinal = numeroCaja.value;

    if ( numeroFinal < 5 || numeroFinal > 20){
        alert("ingrese un numero entre 5 y 20");
        return;
    }
    for(let i = 0; i < numeroFinal; i++){
        console.log("indice: " + i);
        let numero = retornoNumeroAleatorio();
        aleatorio.push(numero);
    }
    console.log(aleatorio);
    mostrarResultado(aleatorio);
}
mostrarResultado = function (arregloNumero){
    let cmpTabla = document.getElementById("tabla");
    tabla = "<table><tr><th>nota</th></tr>";
    let miNota;
    for( let i = 0; i < arregloNumero.length; i++){
        miNota = arregloNumero[i];
        tabla += "<tr><td>";
        tabla += miNota;
        tabla += "</tr></td>";
    }
    tabla += "</table>";
    cmpTabla.innerHTML = tabla;
}