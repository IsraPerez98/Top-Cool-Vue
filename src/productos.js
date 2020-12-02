import imagenAbrigoAnimalPrint from '@/assets/imgs/Productos/AbrigoAnimalPrint.png'
import imagenMascarillas from '@/assets/imgs/Productos/Mascarillas.png'

export default [
    {
        nombre: "Abrigo animal print",
        descripcion: "Descripcion no disponible",
        imagenes: [imagenAbrigoAnimalPrint,],
        tallas: ["s", "m", "l", "xl"],
        precio: 7990,
        preciosEspeciales: [{"Por Mayor": 5990},],
        id: 0,
    },
    {
        nombre: "Mascarillas distintos colores y diseños",
        descripcion: "Forradas en lycra polyamyda elastano una tela antitranspirante y antibacterial de secado rápido y por fuera son de tela porosa opaca.  Pasan la prueba del spray",
        imagenes: [imagenMascarillas,],
        tallas: ["s","m","l","xl"],
        precio: 3000,
        preciosEspeciales: [],
        id: 1,
    },
]