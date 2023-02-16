import { Box, Icon, Text } from "@chakra-ui/react"
import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from "react-router-dom"

export const Navbar = ()=>{
    const cartValue = 0;
    return (
        <Box top={0} left={0} right={0} position="fixed" zIndex={1} background="#0f52ba" color="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 2px 0px" alignItems="center" display={"flex"} justifyContent="space-around" h="10vh">
            <Link to="/" style={{ textDecoration: 'none',fontSize:"20px" }}>TeeRex</Link>
            <Link to="/" style={{ textDecoration: 'none' ,fontSize:"20px" }}>Products</Link>
            <Link to="/cart" style = {{textDecoration:"none" ,fontSize:"20px",marginTop:"-20px"}}><Icon as={BsFillCartCheckFill} /><Text style={{marginTop:"-40px",marginLeft:"15px",color:"white",fontSize:"15px",fontWeight:"bold"}}>{cartValue}</Text></Link>
        </Box>
    )
}