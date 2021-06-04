import React, { useState } from "react";
import MenuCategoryLabel from "./MenuCategoryLabel";
import CategoryCarousel from "./CategoryCarousel";
import ItemList from "./ItemList";
import ItemDrawer from "./ItemDrawer";
import { Box, Grid, Button, Text, Icon } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { IoReceipt } from "react-icons/io5";

const Menu = (props) => {
  const items = props.items;
  const addToOrder = props.addToOrder;
  const orderSize = props.orderSize;
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
      <Box align="right" paddingTop="10px">
        <Button as={ReactRouterLink} to="/order" variant="ghost">
          <Icon as={IoReceipt} w="30px" h="30px" paddingRight="5px" color="400" />
          <Text as="span" font="heading" fontSize="lg" color="300">
            ({orderSize})
          </Text>
        </Button>
      </Box>
      <Box paddingLeft="24px" paddingTop="10px">
        <MenuCategoryLabel label="Our Menu" />
      </Box>
      <Grid float="left" marginTop="10px" width="100%">
        <CategoryCarousel items={items} />
      </Grid>
      <Box marginTop="65px">
        <ItemList items={items} serveDrawer={serveDrawer} />
      </Box>
      <ItemDrawer isOpen={isModalOpen} onClose={setModalClosed} itemDetails={itemDetails} addToOrder={addToOrder} />
    </Box>
  );
};

export default Menu;
