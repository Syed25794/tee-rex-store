import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import CartCard from "../components/CartCard";

const CartPage = () => {
  const state=[];
  const [totalPrice, setTotalPrice] = useState("");
  return (
    <Box marginTop="100px">
      <Box>
        {state.map((product) => {
          return (
            <CartCard
              data={product}
              key={product.id}
              setTotalPrice={setTotalPrice}
            />
          );
        })}
      </Box>
      <Heading>Total Amount : {totalPrice}</Heading>
    </Box>
  );
};

export default CartPage;
