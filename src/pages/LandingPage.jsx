import { Box, Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import FilterCard from "../components/FilterCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/Product/ProductActions";

const filterProperties = [
  {
    id: 1,
    heading: "Gender",
    properties: [
      ["men", "Men", "Men"],
      ["women", "Women", "Women"],
    ],
  },
  {
    id: 2,
    heading: "Price",
    properties: [
      ["0-250", "0-250", "0-250"],
      ["251-450", "251-450", "251-450"],
      ["451-1000", "451-1000", "Above 450"],
    ],
  },
  {
    id: 3,
    heading: "Color",
    properties: [
      ["red", "Red", "Red"],
      ["blue", "Blue", "Blue"],
      ["green", "Green", "Green"],
      ["black", "Black", "Black"],
      ["Pink", "Pink", "Pink"],
      ["White", "White", "White"],
      ["Purple", "Purple", "Purple"],
    ],
  },
  {
    id: 4,
    heading: "Type",
    properties: [
      ["polo", "Polo", "Polo"],
      ["hoddie", "Hoddie", "Hoddie"],
      ["basic", "Basic", "Basic"],
    ],
  },
];

export const LandingPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store)=>store.ProductReducer);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    setQuery("");
  };

  useEffect(() => {
    console.log("hi");
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Box>
      <Input
        type="text"
        placeholder="Search Items"
        w="450px"
        m="10px"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        marginTop="100px"
      />
      <Button
        variant="solid"
        colorScheme="blue"
        marginTop="-5px"
        onClick={handleSearch}
      >
        Search
      </Button>
      <Box display="flex" flexDirection="row">
        <Box w="20%" position="fixed">
          <FilterCard data={filterProperties} />
        </Box>
        <Box
          marginLeft="300px"
          marginTop="20px"
          w="77%"
          boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;"
        >
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
