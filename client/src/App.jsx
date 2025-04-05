import React from 'react'
import './App.css'
import Product from "./pages/Product.jsx"
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Cart from './pages/Cart.jsx'
import Pay from './Components/pay.jsx'
import { Route, Routes , Navigate} from 'react-router-dom'
import SuccessPage from './Components/SuccessPage.jsx'

function App() {

  const user = true;
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route
          path='/login'
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route 
          path='/register' 
          element = {user ? <Navigate to= "/"/> : <Register/>}
        />
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/products/:category' element = {<ProductList/>}/>
        <Route path='/product/:id' element = {<Product/>}/>
        <Route path='/pay' element = {<Pay/>}/>
        <Route path='/success' element = {<SuccessPage/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
