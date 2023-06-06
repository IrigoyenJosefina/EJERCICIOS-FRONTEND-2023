"use strict"; 

let container = document.getElementById("container");
let parrafoErr = document.getElementById("parrafoError");

fetch(`https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10,11,12]`)
.then(
    response => response.json()
)
.then(datos=>{
    datos.forEach(personaje => {
       container.innerHTML += `
       <div id="card">
       <h2> ${personaje.name} </h2>
       <img src="${personaje.image}" alt="${personaje.name}">
       <h3>${personaje.location.name}</h3>
       </div>
       `
    })
}).catch(
    (error)=> console.log("Ha ocurrido un error"+ error)
)

