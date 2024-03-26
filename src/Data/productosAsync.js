const productos = [
    {
        id: 1,
        nombre: "Mouse logitech gamer rgb lila",
        precio: 10000,
        descripcion : "mouse ",
        categoria : "mouses",
        img: "https://wallnet.com.ar/wp-content/uploads/2022/05/mouse-logitech-gamer-rgb-lila_38560_5.jpeg",
        stock: 5

    },
    {
        id: 2,
        nombre: "Notbook Bangho Max L5 Intel Core I3 Ram 12gb Ssd 240gb 15,6 Color Gris Oscuro",
        precio: 574.999,
        descripcion: "laptop ",
        categoria: "laptops",
        img:"https://http2.mlstatic.com/D_NQ_NP_799710-MLU70838786363_082023-O.webp",
        stock: 5
        
    },
    {
        id: 3,
        nombre: "MX Master 35",
        precio: 15000,
        descripcion: "mouse 2",
        categoria: "mouses",
        img:"https://logitechar.vtexassets.com/arquivos/ids/158830-300-300?v=637922829642930000&width=300&height=300&aspect=true",
        stock: 5
        
    },
    {
        id: 4,
        nombre: "Teclado G413 SE FullSize Mecánico",
        precio: 131.199,
        descripcion: "teclado ",
        categoria: "teclados",
        img:"https://logitechar.vtexassets.com/arquivos/ids/158504-300-300?v=637800239697600000&width=300&height=300&aspect=true",
        stock: 5
        
    }
]

export const getProducts = () => {
    return new Promise((res) =>{
        setTimeout(() => {
            res(productos)
        }, 2000);
    })
}

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        const productosFiltrados = productos.filter(
            (el) => el.categoria === category
        )
        setTimeout(() => {
            resolve(productosFiltrados)
        }, 2000);
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) =>{
        const productoFiltrado = productos.find((el) => el.id === parseInt(id))
        resolve(productoFiltrado)
    })
}