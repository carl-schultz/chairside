import React from "react";
import { Button, Container, ButtonGroup } from "@chakra-ui/react";

const CategoryCarousel = () => {
  return (
    <Container width="100%" overflowX="" overflowY="hidden" whiteSpace="nowrap" paddingLeft="24px" margin="0px" maxWidth="100vw">
      <ButtonGroup boxSizing="100%" overflow="hidden">
        <Button font="body" fontWeight="regular" fontSize="md" letterSpacing="wider" bgColor="200" color="500" rounded="full">
          Pastas
        </Button>
        <Button fontWeight="regular" fontSize="md" letterSpacing="wider" bgColor="200" color="500" rounded="full">
          Beverages
        </Button>
        <Button fontWeight="regular" fontSize="md" letterSpacing="wider" bgColor="200" color="500" rounded="full">
          Wine
        </Button>
        <Button fontWeight="regular" fontSize="md" letterSpacing="wider" bgColor="200" color="500" rounded="full">
          Shareables
        </Button>
        <Button fontWeight="regular" fontSize="md" letterSpacing="wider" bgColor="200" color="500" rounded="full">
          Salad
        </Button>
        <Button fontWeight="regular" fontSize="md" letterSpacing="wider" bgColor="200" color="500" rounded="full">
          Pizza
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default CategoryCarousel;
