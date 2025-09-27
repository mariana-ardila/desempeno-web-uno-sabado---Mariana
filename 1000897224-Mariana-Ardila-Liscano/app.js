//Punto # 1

let nombreHeroe=prompt("¿Cuál es el nombre del heroe?");
puntoSalud=100;
puntosExperiencia=0;

function mostrarEstadisticas(){
    console.log(`El heroe ${nombreHeroe}, salud: ${puntoSalud} HP, Experiencia: ${puntosExperiencia} XP.`)
}

mostrarEstadisticas();

//Punto # 2

const recibirDanio=function(cantidadDanio){
    puntoSalud-=cantidadDanio;

if (puntoSalud <= 0){
    console.log("¡Has sido derrotado!");
}

else{
        console.log(`Recibiste ${cantidadDanio} de daño. Salud restante: ${puntoSalud} HP`)

}}


const ganarExperiencia=(cantidadExp)=>{
    puntosExperiencia +=cantidadExp;
    console.log(`¡Ganaste ${cantidadExp} de experiencia! XP total: ${puntosExperiencia}.`)
}
recibirDanio(40);
ganarExperiencia(100)
