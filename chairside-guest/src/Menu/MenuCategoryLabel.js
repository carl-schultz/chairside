import React, {Component} from 'react'
import { 
    Heading
} from "@chakra-ui/react"

const MenuCategoryLabel = (props) => {
    return (
        <Heading font="heading" fontWeight="semibold" fontSize="lg" color="100">{props.label}</Heading>
    )
}

export default MenuCategoryLabel