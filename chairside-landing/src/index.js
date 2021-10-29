import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme.js";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
