import "focus-visible/dist/focus-visible";
import "./App.css";
import React, { useState } from "react";
import Menu from "./Menu/Menu";
import OrderSummary from "./OrderSummary/OrderSummary";
import { Route, Switch } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    100: "#0A0724", //black
    200: "#f1f1f1", //grey background
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
    mdx: "16px",
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

function App() {
  const items = [
    {
      category: "Shareables",
      categoryItems: [
        {
          name: "Country Bread",
          description: "Oil, balsamic, & red pepper.",
          secondaryDescription: "",
          sizes: [
            { name: "Half", price: "$5.00" },
            { name: "Full", price: "$10.00" },
          ],
          img: "/images/countrybread.png",
          modificationsDescription: null,
          addons: [],
        },
        {
          name: "Crab Cakes",
          description: "Chesapeake style lump crab, arugula salad, lemon aioli.",
          secondaryDescription: "",
          price: "$16.00",
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
          sizes: [
            { name: "Half", price: "$5.00" },
            { name: "Full", price: "$10.00" },
          ],
          img: "/images/vineyard.png",
          modificationsDescription: "Add protein: ",
          addons: ["Chicken 6oz", "Salmon 4oz", "Scallops 2ct", "Tuna 4oz"],
        },
        {
          name: "Soup of the Day",
          description: "Chef's daily selection.",
          secondaryDescription: "",
          sizes: [
            { name: "Half", price: "$5.00" },
            { name: "Full", price: "$9.00" },
          ],
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
          sizes: [],
          img: "https://mypizzacorner.com/wp-content/uploads/2020/12/neapolitan-pizza-authentic.jpg",
          modificationsDescription: null,
          addons: [],
        },
      ],
    },
  ];

  const [orders, setOrders] = useState([]);

  const addToOrder = (item) => {
    console.log("item to be added: " + item.name);
    setOrders([...orders, { ...item }]);
  };

  const removeFromOrder = (itemToRemove) => {
    setOrders(orders.filter((item) => item !== itemToRemove));
  };

  return (
    <ChakraProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <Menu items={items} addToOrder={addToOrder} orderSize={orders.length} />
        </Route>
        <Route path="/order">
          <OrderSummary orders={orders} removeFromOrder={removeFromOrder} />
        </Route>
      </Switch>
    </ChakraProvider>
  );
}
export default App;
