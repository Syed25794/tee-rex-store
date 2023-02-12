import {  Card, CardBody, Heading, Stack,Button,ButtonGroup,Text,Divider,CardFooter,Image } from "@chakra-ui/react";

export const ProductCard = ({ data }) => {
    console.log(data);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={data.imageURL}
          alt={data.name}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data.name}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
          ₹{data.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
