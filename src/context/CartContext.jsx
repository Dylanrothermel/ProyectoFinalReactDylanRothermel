import React, { createContext, useState} from 'react';

const Context = createContext(); //crear contexto

export const CartContextProvider = ({ children }) => { //definir proveedor que encapsula toda la aplicacion

    //definir estados y funciones
    const [ cart, setCart ] = useState([]); //array vacio para poner cosas dentro

    const addItem =(productToAdd, quantity) => {
        const newProduct = {
            ...productToAdd, //crea un solo objeto con las propiedades del producto
            quantity // cantidad esta aparte
        };
        if(isInCart(newProduct.id)){
            const actualizarCantidad = cart.map((producto) =>{ //map recorre todo el carrito, si algun id de algun producto coincide con newProduct.id, some devuelve true
                if (producto.id === newProduct.id){
                    return {...producto, quantity: producto.quantity + newProduct.quantity}
                     //agarras todas las propiedades del producto y actualizas la cantidad
                }
                return producto
            });
            setCart(actualizarCantidad)
        }else{
            setCart([...cart, newProduct]); //agarras cart y le introduces lo que hay en newProduct
        }
    };

    const isInCart = (id) => {
        return cart.some((el) => el.id === id); // si el id del producto que esta en el carrito coincide con el id que pasamos por parametro retornara un true
    };

    const getTotal = () => {
        return cart.reduce((VA, item) => VA + item.precio * item.quantity, 0); // 0 + 10000*1
        // 10000 + 10000
        // 20000 + 10000
        // 30000 Math. round(total * 1e8) / 1e8
    };

    

    const getQuantity = () => {
        return cart.reduce((VA, item) => VA + item.quantity, 0);
    };

    const clearCart = () => {
        setCart([]); // devolver el carrito a su estado original(vacio)
    };

    const removeItem = (id) => {
        const eliminar = cart.filter((el) => el.id !== id); //filter me devolvera un array con todos los productos cuyo id no coincida con el id del producto que le paso
        //filter ira agregando al array eliminar, todos los productos con id que, por ejemplo, no sean 3
        //no es que filter elimine el producto con id 3, sino que crea otro array en el cual el id 3 no esta
        setCart([...eliminar]);
    };

    
    
  return (
    //proporcionar contexto a los hijos del proveedor
        <Context.Provider
        //agregar las funciones y estados que queremos que esten en nuestra app
            value ={{
                cart,
                setCart,
                addItem,
                getTotal,
                getQuantity,
                clearCart,
                removeItem
            }}
        >
            {children}
        </Context.Provider>
  );
};

export default Context