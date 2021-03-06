import {
  Button,
  Container,
  Flex,
  Image,
  Spacer,
  HStack,
  Heading,
  VStack,
  Text,
  StackItem,
  Stack,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "focus-visible/dist/focus-visible";
import { scroller } from "react-scroll";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl" py={["20px", "40px", "45px"]} px={["20px", "40px", "100px"]} h="100vh">
      <Flex paddingBottom="128px">
        <HStack>
          <Image src="logo.svg" width="180px"></Image>
        </HStack>
        <Spacer />
        <HStack position="relative" top="8px">
          <Button
            variant="ghost"
            fontFamily="Poppins"
            fontSize="16px"
            color="#484848"
            rounded="full"
            _hover={{ bg: "white" }}
            display={{ base: "none", sm: "none", mediumsmall: "block" }}
            onClick={() => {
              scroller.scrollTo("about", {
                duration: 500,
                delay: 0,
                smooth: true,
                offset: -20,
              });
            }}
          >
            About
          </Button>
          <Button
            variant="ghost"
            fontFamily="Poppins"
            fontSize="16px"
            color="#484848"
            rounded="full"
            _hover={{ bg: "white" }}
            display={{ base: "none", sm: "none", mediumsmall: "block" }}
            onClick={() => {
              scroller.scrollTo("pricing", {
                duration: 500,
                delay: 0,
                smooth: true,
                offset: -20,
              });
            }}
          >
            Pricing
          </Button>
          <Button
            as="a"
            href="https://eat.chairside.app/demo"
            target="_blank"
            variant="ghost"
            fontFamily="Poppins"
            fontSize="16px"
            color="#484848"
            rounded="full"
            _hover={{ bg: "white" }}
            display={{ base: "none", sm: "none", mediumsmall: "inherit" }}
          >
            Demo
          </Button>
          <Button
            as="a"
            href="mailto:hellochairside@gmail.com"
            fontFamily="Poppins"
            color="#484848"
            bg="white"
            rounded="full"
            px="20px"
            display={{ base: "none", sm: "none", mediumsmall: "inherit" }}
          >
            Contact Us
          </Button>
          <IconButton colorScheme="none" color="black" icon={<HamburgerIcon />} onClick={onOpen} display={{ mediumsmall: "none" }} />
        </HStack>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton marginTop="20px" marginRight="15px" />
          <Container padding="20px">
            <DrawerBody>
              <Stack paddingTop="80px">
                <Button
                  as={DrawerCloseButton}
                  variant="ghost"
                  width="fit-content"
                  rounded="full"
                  fontFamily="Poppins"
                  fontSize="16px"
                  color="#484848"
                  onClick={() => {
                    scroller.scrollTo("about", {
                      duration: 500,
                      delay: 0,
                      smooth: true,
                      offset: -20,
                    });
                  }}
                >
                  About
                </Button>
                <Button
                  as={DrawerCloseButton}
                  variant="ghost"
                  width="fit-content"
                  rounded="full"
                  fontFamily="Poppins"
                  fontSize="16px"
                  color="#484848"
                  onClick={() => {
                    scroller.scrollTo("pricing", {
                      duration: 500,
                      delay: 0,
                      smooth: true,
                      offset: -20,
                    });
                  }}
                >
                  Pricing
                </Button>
                <Button
                  as="a"
                  href="https://eat.chairside.app/demo"
                  target="_blank"
                  width="fit-content"
                  variant="ghost"
                  fontFamily="Poppins"
                  fontSize="16px"
                  color="#484848"
                  rounded="full"
                  right="12px"
                  top="7px"
                >
                  Demo
                </Button>
                <Spacer padding="10px" />
                <Button as="a" href="mailto:hellochairside@gmail.com" fontFamily="Poppins" color="#484848" bg="#f8f5ec" rounded="full" w="full">
                  Contact Us
                </Button>
              </Stack>
            </DrawerBody>
          </Container>
        </DrawerContent>
      </Drawer>
      <VStack alignItems="left" spacing="40px">
        <Heading fontSize="36px" color="#484848" maxW="620px">
          From the table mobile ordering, made simple
        </Heading>
        <Text fontSize="24px" color="#484848" maxW="350px" lineHeight="shorter">
          Let your customers order from where they are, with the device that???s already in their hand.
        </Text>
        <StackItem align="right" paddingBottom="45px">
          <Image src="cartoon.svg" style={{ opacity: 0.7 }} width="515px"></Image>
        </StackItem>
        <VStack spacing="50px" alignItems="left" paddingBottom="100px">
          <Stack direction={{ base: "column", lg: "row" }} spacing="30px">
            <Heading fontSize="22px" color="#484848" maxW="585px">
              Chairside allows your guests to scan a QR code to view an easily readable digital version of your menu
            </Heading>
            <StackItem paddingLeft={{ base: "20px", lg: "0px" }}>
              <Image src="qr.png" width="130px" rounded="20px"></Image>
            </StackItem>
          </Stack>
          <Stack direction={{ base: "column", lg: "row" }} spacing="30px">
            <Heading fontSize="22px" color="#484848" maxW="585px">
              We designed our menu layout to be intuitive and easy to use, no confusing drop-down menus, cut off descriptions, or popups. Even grandma
              can navigate it
            </Heading>
            <StackItem paddingLeft={{ base: "20px", lg: "0px" }}>
              <Image src="mockup.png" maxW="240px"></Image>
            </StackItem>
          </Stack>
          <Heading className="about" fontSize="22px" color="#484848" maxW="585px">
            You???ll have a dashboard where you can create, modify, or delete menu items. You can also save different versions of your menu (like
            seasonal menus)
          </Heading>
          <Heading className="pricing" fontSize="22px" color="#484848" maxW="585px">
            It???s a breeze to get set up with Chairside and we keep our product simple so that you don???t pay for endless bells and whistles. Chairside
            is just $40 a month and each transaction has a credit card fee of 2.9% + 15??
          </Heading>
          <Heading fontSize="22px" color="#484848" maxW="585px">
            No POS? No problem. Chairside operates as it???s own entity with or without a POS system. If you do have a POS, Chairside will operate
            alongside your current system
          </Heading>
          <Heading fontSize="22px" color="#484848" maxW="585px">
            Wanna hear more? Send send us an{" "}
            <Link href="mailto:hellochairside@gmail.com" color="#4F65DC">
              email
            </Link>{" "}
            and we???ll answer any questions you have! We???re happy to help.
          </Heading>
        </VStack>
      </VStack>
    </Container>
  );
}

export default App;
