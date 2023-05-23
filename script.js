let btnResumen = document.getElementById("btnResumen");
let btnBorrar = document.getElementById("btnBorrar");
let cantidad = document.getElementById("cantidad");
let perfil = document.getElementById("perfil");
let textoPrecio = document.getElementById("changeH2");

let valorTicket = 200;
let valorTotal = 0;

btnResumen.addEventListener("click", function(){
    let valor = parseInt(cantidad.value);
    textoPrecio.textContent = "Total a pagar: $"

    if(esEstudiante()){
        textoPrecio.textContent += valorTicket.toString()
    }
    else if(esTrainee()){
        textoPrecio.textContent += valorTicket.toString()
    }
    else if(esJunior())
    {
        textoPrecio.textContent += valorTicket.toString()
    }

    valorTicket = 200;
    
})

btnBorrar.addEventListener("click", function(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.querySelector(".mail").value = ""; 
    cantidad.value = "";
    textoPrecio.textContent = "Total a pagar: $";
})
  
const esEstudiante = () =>{
    let perfilEstudiante = perfil.value;
    let valorCant = parseInt(cantidad.value);
    if(perfilEstudiante == "Estudiante") 
    {
        let descuento = (valorTicket * 80) / 100;
        valorTicket -= descuento;
        valorTicket = valorTicket* valorCant;
        return true
    }
    return false
}

const esTrainee = () =>{
    let perfilEstudiante = perfil.value;
    let valorCant = parseInt(cantidad.value);
    if(perfilEstudiante == "Trainee") 
    {
        let descuento = (valorTicket * 50) / 100;
        valorTicket -= descuento;
        valorTicket = valorTicket* valorCant;
        return true
    }
    return false
}

const esJunior = () =>{
    let perfilEstudiante = perfil.value;
    let valorCant = parseInt(cantidad.value);
    if(perfilEstudiante == "Junior") 
    {
        let descuento = (valorTicket * 15) / 100;
        valorTicket -= descuento;
        valorTicket = valorTicket* valorCant;
        return true
    }
    return false
}
