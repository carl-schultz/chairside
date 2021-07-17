import React from "react";
import MenuCategoryLabel from "./MenuCategoryLabel";
import { Box, Stack, HStack, Image, Text, Grid, GridItem, Skeleton } from "@chakra-ui/react";

function ItemList(props) {
  const items = props.items;
  const serveDrawer = props.serveDrawer;
  const loading = props.loading;

  return (
    <Stack marginX="24px">
      {items.map((item) => (
        <Box key={item.category} id={item.category}>
          <Skeleton isLoaded={!loading}>
            <Box marginBottom="18px">
              <MenuCategoryLabel label={item.category} />
            </Box>
            </Skeleton>
          {item.categoryItems.map((details) => (
            <Skeleton isLoaded={!loading} rounded="25" key={item.category}>
              <Box
                key={details.name}
                as="button"
                _hover={{ bg: "gray.100", transition: "0.2s" }}
                bgColor={200}
                _active={{ bg: "gray.200", transition: "0.1s" }}
                marginBottom="12px"
                padding="12px"
                width="100%"
                rounded="25"
                textAlign="left"
                onClick={() => serveDrawer(details)}
              >
                <HStack spacing="17px" align="top">
                  <Image src={details.img} boxSize="75px" borderRadius="20px"></Image>
                  <Grid templateRows="2">
                    <GridItem rowStart="1">
                      <Text font="body" fontSize="mdx" color="100">
                        {details.name}
                      </Text>
                      <Text font="body" fontSize="md" color="300" lineHeight="normal">
                        {details.description}
                      </Text>
                      <Text font="body" fontSize="md" color="300" fontWeight="semibold">
                        {details.secondaryDescription}
                      </Text>
                    </GridItem>
                    <GridItem rowStart="10">
                      <Text font="body" fontSize="md" color="400" paddingTop="3px">
                        {details.sizes.length > 1
                          ? details.sizes.map((size, i) =>
                              details.sizes.length === i + 1 ? size.price + " " + size.name : size.price + " " + size.name + " | "
                            )
                          : details.price}
                      </Text>
                    </GridItem>
                  </Grid>
                </HStack>
              </Box>
            </Skeleton>
          ))}
        </Box>
      ))}
    </Stack>
  );
}

export default ItemList;
