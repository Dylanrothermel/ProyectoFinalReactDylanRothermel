import React, { createContext, useState} from 'react';

const Context = createContext();

export const CartContextProvider = ({ children }) => { 

    const [ cart, setCart ] = useState([]); 

    const addItem =(productToAdd, quantity) => {
        const newProduct = {
            ...productToAdd,
            quantity
        };
        if(isInCart(newProduct.id)){
            const actualizarCantidad = cart.map((producto) =>{
                if (producto.id === newProduct.id){
                    return {...producto, quantity: producto.quantity + newProduct.quantity};
                };
                return producto
            });
            setCart(actualizarCantidad);
        }else{
            setCart([...cart, newProduct]); 
        };
    };

    const isInCart = (id) => {
        return cart.some((el) => el.id === id);
    }

    const getTotal = () => {
        return cart.reduce((VA, item) => VA + item.precio * item.quantity, 0);
       
    };

    

    const getQuantity = () => {
        return cart.reduce((VA, item) => VA + item.quantity, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeItem = (id) => {
        const eliminar = cart.filter((el) => el.id !== id);
        setCart([...eliminar]);
    };

    
    
  return (
        <Context.Provider
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