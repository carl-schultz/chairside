import { Button, Container, ButtonGroup, Skeleton } from "@chakra-ui/react";
import { scroller } from "react-scroll";

function CategoryCarousel(props) {
  const items = props.items;
  const loading = props.loading;

  return (
    <Container width="100%" overflowX="" overflowY="hidden" whiteSpace="nowrap" paddingLeft="24px" margin="0px" maxWidth="100vw">
      <ButtonGroup boxSizing="100%" overflow="hidden">
        {items.map((item) => (
          <Skeleton isLoaded={!loading} rounded ="full" key={item.category}>
            <Button
              key={item.category}
              font="body"
              fontWeight="regular"
              fontSize="md"
              letterSpacing="wider"
              bgColor="200"
              color="500"
              rounded="full"
              onClick={() => {
                scroller.scrollTo(item.category, {
                  duration: 500,
                  delay: 0,
                  smooth: true,
                  offset: -20,
                });
              }}
            >
              {item.category}
            </Button>
          </Skeleton>
        ))}
      </ButtonGroup>
    </Container>
  );
}

export default CategoryCarousel;
