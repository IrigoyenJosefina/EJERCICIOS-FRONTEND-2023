import data from "./data.js";

const cardContainer = document.getElementById("container");

const usuarios = JSON.parse(data);


for (let i = 0; i <= usuarios.length; i++) {
    const element = usuarios[i];
    const card = document.createElement("div");
    card.setAttribute("id", "card"); 
    card.innerHTML = `
    <h2 id= "nombre"> ${element.name.first} ${element.name.last} </h2>
    <img id= "foto" src = ${element.picture.medium} alt= ${element.name.first} ${element.name.last} />
    <p id= "direccion" > ${element.location.street.name} ${element.location.street.number} </p>
    `   
    cardContainer.appendChild(card);
}