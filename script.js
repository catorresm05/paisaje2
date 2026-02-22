console.log("funciona!")

const titulo = document.getElementById("titulo");
const fondo = document.getElementById("fondo");
const sol = document.getElementById("sol");

const historia = [
    "Al principio, todo era normal.",
    "La cascada seguía cayendo, como ahora.",
    "Nadie sospechó del gato.",
    "Debimos sospechar...",
    "Era naranja. Muy naranja para no sospechar.",
    "Una tarde empujó un vaso del borde de una mesa.",
    "El vaso cayó.",
    "El vaso activó el botón.",
    "El botón no debía existir.",
    "Enseguida el cielo se volvió blanco.",
    "No hubo ruido...", 
    "Solo silencio...",
    "Ahora solo queda la cascada.",
    "Y el recuerdo del gato naranja.",
    "El mundo nunca volverá a ser igual por culpa del gato..."
];

console.log("titulo");
console.log(historia[0]);

const start = {
    top: "#87CEEB",
    mid: "#cceeff",
};

const end = {
    top: "#6a0d83",
    mid: "#eeaf61",
    low: "#ee5d6c"
};

function hexToRgb(hex) {
    hex = hex.replace("#", "");
    const bigint = parseInt(hex, 16);
    return [
        (bigint >> 16) & 255,
        (bigint >> 8) & 255,
        bigint & 255
    ];
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("");
}

function interpolate(c1, c2, t) {
    const a = hexToRgb(c1);
    const b = hexToRgb(c2);
    const result = a.map((v, i) =>
        Math.round(v + (b[i] - v) * t)
    );
    return rgbToHex(result[0], result[1], result[2]);
}

let indice = 0;

function actualizarCielo() {

    fondo.style.transition = "background 2s ease";

    if (indice <= 9) {

        let progreso = indice / 9;

        let topColor = interpolate(start.top, end.top, progreso);
        let midColor = interpolate(start.mid, end.mid, progreso);
        let lowColor = interpolate("#66cc66", end.low, progreso);

        fondo.style.background =
            `linear-gradient(to bottom,
                ${topColor} 0%,
                ${midColor} 20%,
                ${lowColor} 40%,
                #66cc66 40%,
                #228B22 100%)`;
    }

    if (indice === 10) {
        fondo.style.background =
            `linear-gradient(to bottom,
                #ffffff 0%,
                #ffffff 40%,
                #66cc66 40%,
                #228B22 100%)`;

        titulo.style.color = "#000";
    }
}

function moverSol() {

    if (indice <= 9) {
        const progreso = indice / 9;
        sol.style.left = (85 - 85 * progreso) + "%";
    }

    if (indice === 10) {
        sol.style.opacity = "0";
    }
}

titulo.addEventListener("click", () => {

    if (indice < historia.length) {
        titulo.innerText = historia[indice];
        indice++;
    }

    actualizarCielo();
    moverSol();
});
