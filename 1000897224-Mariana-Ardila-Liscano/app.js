//Punto # 1

let nombreHeroe=prompt("¿Cuál es el nombre del heroe?");
puntoSalud=100;
puntosExperiencia=0;

function mostrarEstadisticas(){
    console.log(`El heroe ${nombreHeroe}, salud: ${puntoSalud} HP, Experiencia: ${puntosExperiencia} XP.`)
}

mostrarEstadisticas();