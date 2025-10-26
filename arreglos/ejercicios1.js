let notas = [];
agregarArreglo = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo = function (){
    let notaR ;
    for( let indice = 0;indice < notas.length;indice++){
        notaR = notas[indice];
        console.log(notaR);
    }

}
probarAgregar = function(){
    let notaRecuperada ;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);

}

agregarNota = function(nota){
    notas.push(nota);
    mostrarNotas();

}

calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio;
    for (let indice = 0;indice < notas.length;indice++){
        sumaNotas += notas[indice];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}
ejecutarPromedio = function(){
    let resultado = calcularPromedio()
    mostrarTexto("promedio",resultado);

}
generarTabla = function(){
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>uno</td></tr>" + 
    "<tr><td>dos</td></tr></table>" ;
    cmpTabla.innerHTML = contenidoTabla;

}
mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>nota</th></tr>";
    let miNota;
    for( let i = 0;i < notas.length; i++){
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;


}