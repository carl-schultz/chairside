import React, { useState } from "react";
import OrderBar from "./OrderBar";
import MenuCategoryLabel from "./MenuCategoryLabel";
import CategoryCarousel from "./CategoryCarousel";
import ItemList from "./ItemList";
import ItemDrawer from "./ItemDrawer";
import { Box, Grid } from "@chakra-ui/react";

const Menu = (props) => {
  const items = props.items;
  const addToOrder = props.addToOrder;
  const orders = props.orders;
  const loading = props.loading;
  //used to manage if the modal is open or closed
  const [isModalOpen, setModalOpen] = useState(false);
  const setModalClosed = () => setModalOpen(false);
  //passes the item details to the drawer on render
  const [itemDetails, setItemDetails] = useState("");

  //sets the modal to open or closed
  function serveDrawer(itemDetails) {
    setModalOpen(true);
    setItemDetails(itemDetails);
  }

  return (
    <Box>
      <Box align="center" w="100%" maxW="container.md" position="fixed" zIndex="banner">
        <OrderBar orders={orders} />
      </Box>
      <Box paddingLeft="24px" paddingTop="70px">
        <MenuCategoryLabel label="Our Menu" />
      </Box>
      <Grid float="left" marginTop="10px" width="100%">
        <CategoryCarousel items={items} loading={loading}/>
      </Grid>
      <Box marginTop="65px">
        <ItemList items={items} serveDrawer={serveDrawer} loading={loading}/>
      </Box>
      <ItemDrawer isOpen={isModalOpen} onClose={setModalClosed} itemDetails={itemDetails} addToOrder={addToOrder} />
    </Box>
  );
};

export default Menu;
