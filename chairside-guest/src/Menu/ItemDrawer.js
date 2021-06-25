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
  Textarea,
  Divider,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

import { Formik, Field, Form } from "formik";

function ItemDrawer(props) {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const itemDetails = props.itemDetails;
  const addToOrder = props.addToOrder;
  //this variable is to prevent the modal from closing if size is not selected
  var radioUnselected = true;
  const toast = useToast();

  function validateSize(value) {
    let error;
    if (!value) {
      error = "Please select a size";
    }
    return error;
  }

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
              <Image src={itemDetails.img} w="320px" h="145px" objectFit="cover" rounded="20px"></Image>
              <Text paddingLeft="5px" font="body" fontSize="md" color="300" lineHeight="normal">
                {itemDetails.description}
              </Text>
              <Box>
                <Formik
                  initialValues={{ name: itemDetails.name, size: "", specialInstructions: "", addons: [], price: itemDetails.price }}
                  onSubmit={(data) => {
                    addToOrder(data);
                  }}
                >
                  {(props) => (
                    <Form
                      id="drawerForm"
                      onSubmit={(e) => {
                        props.handleSubmit(e);
                        if (radioUnselected === false) {
                          onClose();
                          toast({
                            title: "Item added to order!",
                            status: "success",
                            duration: 2500,
                            isClosable: false,
                            position: "bottom",
                          });
                        }
                      }}
                    >
                      {itemDetails.sizes.length !== 0 ? (
                        <Field name="size" validate={validateSize}>
                          {({ field, form }) => (
                            <FormControl isInvalid={form.errors.size && form.touched.size}>
                              <Text as={FormLabel} htmlFor="size" paddingLeft="5px" font="body" fontSize="md" color="100" fontWeight="semibold">
                                Size
                                <Tag as="span" rounded="full" marginLeft="5px" size="sm" variant="subtle" float="right" colorScheme="yellow">
                                  <TagLabel>Required</TagLabel>
                                </Tag>
                                <FormErrorMessage margin="0px" w="150px" bg="red.100" paddingX="10px" rounded="5px">
                                  {form.errors.size}
                                </FormErrorMessage>
                              </Text>

                              <RadioGroup {...field}>
                                <Stack paddingLeft="10px" spacing="15px" paddingBottom="15px">
                                  {itemDetails.sizes.map((size) => (
                                    <Box key={size.name}>
                                      <Radio
                                        size="lg"
                                        width="50%"
                                        colorScheme="green"
                                        name="size"
                                        value={size.name}
                                        onChange={(e) => {
                                          props.values.price = size.price;
                                          radioUnselected = false;
                                          props.handleChange(e);
                                        }}
                                      >
                                        <Text fontSize="md">{size.name}</Text>
                                      </Radio>
                                      <Divider position="relative" top="6px"></Divider>
                                    </Box>
                                  ))}
                                </Stack>
                              </RadioGroup>
                            </FormControl>
                          )}
                        </Field>
                      ) : (
                        (radioUnselected = false)
                      )}

                      {itemDetails.addons.length !== 0 ? (
                        <Box>
                          <Text paddingLeft="5px" font="body" fontSize="md" color="100" fontWeight="semibold">
                            {itemDetails.modificationsDescription}
                          </Text>
                          <Stack paddingTop="10px" paddingLeft="10px" spacing="15px" paddingBottom="10px">
                            {itemDetails.addons.map((addon) => (
                              <Box key={addon}>
                                <Checkbox
                                  onChange={props.handleChange}
                                  name="addons"
                                  type="checkbox"
                                  value={addon}
                                  size="lg"
                                  colorScheme="green"
                                  width="50%"
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
                        Special Instructions
                      </Text>
                      <Center>
                        <Textarea
                          name="specialInstructions"
                          value={props.values.specialInstructions}
                          onChange={props.handleChange}
                          w="315px"
                          h="75px"
                          fontSize="16px"
                          variant="filled"
                        ></Textarea>
                      </Center>
                    </Form>
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
              {itemDetails.sizes != null
                ? itemDetails.sizes.length > 1
                  ? itemDetails.sizes.map((size, i) =>
                      itemDetails.sizes.length === i + 1 ? size.price + " " + size.name : size.price + " " + size.name + " | "
                    )
                  : itemDetails.price
                : null}
            </Text>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default ItemDrawer;
