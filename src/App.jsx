import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import { CartContextProvider } from "./context/CartContext"
import Carrito from "./components/carrito/Carrito"
import CheckOut from "./components/checkOut/CheckOut"

function App() {
  

  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path ='/' element={<ItemListContainer />}/>
            <Route path ='/category/:categoryId' element={<ItemListContainer title='tienda'/>}/>
            <Route path="/product/:productId" element={<ItemDetailContainer />}/>
            <Route path="/checkout" element={<CheckOut />}/>
            <Route path="/cart" element={<Carrito />}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App