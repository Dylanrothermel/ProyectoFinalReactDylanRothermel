import React, { useContext, useState} from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button
  } from '@chakra-ui/react';
import Context from '../../context/CartContext';
import { db } from '../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const [error, setError] = useState({});
    const { cart, getTotal, clearCart } = useContext(Context);

    
    


    const [ user, setData] = useState ({
        name: "",
        email: "",
        sameEmail: "",
        phone: ""
    });
    

    

    const updateUser = (event) => {
        setData((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }));
    };

    

    const navigate = useNavigate();

    
    
    
    const validate = (user) => {
        let errors = {};
        if(user.name === ''){
            errors.nombre = 'El nombre es requerido';
            
        }

        if (user.email === ''){
            errors.email = 'El email es requerido';
            
        }

        if (user.sameEmail !== user.email){
            errors.sameEmail = 'El email no coincide';
            
        }

        if (user.phone.length < 8){
            errors.phone = 'El número de teléfono tiene que tener 8 caracteres';
            
        }
        return errors
        
    };

    
    


    const getOrder = async () => {
        const isFormValid = validate(user)
        
        if(Object.keys(isFormValid).length === 0 ){
            const queryRef = collection(db, 'orders');
            try {
                const order = {
                    buyer: user,
                    cart: cart,
                    total: getTotal()
                };
      
                const orderDocRef = await addDoc(queryRef, order)
                const orderId = orderDocRef.id
                
                Swal.fire({
                    title: "Gracias por tu compra",
                    text:`El id del producto es ${orderId}`,
                    icon: "success"
                }).then(() => {
                    clearCart()
                    navigate('/')
                }).catch((error) => console.log(error))
            } catch (error) {
            console.log(error)
            };
        }else{
            setError(isFormValid)
            Swal.fire({
                title: "error",
                icon: "error"
            })
        }
    };


    
    
    
    
     
  return (
    <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input type='text' name = "name" onChange={updateUser} />
        <p>{error.nombre}</p>

        <FormLabel>Email</FormLabel>
        <Input type='email' name = "email" onChange={updateUser} />
        <p>{error.email}</p>

        <FormLabel>Confirmar Email</FormLabel>
        <Input type='email' name = "sameEmail" onChange={updateUser} />
        <p>{error.sameEmail}</p>

        <FormLabel>Telefono</FormLabel>
        <Input type='text' name = "phone" onChange={updateUser} />
        <p>{error.phone}</p>

        <Button onClick={getOrder}>Finalizar compra</Button>
    </FormControl>
  );
};

export default CheckOut
