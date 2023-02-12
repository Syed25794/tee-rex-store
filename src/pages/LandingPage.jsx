import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "../components/ProductCard";
import FilterCard from "../components/FilterCard";

export const LandingPage = () => {
  const [data, setData] = useState([]);
  const filterProperties = [
    {id:1, heading: "Gender", properties:[["men","men","Men"],["woman","woman","Woman"]] },
    {id:2, heading: "Price", properties: [["250",250,"0-250"],["450",450,"251-450"],["451",451,"Above 451"]] },
    {id:3, heading: "Color", properties: [["red","red","Red"],["blue","blue","Blue"],["green","green","Green"]] },
    {id:4, heading: "Type", properties: [["polo","polo","Polo"],["hoddie","hoddie","Hoddie"],["basic","basic","Basic"]]},
  ];
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    axios
      .get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      )
      .then((d) => {
        setData(d.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box display="flex" flexDirection="row">
      <Box>
        <FilterCard data={filterProperties} />
      </Box>
      <Box
        margin="auto"
        marginTop="20px"
        w="1050px"
        boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;"
      >
        <Box display="flex" flexWrap="wrap" >
          {data.map((product) => {
            return <ProductCard data={product} key={product.id}/>;
          })}
        </Box>
      </Box>
    </Box>
  );
};
