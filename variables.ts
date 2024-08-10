interface grupos {
    nombreGrupo: string;
    año: number;
    activo: boolean;
    genero: string;
}

const grupos  = [
    {
    nombreGrupo:"The Beatles",
    año:1960,
    activo: true,
    genero:"pop rock"},

    {
    nombreGrupo:"Reina",
    año:1970,
    activo: false,
    genero:"rock"},

    {
    nombreGrupo:"AC DC",
    año:1973,
    activo: true,
    genero:"Hard Rock"},
    {
    nombreGrupo:"Ludwig van Beethoven",
    año:1770,
    activo: false,
    genero:"Clasica"
    },
    {
    nombreGrupo:"The Rolling Stones",
    año:1962,
    activo: true,
    genero:"Rock"
    }
]
console.log(grupos);

const estilo = "font-size: 26px; color: green; font-weight"


const grupo1: grupos = {
    nombreGrupo:"The Beatles",
    año:1960,
    activo: true,
    genero:"pop rock"
}
const grupo2: grupos = {
    nombreGrupo:"Reina",
    año:1970,
    activo: false,
    genero:"rock"
}
const grupo3: grupos = {
    nombreGrupo:"AC DC",
    año:1973,
    activo: true,
    genero:"Hard Rock"
}
const grupo4: grupos = {
    nombreGrupo:"Ludwig van Beethoven",
    año:1770,
    activo: false,
    genero:"Clasica"
}
const grupo5: grupos = {
    nombreGrupo:"The Rolling Stones",
    año:1962,
    activo: true,
    genero:"Rock"
}
console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);
console.log(grupo5);
console.log(`%c${grupo1.nombreGrupo}`, estilo);