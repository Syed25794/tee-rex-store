import { Box, Icon, Text } from "@chakra-ui/react"
import { useContext } from "react"
import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from "react-router-dom"
import { ProductContext } from "../context/CartProducts"

export const Navbar = ()=>{
    const [state,]=useContext(ProductContext);
    const cartValue = state.cartProducts.length;
    return (
        <Box boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px" alignItems="center" display={"flex"} justifyContent="space-around" h="10vh">
            <Link to="/" style={{ textDecoration: 'none',fontSize:"20px" }}>TeeRex</Link>
            <Link to="/" style={{ textDecoration: 'none' ,fontSize:"20px" }}>Products</Link>
            <Link to="/cart" style = {{textDecoration:"none" ,fontSize:"20px",marginTop:"-20px"}}><Icon as={BsFillCartCheckFill} /><Text style={{marginTop:"-40px",marginLeft:"15px",color:"red",fontSize:"15px",fontWeight:"bold"}}>{cartValue}</Text></Link>
        </Box>
    )
}