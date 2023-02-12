import { Route, Routes } from 'react-router-dom'
import CartPage from '../pages/CartPage'
import { LandingPage } from '../pages/LandingPage'

const AllRoutes = () => {
  return (
    <Routes>    
        <Route path='/' element={<LandingPage />} />
        <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default AllRoutes