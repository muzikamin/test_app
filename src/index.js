import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, theme } from "@chakra-ui/react";
import _theme from "./theme";
import Home from "./Pages/Home";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={_theme}>
      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
