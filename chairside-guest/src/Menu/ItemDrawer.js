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
  Box,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Formik } from "formik";

function ItemDrawer(props) {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const itemDetails = props.itemDetails;

  //come up with some sort of way to conditionally render sizes

  return (
    <Drawer colorScheme="green" isOpen={isOpen} placement="bottom" onClose={onClose} isFullHeight="true">
      <DrawerOverlay bg="rgba(0, 0, 0, 0.2)" />

      <DrawerContent roundedTop="20px" maxH="85vh">
        <DrawerCloseButton backgroundColor="200" rounded="full" />

        <Center>
          <DrawerHeader textAlign="center" font="body" fontSize="lg" color="100" whiteSpace="nowrap">
            {itemDetails.name}
          </DrawerHeader>
        </Center>
        <Divider position="relative" bottom="10px"></Divider>

        <DrawerBody position="relative" bottom="10px" paddingBottom="15px">
          <Center>
            <Stack maxWidth="320px">
              <Image src={itemDetails.img} w="320px" h="145px" objectFit="cover" rounded="25px"></Image>
              <Text paddingLeft="5px" font="body" fontSize="md" color="300" lineHeight="normal">
                {itemDetails.description}
              </Text>
              <Box>
                <Formik
                  initialValues={{ specialInstructions: "", addons: [], price: "", size: "" }}
                  onSubmit={(data) => {
                    console.log(data);
                  }}
                >
                  {({ values, handleChange, handleSubmit }) => (
                    <form id="drawerForm" onSubmit={handleSubmit}>
                      {itemDetails.sizes.length !== 0 ? (
                        <Box>
                          <Text paddingLeft="5px" font="body" fontSize="md" color="100" fontWeight="semibold">
                            Size:
                          </Text>
                          <RadioGroup>
                            <Stack paddingTop="5px" paddingLeft="10px" spacing="15px" paddingBottom="15px">
                              {itemDetails.sizes.map((size, index) => (
                                <Box>
                                  <Radio size="lg" colorScheme="green" key={size} name="size" value={size} onChange={handleChange}>
                                    <Text fontSize="md">{size}</Text>
                                  </Radio>
                                  <Divider position="relative" top="6px"></Divider>
                                </Box>
                              ))}
                            </Stack>
                          </RadioGroup>
                        </Box>
                      ) : null}

                      {itemDetails.addons.length !== 0 ? (
                        <Box>
                          <Text paddingLeft="5px" font="body" fontSize="md" color="100" fontWeight="semibold">
                            {itemDetails.modificationsDescription}
                          </Text>
                          <Stack paddingTop="10px" paddingLeft="10px" spacing="15px" paddingBottom="10px">
                            {itemDetails.addons.map((addon) => (
                              <Box>
                                <Checkbox
                                  key={addon}
                                  onChange={handleChange}
                                  name="addons"
                                  type="checkbox"
                                  value={addon}
                                  size="lg"
                                  colorScheme="green"
                                >
                                  <Text fontSize="md">{addon}</Text>
                                </Checkbox>
                                <Divider position="relative" top="6px"></Divider>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      ) : null}

                      <Text paddingLeft="5px" paddingTop="5px" paddingBottom="10px" font="body" fontSize="md" color="100" fontWeight="semibold">
                        Special Instructions:
                      </Text>
                      <Center>
                        <Input
                          name="specialInstructions"
                          value={values.specialInstructions}
                          onChange={handleChange}
                          variant="filled"
                          w="315px"
                          h="75px"
                          fontSize="16px"
                        ></Input>
                        <Input type="hidden" onSubmit={handleSubmit} name="price" value={parseFloat(itemDetails.price)}></Input>
                      </Center>
                    </form>
                  )}
                </Formik>
              </Box>
            </Stack>
          </Center>
        </DrawerBody>
        <Divider position="relative" bottom="10px" margin={0}></Divider>
        <DrawerFooter justifyContent="center" paddingBottom="10px" paddingTop="0px">
          <Button type="submit" form="drawerForm" width="320px" rounded="full" colorScheme="green" fontSize="md" fontWeight="normal">
            <Text>Add to Order</Text>
            <Text fontSize="smx" marginLeft="15px" paddingX="6px" paddingY="3px" rounded="5" bg="rgba(255, 255, 255, 0.15)">
              {itemDetails.price + itemDetails.priceSecondary}
            </Text>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default ItemDrawer;
