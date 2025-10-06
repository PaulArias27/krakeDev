calcularPromedioNotas = function(){
    let cmpNota1;
    let cmpNota2;
    let cmpNota3;

    cmpNota1 = document.getElementById("nota1");
    let nota1 = cmpNota1.value;
    let valor1Float = parseFloat(nota1);
    cmpNota2 = document.getElementById("nota2");
    let nota2 = cmpNota2.value;
    let valor2Float = parseFloat(nota2);
    cmpNota3 = document.getElementById("nota3");
    let nota3 = cmpNota3.value;
    let valor3Float = parseFloat(nota3);

    let promedio = calcularPromedio(valor1Float,valor2Float,valor3Float);
    let cmpDecimales= promedio.toFixed(2);
    let mensaje = document.getElementById("lblPromedio");
    mensaje.innerHTML = "tu promedio es: " + cmpDecimales; 

    if(cmpDecimales > 7){
        mostrarImagen("imagen","gifExito.gif");
    }else{
        mostrarImagen("imagen","gifFracaso.gif");
    }
}