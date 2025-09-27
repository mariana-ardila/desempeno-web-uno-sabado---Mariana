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


//Punto # 3


const simularBatalla=()=>{
for(let i=0; i<=2; i++){
recibirDanio(50);
}
if (puntoSalud>0){
    ganarExperiencia(100)
}
}

 console.log("puntos experiencia " + puntosExperiencia)


function diagnosticoHeroe(){
    if(puntoSalud>=100){
    console.log(`${nombreHeroe} tu salud es excelente`)
    }
    else if(puntoSalud>=40){
        console.log(`${nombreHeroe} considera usar una poción`)
    }
    else if(puntoSalud>0){
                console.log(`¡${nombreHeroe} peligro! Salud crítica`)
    }

    switch(puntosExperiencia){
    case 100:
        console.log(`${nombreHeroe} eres una leyenda viviente`)
    break;
    case 200:
        console.log(`${nombreHeroe} Te estás convirtiendo en un guerrero respetable`)
    break;
    case 20:
        console.log(`${nombreHeroe} Eres un novato`)
    break;
        default:
            console.log("Valor no válido. ")
    }
   
}
simularBatalla();
diagnosticoHeroe();


//Punto # 4


function iniciarAventura(){
while (true){
let opciones=Number(prompt(`---- Menú Aventura -----
    1.Luchar contra un monstruo
    2.Tomar poción de salud
    3.Completar misión (ganar XP)
    4.Ver diagnóstico del Héroe
    5.Mostrar Estadísticas
    6.Retirarse de la aventura
    `))

    switch(opciones){
        case 1:
            simularBatalla();
        break;
          case 2:
            let restaurarSalud=Number(prompt(`¿${nombreHeroe} cuántos puntos de salud quieres restaurar?`));
            puntoSalud +=restaurarSalud;
        break;
          case 3:
            let experienciaGanada=Number(`¿${nombreHeroe} cuál es la cantidad de experiencia ganada?`)
             ganarExperiencia(experienciaGanada);
        break;
          case 4:
            diagnosticoHeroe();
        break;
          case 5:
            mostrarEstadisticas();
        break;
          case 6:
            console.log(`¡Nos vemos en la próxima partida!`);
            return;
        break;
        default:
            console.log(`${opciones} Opción no valida`);
    }
}

}

iniciarAventura();



