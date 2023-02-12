import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import CartCard from '../components/CartCard';
import { ProductContext } from '../context/CartProducts'

const CartPage = () => {
  const [state,]=useContext(ProductContext);
  const {cartProducts}=state;
  return (
    <Box>
      {cartProducts.map((product)=>{
        return <CartCard data={product} key={product.id} />
      })}
    </Box>
  )
}

export default CartPage