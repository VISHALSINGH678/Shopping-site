import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'

const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
      <Navbar setData={setData}/>
      <Routes>
        <Route path='/' element={<Product cart={cart} setCart={setCart} items={data} />}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/search/:term' element={<SearchItem/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App