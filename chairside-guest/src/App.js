import "focus-visible/dist/focus-visible";
import "./App.css";
import React, { Component } from "react";
import Menu from "./Menu/Menu";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    100: "#0A0724", //black
    200: "#F4F4F4", //grey background
    300: "#9B9B9B", //grey text
    400: "#58AF92", //green
    500: "#707070", //greyText a little darker
    green: {
      50: "#e2faf3",
      100: "#c5e8dc",
      200: "#a6d7c7",
      300: "#84c5b0",
      400: "#64b59a",
      500: "#4a9b80",
      600: "#387964",
      700: "#255647",
      800: "#12352a",
      900: "#00140c",
    },
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
    smx: "14px",
  },
  letterSpacings: {
    normal: "0.675px",
  },
  colorScheme: {
    400: "#58AF92",
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
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: null,
            addons: [null],
          },
          {
            name: "Crab Cakes",
            description: "Chesapeake style lump crab, arugula salad, lemon aioli.",
            secondaryDescription: "",
            price: "$16.00",
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: null,
            addons: [null],
          },
        ],
      },
      {
        category: "Pizzas",
        categoryItems: [
          {
            name: "Pizza",
            description: "The most delicious cheese pizza you will ever eat in your life",
            secondaryDescription: "Serves 2-4",
            price: "$8.00",
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: "Add extra toppings to your pizza",
            addons: ["Pepparoni", "Mushroom", "Sausage", "Cheese"],
          },
          {
            name: "Margharita",
            description: "The most delicious cheese pizza you will ever eat in your life",
            secondaryDescription: "Serves 2-4",
            price: "$9.00",
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: "Add extra toppings to your pizza",
            addons: ["Pepparoni", "Mushroom", "Sausage", "Cheese"],
          },
        ],
      },
    ];

    return (
      <Box paddingBottom="30px">
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet"></link>
        <ChakraProvider theme={theme}>
          <Menu items={items} />
        </ChakraProvider>
      </Box>
    );
  }
}
export default App;
