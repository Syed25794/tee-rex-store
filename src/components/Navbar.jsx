import { Box, Icon } from "@chakra-ui/react"
import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return (
        <Box boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px" alignItems="center" display={"flex"} justifyContent="space-around" h="10vh">
            <Link to="/products" style={{ textDecoration: 'none',fontSize:"20px" }}>TeeRex</Link>
            <Link to="/products" style={{ textDecoration: 'none' ,fontSize:"20px" }}>Products</Link>
            <Link to="/cart" style = {{textDecoration:"none" ,fontSize:"20px"}}><Icon as={BsFillCartCheckFill} /></Link>
        </Box>
    )
}