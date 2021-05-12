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
  lineHeights: {
    normal: "1.2",
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
            price: "$4.50 half",
            priceSecondary: " | $6.50 full",
            sizes: ["Half", "Full"],
            img: "/images/countrybread.png",
            modificationsDescription: null,
            addons: [],
          },
          {
            name: "Crab Cakes",
            description: "Chesapeake style lump crab, arugula salad, lemon aioli.",
            secondaryDescription: "",
            price: "$16.00",
            priceSecondary: "",
            sizes: [],
            img: "/images/crabcakes.png",
            modificationsDescription: null,
            addons: [],
          },
        ],
      },
      {
        category: "Salads",
        categoryItems: [
          {
            name: "Vineyard",
            description: "Mixed greens, red onion, cucumber, olives, croutons, tomato, feta, basil & champagne vinaigrette",
            secondaryDescription: "Serves 2-4",
            price: "$7.00 half",
            priceSecondary: " | $13.00 full",
            sizes: ["Half", "Full"],
            img: "/images/vineyard.png",
            modificationsDescription: "Add protein: ",
            addons: ["Chicken 6oz", "Salmon 4oz", "Scallops 2ct", "Tuna 4oz"],
          },
          {
            name: "Soup of the Day",
            description: "Chef's daily selection.",
            secondaryDescription: "",
            price: "$5.00 half",
            priceSecondary: " | $9.00 full",
            sizes: ["Half", "Full"],
            img: "/images/soupoftheday.png",
            modificationsDescription: null,
            addons: [],
          },
        ],
      },
      {
        category: "Pizzas",
        categoryItems: [
          {
            name: "Prosciutto & Ricotta",
            description: "Ricotta, mozzarella, thinly sliced prosciutto, roaster garlic oil, black lava salt, hot honey, arugula & lemon juice.",
            secondaryDescription: "Serves 2-4",
            price: "$16.50",
            priceSecondary: "",
            sizes: [],
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: "Add extra toppings to your pizza",
            addons: ["Pepparoni", "Mushroom", "Sausage"],
          },
          {
            name: "Margherita",
            description: "House red sauce, fresh mozzarella, sliced tomato, balsamic & basil",
            secondaryDescription: "Serves 2-4",
            price: "$16.50",
            priceSecondary: "",
            sizes: [],
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: "Add extra toppings to your pizza",
            addons: ["Pepparoni", "Mushroom", "Sausage", "Cheese"],
          },
        ],
      },
      {
        category: "Wines",
        categoryItems: [
          {
            name: "2019 Chardonnay",
            description: "Flavor Profile: Vanilla, Apple, Butter & Oak.",
            secondaryDescription: "Bottles also available",
            price: "$10.00",
            priceSecondary: "",
            sizes: [],
            img: "/images/chardonnay.png",
            modificationsDescription: null,
            addons: [],
          },
          {
            name: "2015 Sauvignon Blanc",
            description: "Chesapeake style Flavor Profile: Melon, Pear & Grapefruit crab, arugula salad, lemon aioli.",
            secondaryDescription: "Bottles also available",
            price: "$9.00",
            priceSecondary: "",
            sizes: [],
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: null,
            addons: [],
          },
          {
            name: "2018 Merlot",
            description: "Flavor Profile: Cherry, Strawberry, Vanilla & Fig.",
            secondaryDescription: "Bottles also available",
            price: "$11.00",
            priceSecondary: "",
            sizes: [],
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: null,
            addons: [],
          },
        ],
      },
      {
        category: "Beverages",
        categoryItems: [
          {
            name: "Latte",
            description: "",
            secondaryDescription: "",
            price: "$4.00",
            priceSecondary: "",
            sizes: [],
            img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
            modificationsDescription: null,
            addons: [],
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
