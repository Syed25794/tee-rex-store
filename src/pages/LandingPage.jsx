import { Box, Button, Input } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../components/ProductCard";
import FilterCard from "../components/FilterCard";
import { ProductContext } from "../context/CartProducts";

export const LandingPage = () => {
  const [state, dispatch] = useContext(ProductContext);
  const [query,setQuery]=useState("");

  const filterProperties = [
    {id: 1,heading: "Gender",properties: [["men", "Men", "Men"],["women", "Women", "Women"]]},
    {id: 2,heading: "Price",properties: [["0-250", "0-250", "0-250"],["251-450", "251-450", "251-450"],["451-1000","451-1000", "Above 450"]]},
    {id: 3,heading: "Color",properties: [["red", "Red", "Red"],["blue", "Blue", "Blue"],["green", "Green", "Green"]]},
    {id: 4,heading: "Type",properties: [["polo", "Polo", "Polo"],["hoddie", "Hoddie", "Hoddie"],["basic", "Basic", "Basic"]]}
  ];

  const handleSearch=()=>{
    dispatch({type:"SEARCH",payload:query});
    setQuery("");
  }

  useEffect(() => {
    axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then((d) => {
        dispatch({ type: "ADD_DATA", payload: d.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <Box>
      <Input  type="text" placeholder="Search Items" w="450px" m="10px" value={query} onChange={(e)=>setQuery(e.target.value)} marginTop="100px" />
      <Button variant='solid' colorScheme="blue" marginTop="-5px" onClick={handleSearch}>Search</Button>
      <Box display="flex" flexDirection="row" >
        <Box w="20%" position="fixed">
          <FilterCard data={filterProperties} />
        </Box>
        <Box marginLeft="300px" marginTop="20px" w="77%"
          boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;" >
          <Box display="flex" flexWrap="wrap">
            {state.products.map((product) => {
              return <ProductCard data={product} key={product.id} />;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
