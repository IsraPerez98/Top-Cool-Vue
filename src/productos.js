import imagenAbrigoAnimalPrint from '@/assets/imgs/Productos/vestidos/AbrigoAnimalPrint.png'
import imagenMascarillas from '@/assets/imgs/Productos/mascarillas/Mascarillas.png'
import Mascarilla1 from '@/assets/imgs/Productos/mascarillas/mascarilla1.png'
import Mascarilla2 from '@/assets/imgs/Productos/mascarillas/mascarilla2.png'
import Mascarilla3 from '@/assets/imgs/Productos/mascarillas/mascarilla3.png'
import Mascarilla4 from '@/assets/imgs/Productos/mascarillas/mascarilla4.png'
import Mascarilla5 from '@/assets/imgs/Productos/mascarillas/mascarilla5.png'
import Blusa1 from '@/assets/imgs/Productos/blusas/blusa1.png'

export default [
    {
        nombre: "Abrigo animal print",
        descripcion: "Descripcion no disponible",
        imagenes: [imagenAbrigoAnimalPrint,],
        tallas: ["S","M","L", "XL"],
        precio: 7990,
        preciosEspeciales: [{"Por Mayor": 5990},],
        categoria: 'Vestidos',
        id: 0,
    },
    {
        nombre: "Mascarillas distintos colores y diseños",
        descripcion: "Forradas en lycra polyamyda elastano una tela antitranspirante y antibacterial de secado rápido y por fuera son de tela porosa opaca.  Pasan la prueba del spray",
        imagenes: [imagenMascarillas,],
        tallas: ["s","m","l","xl"],
        precio: 3000,
        preciosEspeciales: [],
        categoria: 'Mascarillas',
        id: 1,
    },
    {
        nombre: "Mascarilla  diseño selva",
        descripcion: "Forradas en lycra polyamyda elastano una tela antitranspirante y antibacterial de secado rápido y por fuera son de tela porosa opaca.  Pasan la prueba del spray",
        imagenes: [Mascarilla1],
        tallas:["Única"],
        precio: 3000,
        preciosEspeciales:[],
        categoria: 'Mascarillas',
        id: 2,
    },
    {
        nombre: "Mascarilla  negra elástico rojo",
        descripcion: "Forradas en lycra polyamyda elastano una tela antitranspirante y antibacterial de secado rápido y por fuera son de tela porosa opaca.  Pasan la prueba del spray",
        imagenes: [Mascarilla2],
        tallas:["Única"],
        precio: 3000,
        preciosEspeciales:[],
        categoria: 'Mascarillas',
        id: 3,
    },
    {
        nombre: "Mascarilla  rosa",
        descripcion: "Forradas en lycra polyamyda elastano una tela antitranspirante y antibacterial de secado rápido y por fuera son de tela porosa opaca.  Pasan la prueba del spray",
        imagenes: [Mascarilla3],
        tallas:["Única"],
        precio: 3000,
        preciosEspeciales:[],
        categoria: 'Mascarillas',
        id: 4,
    },
    {
        nombre: "Mascarilla  azul elástico amarillo",
        descripcion: "Forradas en lycra polyamyda elastano una tela antitranspirante y antibacterial de secado rápido y por fuera son de tela porosa opaca.  Pasan la prueba del spray",
        imagenes: [Mascarilla4],
        tallas:["Única"],
        precio: 3000,
        preciosEspeciales:[],
        categoria: 'Mascarillas',
        id: 5,
    },
    {
        nombre: "Mascarilla  diseño multicolor, elástico rosa",
        descripcion: "Forradas en lycra polyamyda elastano una tela antitranspirante y antibacterial de secado rápido y por fuera son de tela porosa opaca.  Pasan la prueba del spray",
        imagenes: [Mascarilla5],
        tallas:["Única"],
        precio: 3000,
        preciosEspeciales:[],
        categoria: 'Mascarillas',
        id: 6,
    },
    {
        nombre: "Blusa amarilla",
        descripcion: "blusa",
        imagenes: [Blusa1],
        tallas:["S","M","L","XL"],
        precio: 5990,
        preciosEspeciales:[],
        categoria: 'Blusas',
        id: 7,
    },
]