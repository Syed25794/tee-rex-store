import { Box, Heading } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import CartCard from "../components/CartCard";
import { ProductContext } from "../Redux/CartProducts";

const CartPage = () => {
  const [state] = useContext(ProductContext);
  const { cartProducts } = state;
  const [totalPrice, setTotalPrice] = useState("");
  return (
    <Box marginTop="100px">
      <Box>
        {cartProducts.map((product) => {
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
