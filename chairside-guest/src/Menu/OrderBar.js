import { Button, Text, Icon, HStack, StackItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { IoReceipt } from "react-icons/io5";

function OrderBar(props) {
  const orders = props.orders;
  const orderSize = orders.length;
  //order cart
  var subtotal = 0;
  orders.map((order) => (subtotal = subtotal + parseFloat(order.price.substr(1))));

  return (
    <Button as={ReactRouterLink} to="/order" colorScheme="green" w="95%" roundedBottom="10px" roundedTop="0px" size="lg" _hover="none">
      <HStack justifyContent="space-between" w="100%">
        <StackItem>
          <Icon as={IoReceipt} w="20px" h="20px" left="5px" color="white" />
          <Text as="span" font="heading" fontSize="md" color="white" fontWeight="normal" paddingLeft="10px" paddingRight="5px">
            Order Total
          </Text>
          <Text as="span" font="heading" fontWeight="normal" fontSize="md" color="white">
            ({orderSize})
          </Text>
        </StackItem>
        <StackItem>
          <Text as="span" font="heading" fontWeight="normal" fontSize="md" color="white" justifySelf="flex-end">
            ${subtotal.toFixed(2)}
          </Text>
        </StackItem>
      </HStack>
    </Button>
  );
}

export default OrderBar;
