document.write('<p>Estadisticas centro medico ñuñoa</p>');

var Radiología = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí

// 1. Agregar las siguientes horas al arreglo de Traumatología (2 Puntos):  
// HORA ESPECIALISTA PACIENTE RUT PREVISIÓN 
// 09:00 RENÉ POBLETE ANA GELLONA 13123329-7 ISAPRE 
// 09:30 MARIA SOLAR RAMIRO ANDRADE 12221451-K FONASA 
// 10:00 RAUL LOYOLA CARMEN ISLA 10112348-3 ISAPRE
// 10:30 ANTONIO LARENAS PABLO LOAYZA 13453234-1 ISAPRE
// 12:00 MATIAS ARAVENA SUSANA POBLETE 14345656-6  FONASA 

// agregando pacientes a radiologia

traumatologia.push(
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente:"ANA GELLONA", rut:"13123329-7", prevision:"ISAPRE "},
    {hora: '09:30', especialista: 'MARIA SOLAR', paciente:"RAMIRO ANDRADE", rut:"12221451-K", prevision:"FONASA"},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente:"CARMEN ISLA ", rut:"10112348-3", prevision:"ISAPRE "},
    {hora: '10:30', especialista: 'ANTONIO LARENAS',paciente:"PABLO LOAYZA", rut:" 13453234-1", prevision:"ISAPRE"},
    {hora: '12:00', especialista: 'MATIAS ARAVENA', paciente:"SUSANA POBLETE", rut:"14345656-6", prevision:"FONASA "},
)
//console.table(radiologia);

// 2. Eliminar el primer y último elemento del arreglo de Radiología (1 Punto). 

document.write('<p>Lista paciente radiología:</p>');
for(let i=0; i<Radiología.length;i++){
    document.write(Radiología[i].hora +'-'+ Radiología[i].especialista + '-' + Radiología[i].paciente + '-' + Radiología[i].rut + '-' + Radiología[i].prevision + '<br>');
 }
 Radiología.shift();
 Radiología.pop();
 
document.write('<p>Lista paciente radiología al eliminar primer y último paciente:</p>');
for(let i=0; i<Radiología.length;i++){
    document.write(Radiología[i].hora +'-'+ Radiología[i].especialista + '-' + Radiología[i].paciente + '-' + Radiología[i].rut + '-' + Radiología[i].prevision + '<br>');
 }

// let primerElementoRadiografia = radiologia.pop()
// document.write('Elemento eliminado:', primerElementoRadiografia);
 

// 3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime 
// conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo 
// separando por un guión cada dato desplegado y cada fila de información debe estar 
// separada por un párrafo (2 Puntos).  
// Ejemplo:  
// 8:30 - ANDREA ZUÑIGA - MARCELA RETAMAL - 11123425-6 - ISAPRE 
// 11:00 - MARIA PIA ZAÑARTU - ANGEL MUÑOZ - 9878789-2 - ISAPRE...
document.write('<p>Lista de consultas médicas de Dental:</p>');
for(let i=0; i<dental.length;i++){
    document.write(dental[i].hora +'-'+ dental[i].especialista + '-' + dental[i].paciente + '-' + dental[i].rut + '-' + dental[i].prevision + '<br>');
 }

// 4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.  
// Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo 
// (3 Puntos).  
// Ejemplo:  
// FRANCISCA ROJAS 
// PAMELA ESTRADA 
// ARMANDO LUNA…

document.write('<p>Listado total de todos los pacientes que se atendieron en el centro médico:</p>');

let pacientesTotales  = [...Radiología, ...traumatologia, ...dental];

for(let i=0; i<pacientesTotales.length;i++){
    document.write(pacientesTotales[i].paciente + '<br>');
    }

// 5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas 
// de Dental (1 Punto).  
// Ejemplo: 
// MARCELA RETAMAL - ISAPRE 
// ANGEL MUÑOZ - ISAPRE 
// ANA SEPULVEDA - ISAPRE 

document.write('<p>Filtro de pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental:</p>');

for(let i of dental){
   if (i.prevision === "ISAPRE"){
       document.write(i.paciente + '-' + i.prevision + '<br>');
   }
}

// 6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas 
// de Traumatología (1 Punto).   
// Ejemplo: 
// PAULA SÁNCHEZ – FONASA

document.write('<p>Filtro de pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología:</p>');

for(let i of traumatologia){
   if (i.prevision === "FONASA"){
       document.write(i.paciente + '-' + i.prevision + '<br>');
   }
}

//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${Radiología.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);
