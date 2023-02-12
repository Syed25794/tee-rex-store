import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from 'axios';
import { ProductCard } from "../components/ProductCard";

export const LandingPage = () =>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
        .then((d)=>{setData(d.data)})
        .catch((err)=>console.log(err))
    }
    return (
        <Box>
            {data.map((product)=>{
                return <ProductCard data={product} key={product.id} />
            })}
        </Box>
    )
}