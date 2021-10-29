import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
      100: "#0A0724", //black
      200: "#f1f1f1", //grey background
      300: "#9B9B9B", //grey text
      400: "#58AF92", //green
      500: "#707070", //greyText a little darker
      green: {
        50: "#e2faf3",
        100: "#c5e8dc",
        200: "#a6d7c7",
        300: "#84c5b0",
        400: "#64b59a",
        500: "#4a9b80",
        600: "#387964",
        700: "#255647",
        800: "#12352a",
        900: "#00140c",
      },
    },
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
    fontWeights: {
      normal: 400,
      semibold: 600,
      bold: 800,
    },
    fontSizes: {
      lg: "18px",
      mdx: "16px",
      md: "15px",
      sm: "13px",
      smx: "14px",
    },
    letterSpacings: {
      normal: "0.675px",
    },
    colorScheme: {
      400: "#58AF92",
    },
    lineHeights: {
      normal: "1.2",
    },
  });

  export default theme;