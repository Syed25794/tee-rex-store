import {
  Card,
  CardBody,
  Heading,
  Stack,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";

export const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const handleCartProducts = (id) => {
    dispatch({ type: "ADD_INTO_CART", payload: id });
    alert("Product Added In Cart Successfully.");
  };
  return (
    <Card maxW="300px" margin="20px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
      <CardBody>
        <Image
          w="350px"
          h="200px"
          src={data.imageURL}
          alt={data.name}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.name}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ₹{data.price}
          </Text>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => handleCartProducts(data.id)}
          >
            Add to cart
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
