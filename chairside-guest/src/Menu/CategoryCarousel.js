import { Button, Container, ButtonGroup } from "@chakra-ui/react";
import { scroller } from "react-scroll";

function CategoryCarousel(props) {
  const items = props.items;
  return (
    <Container width="100%" overflowX="" overflowY="hidden" whiteSpace="nowrap" paddingLeft="24px" margin="0px" maxWidth="100vw">
      <ButtonGroup boxSizing="100%" overflow="hidden">
        {items.map((item) => (
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
        ))}
      </ButtonGroup>
    </Container>
  );
}

export default CategoryCarousel;
