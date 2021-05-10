import React from "react";
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Center,
  Image,
  Stack,
  Checkbox,
  Input,
  Divider,
} from "@chakra-ui/react";

function ItemDrawer(props) {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const itemDetails = props.itemDetails;

  //logic to prevent undefined map error
  let addonsToRender;
  if (props.itemDetails) {
    //this prevents a single checkbox from appearing with null addons
    if (props.itemDetails.addons[0] === null) {
    } else {
      addonsToRender = itemDetails.addons.map((addon) => {
        return (
          <Checkbox size="md" colorScheme="green">
            {addon}
          </Checkbox>
        );
      });
    }
  }

  return (
    <Drawer colorScheme="green" isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay bg="rgba(0, 0, 0, 0.2)" />
      <DrawerContent roundedTop="20px" maxH="80vh">
        <DrawerCloseButton backgroundColor="200" rounded="full" />

        <Center>
          <DrawerHeader textAlign="center" font="body" fontSize="lg" color="100" whiteSpace="nowrap">
            {itemDetails.name}
          </DrawerHeader>
        </Center>
        <Divider position="relative" bottom="10px"></Divider>

        <DrawerBody position="relative" bottom="10px">
          <Center>
            <Stack maxWidth="320px">
              <Image src={itemDetails.img} w="320px" h="145px" objectFit="cover" rounded="25px"></Image>
              <Text paddingLeft="5px" font="body" fontSize="md" color="300">
                {itemDetails.description}
              </Text>
              <Text paddingLeft="5px" font="body" fontSize="md" color="100">
                {itemDetails.modificationsDescription}
              </Text>
              <Stack paddingTop="5px" paddingLeft="10px" spacing="15px">
                {addonsToRender}
              </Stack>
              <Text paddingLeft="5px" font="body" fontSize="md" color="100" paddingTop="5px">
                Special Instructions:
              </Text>
              <Center>
                <Input variant="filled" w="315px" h="50px"></Input>
              </Center>
            </Stack>
          </Center>
        </DrawerBody>
        <Divider position="relative" bottom="11px"></Divider>
        <DrawerFooter justifyContent="center" paddingTop="0px">
          <Button width="320px" rounded="full" colorScheme="green" fontSize="md" fontWeight="normal">
            <Text>Add to Order</Text>

            <Text fontSize="smx" marginLeft="15px" paddingX="6px" paddingY="3px" rounded="5" bg="rgba(255, 255, 255, 0.15)">
              {itemDetails.price}
            </Text>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default ItemDrawer;
