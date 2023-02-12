import { Box, Button, Heading, Image, Text, VStack, Icon } from '@chakra-ui/react'
import { AiOutlineDown } from 'react-icons/ai'
import { IoIosArrowUp } from 'react-icons/io'
import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/CartProducts'

const CartCard = ({data}) => {
    const [count,setCount]=useState(1);
    const [state,dispatch]=useContext(ProductContext);
    console.log(state);
    const deleteProduct=(id)=>{
        console.log(id,"delete");
        dispatch({type:"DELETE",payload:id});
    }
    const increaseCount=(id)=>{
        state.cartProducts.map(function(product){
            return product.id === id ? ( product.quantity > count ? setCount(prev=>prev+1) :  alert("Product count should not be greater than quantity of product!") ) : null ;
        })
    }
    const decreaseCount=()=>{
        setCount(prev=>prev-1);
    }
  return (
    <Box align="center">
    <Box display="flex" m="20px" p="20px" w="650px" boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" alignItems="center">
        <Image w="200px" h="150px" src={data.imageURL} alt={data.name} borderRadius="lg" />
        <VStack marginLeft="10px">
            <Heading size="md">{data.name}</Heading>
            <Text marginLeft="10px" color="blue.600" fontSize="xl">₹{data.price}</Text>
        </VStack>
        <Button marginLeft="10px" onClick={()=>increaseCount(data.id)}><Icon as={IoIosArrowUp} /></Button>
        <Text marginLeft="10px">{count}</Text>
        <Button marginLeft="10px" onClick={decreaseCount} isDisabled={count === 1}><Icon as ={AiOutlineDown} /></Button>
        <Button variant="solid" colorScheme="blue" marginLeft="10px" onClick={()=>deleteProduct(data.id)}>DELETE</Button>
    </Box>
    </Box>
  )
}

export default CartCard