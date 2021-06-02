import React, { useState } from "react";
import MenuCategoryLabel from "./MenuCategoryLabel";
import CategoryCarousel from "./CategoryCarousel";
import ItemList from "./ItemList";
import ItemDrawer from "./ItemDrawer";
import { Box, Grid } from "@chakra-ui/react";

const Menu = (props) => {
  const items = props.items;
  const [isModalOpen, setModalOpen] = useState(false);
  const setModalClosed = () => setModalOpen(false);
  const [itemDetails, setItemDetails] = useState("");

  function serveDrawer(itemDetails) {
    setModalOpen(true);
    setItemDetails(itemDetails);
  }

  return (
    <Box>
      <Box paddingLeft="24px" paddingTop="30px">
        <MenuCategoryLabel label="Our Menu" />
      </Box>
      <Grid float="left" marginTop="10px" width="100%">
        <CategoryCarousel items={items} />
      </Grid>
      <Box marginTop="65px">
        <ItemList items={items} serveDrawer={serveDrawer} />
      </Box>
      <ItemDrawer isOpen={isModalOpen} onClose={setModalClosed} itemDetails={itemDetails} />
    </Box>
  );
};

export default Menu;
