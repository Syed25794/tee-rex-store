import { Box, Checkbox, Heading } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";

const FilterCard = ({ data }) => {
  const state = {products:[]};
  const dispatch = useDispatch();
  const handleClick = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      let newArray = state.products.filter((product) => {
        return (
          product.type === value ||
          product.gender === value ||
          product.color === value ||
          (product.price >= Number(value.split("-")[0]) &&
            product.price <= Number(value.split("-")[1]))
        );
      });
      dispatch({ type: "FILTERED_DATA", payload: newArray });
      console.log(newArray, value);
    }
    // if( checked ){
    //   if( state.filterProducts.length === 0 ){
    //     let newArray = state.products.filter((product)=>{
    //       return product.type === value || product.gender === value || product.color === value || ( product.price >= Number(value.split("-")[0]) &&  product.price <= Number(value.split("-")[1])  );
    //     });
    //     dispatch({type:"FILTERED_DATA",payload:newArray});
    //     console.log(newArray,value);
    //   }else{
    //     let newArray = state.filterProducts.filter((product)=>{
    //       return product.type === value || product.gender === value || product.color === value || ( product.price >= Number(value.split("-")[0]) &&  product.price <= Number(value.split("-")[1])  ) ;
    //     });
    //     dispatch({type:"FILTERED_DATA",payload:newArray});
    //     console.log(newArray,value,"filled array");
    //   }
    // }else{
    //   let newArray = state.products.filter((product)=>{
    //     return product.type !== value && product.gender !== value && product.color !== value && ( product.price > 0  &&  product.price < 1000  ) ;
    //   });
    //   dispatch({type:"FILTERED_DATA",payload:newArray});
    //   console.log(newArray,value,"false");
    // }
  };
  return (
    <Box
      w="100%"
      alignItems="start"
      p="20px"
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
    >
      {data.map((object) => (
        <Box key={object.id}>
          <Heading size="md">{object.heading}</Heading>
          <Box display="flex" flexDirection={"column"}>
            {object.properties.map((property) => (
              <Checkbox
                onChange={(e) => handleClick(e)}
                key={property[0]}
                value={property[1]}
              >
                {property[2]}
              </Checkbox>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FilterCard;
