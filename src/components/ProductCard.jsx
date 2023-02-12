import {
  Card,
  CardBody,
  Heading,
  Stack,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ProductContext } from "../context/CartProducts";

export const ProductCard = ({ data,addToCart }) => {
    const [handleCartProducts]=useContext(ProductContext);

  return (
    <Card maxW="300px" margin="20px">
      <CardBody>
        <Image w="350px" h="200px" src={data.imageURL} alt={data.name} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.name}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ₹{data.price}
          </Text>
          <Button variant="solid" colorScheme="blue" onClick={()=>handleCartProducts(data.name)}>
            Add to cart
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
