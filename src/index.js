import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProviderWrapper } from "./context/CartProducts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ProductsContextProviderWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductsContextProviderWrapper>
    </ChakraProvider>
  </React.StrictMode>
);
