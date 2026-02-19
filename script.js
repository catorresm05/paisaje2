console.log("funciona!")

const variablet = document.getElementById("titulo");

const mensaje = document.getElementById("mensaje");

console.log("titulo");

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