import React, { Component } from 'react'
import {
    Box,
    Stack,
    HStack,
    List,
    ListItem,
    Image,
    Text,
    Grid,
    GridItem,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    Center,
} from "@chakra-ui/react"

function ItemDrawer(props) {
    const isOpen = props.isOpen
    const onClose = props.onClose
    const itemDetails = props.itemDetails

    return (
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} >
            <DrawerOverlay bg="rgba(0, 0, 0, 0.2)" />
            <DrawerContent roundedTop="20px">
                <DrawerCloseButton backgroundColor="200" rounded="full" />
                <Center>
                    <DrawerHeader textAlign="center" font="body" fontSize="lg" color="100" whiteSpace="nowrap">
                        {itemDetails.name}
                        <Text fontWeight="normal" font="body" fontSize="md" color="400" paddingTop="4px">
                            {itemDetails.price}
                        </Text>
                    </DrawerHeader>
                </Center>

                <DrawerBody>
                    <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer >
    )
}

export default ItemDrawer