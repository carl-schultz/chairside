import { Box, IconButton, Icon, HStack, Tag, Heading, Divider, Stack, Text, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function OrderSummary(props) {
  const removeFromOrder = props.removeFromOrder;
  const orders = props.orders;
  var subtotal = 0;
  orders.map((order) => (subtotal = subtotal + +parseFloat(order.price.substr(1))));

  return (
    <Box padding="24px">
      <HStack justifyContent="space-between">
        <IconButton
          as={ReactRouterLink}
          to="/"
          aria-label="back button"
          icon={<Icon as={IoArrowBack} w="20px" h="20px" />}
          isRound="true"
          size="sm"
          backgroundColor="200"
        ></IconButton>
        <Heading font="heading" fontWeight="semibold" fontSize="lg" color="100">
          Your Order
        </Heading>
        <Tag size="lg" borderRadius="full" colorScheme="green" font="poppins" fontWeight="semibold">
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
      <Button width="320px" rounded="5px" colorScheme="green" fontSize="md" fontWeight="semibold" marginTop="20px">
        Checkout
      </Button>
    </Box>
  );
}

export default OrderSummary;
