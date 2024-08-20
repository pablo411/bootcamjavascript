let turno = 1;
const avanzar = () => {
    turno = turno + 1;
    const elementoNumeroTurno = document.getElementById("numero-turno");
    if(elementoNumeroTurno !== null && elementoNumeroTurno !== undefined && elementoNumeroTurno instanceof HTMLHeadingElement){
        elementoNumeroTurno.textContent = `${turno}`.padStart(2, "0");
    }
}

const retroceder = () => {
    turno = turno - 1;
    const elementoNumeroTurno = document.getElementById("numero-turno");
    if(elementoNumeroTurno !== null && elementoNumeroTurno !== undefined && elementoNumeroTurno instanceof HTMLHeadingElement){
        elementoNumeroTurno.textContent = `${turno}`.padStart(2, "0");
    }
}

const resetear = () => {
    turno = 0;
    const resetear = document.getElementById("numero-turno");
    if(resetear !== null && resetear !== undefined && resetear instanceof HTMLHeadingElement){
        resetear.textContent = `${turno}`;

    }
}
const botonResetear = document.getElementById("resetear");
if(botonResetear !== null && botonResetear !== undefined && botonResetear instanceof HTMLButtonElement){
    botonResetear.addEventListener("click", resetear);
}


const botonRetroceder = document.getElementById("retroceder");
if(botonRetroceder !== null && botonRetroceder !== undefined && botonRetroceder instanceof HTMLButtonElement){
    botonRetroceder.addEventListener("click", retroceder);
}

const botonAvanzar = document.getElementById("avanzar");
if(botonAvanzar !== null && botonAvanzar !== undefined && botonAvanzar instanceof HTMLButtonElement){
    botonAvanzar.addEventListener("click", avanzar );
}


