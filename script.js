let votos = 0

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

boton.addEventListener("click", function(){

votos = votos + 1

textoVotos.innerText = "Votos: " + votos

})


const form = document.getElementById("formPropuesta")
const mensaje = document.getElementById("mensaje")

form.addEventListener("submit", function(e){

e.preventDefault()

let nombre = document.getElementById("nombre").value
let idea = document.getElementById("idea").value

if(nombre === "" || idea === ""){

mensaje.innerText = "Completa todos los campos"
mensaje.style.color = "red"

}else{

mensaje.innerText = "Propuesta enviada correctamente"
mensaje.style.color = "green"

document.getElementById("nombre").value = ""
document.getElementById("idea").value = ""

}

})