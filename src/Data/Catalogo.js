import CortinaParis from '../img/CORTINA-PARIS.jpg'
import CortinaSantorini from '../img/CORTINA-SANTORINI.jpg'
import CortinaCalifornia from '../img/CORTINA-CALIFORNIA.jpg'
import GanchoSellos from '../img/GANCHO-SELLOS.jpg'
import GanchoCalifornia from '../img/GANCHO-CALIFORNIA.jpg'
import GanchoSantorini from '../img/GANCHO-SANTORINI.jpg'
import AlfombraAzul from '../img/ALFOMBRA-AZUL.jpg'
import AlfombraBeige from '../img/ALFOMBRA-BEIGE.jpg'
import AlfombraRojo from '../img/ALFOMBRA-ROJO.jpg'

const productos = [{
        id: 1,
        Articulo: "Cortina París",
        img: [CortinaParis],
        Material: "Poliester",
        Precio: 3000,
        Stock: 10,
    },
    {
        id: 2,
        Articulo: "Cortina Santorini",
        img: [CortinaSantorini],
        Material: "Poliester",
        Precio: 3000,
        Stock: 10,
    },
    {
        id: 3,
        Articulo: "Cortina California",
        img: [CortinaCalifornia],
        Material: "Poliester",
        Precio: 3000,
        Stock: 10,
    },
    {
        id: 4,
        Articulo: "Gancho Sellos",
        img: [GanchoSellos],
        Material: "Resina/Metalico",
        Precio: 1800,
        Stock: 10,
    },
    {
        id: 5,
        Articulo: "Gancho California",
        img: [GanchoCalifornia],
        Material: "Resina/Metalico",
        Precio: 1800,
        Stock: 10,
    },
    {
        id: 6,
        Articulo: "Cortina Santorini",
        img: [GanchoSantorini],
        Material: "Resina/Metalico",
        Precio: 1800,
        Stock: 10,
    },
    {
        id: 7,
        Articulo: "Alfombra Azul",
        img: [AlfombraAzul],
        Material: "Microfibra",
        Precio: 2500,
        Stock: 10,
    },
    {
        id: 8,
        Articulo: "Alfombra Beige",
        img: [AlfombraBeige],
        Material: "Microfibra",
        Precio: 2500,
        Stock: 10,
    },
    {
        id: 9,
        Articulo: "Alfombra Rojo",
        img: [AlfombraRojo],
        Material: "Microfibra",
        Precio: 2500,
        Stock: 10,
    }, 
]
const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))
    }, 3000)
})

export default getFetch