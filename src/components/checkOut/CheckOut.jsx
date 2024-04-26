import React, { useContext, useState, useEffect} from 'react';
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
    const [ user, setData] = useState ({
        name: "",
        email: "",
        sameEmail: "",
        phone: ""
    });

    const { cart, getTotal, clearCart } = useContext(Context);
    

    

    const updateUser = (event) => {
        setData((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }));
    };

    const navigate = useNavigate();

    
    
    const [ emailMatch, setEmailMatch] = useState(true)
    const validateEmails = () => {
        if(user.email === user.sameEmail){
            setEmailMatch(true)
        }else{
            setEmailMatch(false)
        }
    }
    
    

    

    const getOrder = async () => {
        validateEmails()
        const isFormValid = validate(user)
        if(isFormValid && emailMatch){
            const queryRef = collection(db, 'orders');
            try {
                const order = {
                    buyer: user,
                    cart: cart,
                    total: getTotal()
                };
      
                const orderDocRef = await addDoc(queryRef, order)
                Swal.fire({
                    title: "Gracias por tu compra",
                    icon: "success"
                }).then(() => {
                    clearCart()
                    navigate('/')
                }).catch((error) => console.log(error))
            } catch (error) {
            console.log(error)
            };
        }else{
            Swal.fire({
                title: "error",
                icon: "error"
            })
            console.log(error)
            console.log(emailMatch)
            console.log(isFormValid)
        }
    };

    const [error, setError] = useState({});

    

    const validate = (userr) => {
        let errors = {};
        if(user.name === ''){
            errors.nombre = 'El nombre es requerido';
            setError(errors)
        }

        if (user.email === ''){
            errors.email = 'El email es requerido';
            setError(errors)
        }

        if (user.sameEmail != user.email){
            errors.sameEmail = 'El email no coincide';
            setError(errors)
        }

        if (user.phone.length < 8){
            errors.phone = 'El número de teléfono tiene que tener 8 caracteres';
            setError(errors)
        }
    };
    
    
    
     
  return (
    <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input type='text' name = "name" onChange={updateUser} />
        <FormLabel>Email</FormLabel>
        <Input type='email' name = "email" onChange={updateUser} />
        <FormLabel>Confirmar Email</FormLabel>
        <Input type='email' name = "sameEmail" onChange={updateUser} />
        <FormLabel>Telefono</FormLabel>
        <Input type='text' name = "phone" onChange={updateUser} />
        <Button onClick={getOrder}>Finalizar compra</Button>
    </FormControl>
  );
};

export default CheckOut
