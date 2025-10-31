let personas = [
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto",edad:15},
    {nombre:"Kate",   edad:25},
    {nombre:"Diana",  edad:12},
    {nombre:"Benja",  edad:5}
]
agregarPersona = function(){
    let cmpNombre = recuperarTexto("txtNombre");
    if(cmpNombre == 0 || cmpNombre < 3){
        alert("EEROR !!, DEBE TENER ALMENOS 3 CARACTERES");
        return alert;
    }
    let cmpEdad = recuperarTexto("txtEdad");
    if(cmpEdad != parseInt(0) || cmpEdad != parseInt(100)){
        alert("ERROR !!, DEBE SER UN NUMERO ENTERO");
    }
    let nuevaPersona = {};
    nuevaPersona.nombre = cmpNombre;
    nuevaPersona.edad = cmpEdad;

    personas.push(nuevaPersona);
    alert("PERSONA AGREGADA CORRECTAMENTE");
}
mostrarPersonas = function(){
    let cmpPersonas = document.getElementById("tabla");
    let cmpTabla = "<table><tr>"+
    "<th>EDAD</th>"+
    "<th>NOMBRE</th>"+
    "</tr>";
    let elementoPersona ;
    for(let i=0;i<personas.length;i++){
        elementoPersona = personas[i];
        cmpTabla +=
        "<tr><td>"+elementoPersona.edad+"</td>"+
        "<td>"+elementoPersona.nombre+"</td>"+
        "</tr>";
    }
    cmpTabla += "</table>";
    cmpPersonas.innerHTML = cmpTabla;
}

personaMayor = function(personas){
    let personaMayor = personas[0];
    for(let i=0;i<personas.length;i++){
        let cmpMayor = personas[i];
        if(cmpMayor.edad >personaMayor.edad){
            personaMayor = cmpMayor;
        }
    }
    return personaMayor;
}

encontrarMayor = function(){
    let personaMayor = personas[0];
    let elementoPersona ;
    for(let i=0;i<personas.length;i++){
        elementoPersona = personas[i];
        console.log(elementoPersona.nombre, elementoPersona.edad);
        if(elementoPersona.edad > personaMayor.edad){
            personaMayor = elementoPersona;
        }
    } 
    return personaMayor;
}

encontrarMenor = function(){
    let personaMenor = personas[0];
    let elementoPersona ;
    for(let i=0;i<personas.length;i++){
        elementoPersona = personas[i];
    
        if(elementoPersona.edad < personaMenor.edad){
            personaMenor = elementoPersona;
        }
    } 
    return personaMenor;
}

determinarMayor = function(){
    encontrarMayor();
    let mayor = personaMayor(personas)
    mostrarTexto("mayor","LA PERSONA MAYOR ES: "+mayor.nombre+" con, "+mayor.edad+" años.");
}

determinarMenor = function(){
    encontrarMenor();
    let menor = encontrarMenor();
    mostrarTexto("menor","LA PERSONA MENOR ES: "+menor.nombre+" con, "+menor.edad+" años.");
}
mostrarOpcionPersona = function(){
    mostrarPersonas();
}