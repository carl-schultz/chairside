import "focus-visible/dist/focus-visible";
import "./App.css";
import React, { useState, useEffect } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { Route, Switch, useParams, BrowserRouter } from "react-router-dom";
import Menu from "./Menu/Menu";
import OrderSummary from "./OrderSummary/OrderSummary";
import theme from "./theme.js";

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
          modificationsDescription: "",
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
          addons: [
            { name: "Chicken 6oz", price: "$4.00" },
            { name: "Salmon 4oz", price: "$6.00" },
            { name: "Scallops 4oz", price: "$6.00" },
            { name: "Tuna 4oz", price: "$6.00" },
          ],
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

  const itemsdemo = [
    {
      category: "Shareables",
      categoryItems: [
        {
          name: "Summer Bruschetta",
          description: "sourdough, roasted garlic, ricotta, roasted tomato, arugula, basil, balsamic",
          secondaryDescription: "Serves 2-4",
          price: "$14.00",
          sizes: [],
          img: "/images/bruschetta.png",
          modificationsDescription: "",
          addons: [],
        },
        {
          name: "Hummus Plate",
          description: "grilled pita, celery, carrot, cucumber, feta",
          secondaryDescription: "Serves 2-4",
          price: "$12.00",
          sizes: [],
          img: "/images/hummus.png",
          modificationsDescription: null,
          addons: [],
        },
      ],
    },
    {
      category: "Salads",
      categoryItems: [
        {
          name: "Arugula Salad",
          description: "strawberry, walnut, ricotta, basil-white balsamic",
          secondaryDescription: "",
          sizes: [
            { name: "Half", price: "$5.00" },
            { name: "Full", price: "$10.00" },
          ],
          img: "/images/arugula.png",
          modificationsDescription: "Add protein: ",
          addons: [
            { name: "Chicken 6oz", price: "$4.00" },
            { name: "Salmon 4oz", price: "$6.00" },
            { name: "Scallops 4oz", price: "$6.00" },
            { name: "Tuna 4oz", price: "$6.00" },
          ],
        },
        {
          name: "Heirloom Tomato Salad",
          description: "avocado, watercress, poppy seed dressing",
          secondaryDescription: "",
          sizes: [
            { name: "Half", price: "$5.00" },
            { name: "Full", price: "$9.00" },
          ],
          img: "/images/heirloom.png",
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
          img: "/images/prosciutto.png",
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
          img: "/images/latte.png",
          modificationsDescription: null,
          addons: [],
        },
      ],
    },
  ];

  //react router functions
  const { search } = useLocation();
  //values contains the query parameters
  const values = queryString.parse(search);
  //restaurant is a route parameter
  const { restaurant } = useParams();

  //application states 
  const [tableNumber, setTableNumber] = useState();
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  /* //API menu fetch
  useEffect(() => {
    setLoading(true);
    // GET request
    const fetchURL = "http://localhost:5001/chairsideguest/us-central1/api/" + restaurant + "/menu"
      fetch(fetchURL)
        .then(response => response.json())
        .then(data => setMenu(data)).finally(() => {
          setLoading(false);
        });
  }, []); */

  //add item to cuatomers order state
  const addToOrder = (item) => {
    console.log("item to be added: " + item.name);
    setOrders([...orders, { ...item }]);
  };

   //remove item from customers order state
  const removeFromOrder = (itemToRemove) => {
    setOrders(orders.filter((item) => item !== itemToRemove));
  };

  //set the table number state
  useEffect(() => {
    setTableNumber(values.table);
    console.log("table: " + values.table);
  }, [values.table, setTableNumber]);

  //TODO: checkout -> navigate to payment selection (stripe integration)
  const checkout = () => {
    console.log("hello")
  };

  //TODO: submitOrder -> send cart to server for price to be calculated, stripe to be called, and if 
  //                     successful, add order to orders collection in db

  return (
    
    <ChakraProvider theme={theme}>
      <Container padding="0" maxW="container.md">
      <BrowserRouter basename={restaurant}>
        <Switch>
          <Route exact path="/">
            <Menu items={itemsdemo} addToOrder={addToOrder} orders={orders} loading={loading}/>
          </Route>
          <Route path="/order">
            <OrderSummary orders={orders} removeFromOrder={removeFromOrder} checkout={checkout} tableNumber={tableNumber} />
          </Route>
        </Switch>
      </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}
export default App;
