import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import PageNotFound from "./components/PageNotFound/PageNotFound"



function App() {
  

  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path ='/' element={<ItemListContainer title='tienda'/>}/>
          <Route path ='/category/:categoryId' element={<ItemListContainer title='tienda'/>}/>
          <Route path="/product/:productId" element={<ItemDetailContainer />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App