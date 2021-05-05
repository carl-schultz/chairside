import "./App.css";
import React, { Component } from "react";
import Menu from "./Menu/Menu";
import "@fontsource/poppins/400.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/800.css"
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Button,
} from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";

const theme = extendTheme({
  colors: {
    100: "#0A0724", //black
    200: "#F4F4F4", //grey background
    300: "#9B9B9B", //grey text
    400: "#58AF92", //green
    500: "#707070", //greyText a little darker
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  fontWeights: {
    normal: 400,
    semibold: 600,
    bold: 800,
  },
  fontSizes: {
    lg: "18px",
    md: "15px",
    sm: "13px",
  },
  letterSpacings: {
    normal: "0.675px",
  },
});

class App extends Component {
  render() {
    const items = [
      {
        category: "Shareables",
        categoryItems: [
          {
            name: "Country Bread",
            description: "Oil, balsamic, & red pepper.",
            secondaryDescription: "",
            price: "$4.51 half | $6.50 full",
            img:
              "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
          },
          {
            name: "Crab Cakes",
            description:
              "Chesapeake style lump crab, arugula salad, lemon aioli.",
            secondaryDescription: "",
            price: "$16.00",
            img:
              "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
          },
        ],
      },
      {
        category: "Pizzas",
        categoryItems: [
          {
            name: "Pizza",
            description: "Cheese ecd vrev er dnewj verv erve rverver erve hell.",
            secondaryDescription: "Serves 2-4",
            price: "$8.00",
            img:
              "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
          },
        ],
      },
    ];

    return (
      <ChakraProvider theme={theme}>
        <Menu items={items} />
      </ChakraProvider>
    );
  }
}
export default App;
