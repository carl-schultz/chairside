import { Box, IconButton, Center, Icon, HStack, Tag, Heading, Divider, Stack, Text, Button } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { useHistory } from "react-router-dom";

function OrderSummary(props) {
  const removeFromOrder = props.removeFromOrder;
  const checkout = props.checkout;
  const orders = props.orders;
  const tableNumber = props.tableNumber;

  //calculate and order subtotal to display at bottom of page
  var subtotal = 0;
  orders.map((order) => (subtotal = subtotal + +parseFloat(order.price.substr(1))));

  //history so that back-button navigates back to menu
  let history = useHistory();
  //sets scroll to top of page so scroll history is not kept when entering order summary page
  window.scrollTo(0, 0);

  return (
    <Box padding="24px" w="100%">
      <HStack justifyContent="space-between">
        <IconButton
          aria-label="back button"
          icon={<Icon as={IoArrowBack} w="20px" h="20px" />}
          isRound="true"
          size="sm"
          backgroundColor="200"
          onClick={() => history.goBack()}
        ></IconButton>
        <Heading font="heading" fontWeight="semibold" fontSize="lg" color="100">
          Your Order
          <Text color="400" fontSize="md" align="center" position="relative" top="5px">
            Table {tableNumber}
          </Text>
        </Heading>
        <Tag size="lg" borderRadius="full" colorScheme="green" font="poppins" fontWeight="semibold" justifyContent="center">
          {orders.length}
        </Tag>
      </HStack>
      <Divider paddingY="10px"></Divider>
      <Stack paddingTop="15px">
        {orders.map((order) => (
          <Box key={order.name}>
            <HStack justifyContent="space-between">
              <Box>
                <Text as="span" font="heading" fontWeight="semibold" size="mdx" paddingRight="5px">
                  {order.name}
                </Text>
                <Text as="span" font="heading" size="mdx">
                  {order.size}
                </Text>
              </Box>
              <Text font="heading" fontWeight="semibold" size="mdx">
                {order.price}
              </Text>
            </HStack>
            <Button size="sm" variant="ghost" colorScheme="green" bottom="7px" onClick={() => removeFromOrder(order)}>
              Remove
            </Button>
          </Box>
        ))}
      </Stack>
      <Divider></Divider>
      <HStack justifyContent="space-between" paddingTop="10px">
        <Text>Subtotal</Text>
        <Text>${subtotal.toFixed(2)}</Text>
      </HStack>
      <Center>
        <Button width="320px" rounded="5px" colorScheme="green" fontSize="md" fontWeight="semibold" marginTop="20px" onClick={() => {checkout()}}>
          Checkout
        </Button>
      </Center>
    </Box>
  );
}

export default OrderSummary;
