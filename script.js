console.log("funciona!")

const variablet = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const textol = ["uno", "dos", "tres", "cuatro", "cinco"];
const narra = document.getElementById("texto");


console.log("titulo");
console.log(texto[0]);

let contador = 0;
let textoInicial = true;

variablet.addEventListener("click", () => {
   contador++;

    if (contador === 1) {
        mensaje.textContent = "hiciste click 1 vez";
    } 
    else if (contador < 15) {
        mensaje.textContent = `hiciste click ${contador} veces`;
    } 
    else {
        mensaje.textContent = "Bueno, ya. Calma. Ya vas muchos clicks";
    }

    console.log("hiciste click")
    
    if(textoInicial === true) {
        variablet.innerText = "No me des click, mira la cascada";
    } else {
        variablet.innerText = "Mira la bella cascada";
        //alert("hiciste click");
    }
    textoInicial = !textoInicial
});

let texti = 0;

narra.addEventListener("click", () => {
    narra.innerText = textol[texti];
    texti += 1;
})