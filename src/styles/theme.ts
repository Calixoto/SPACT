import { extendTheme } from "@chakra-ui/react";

const colors = {
  background: "#F5F5F5",
};

const fonts = {
  heading: "Roboto",
  body: "Roboto",
};

export const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: "background",
        color: "black.100",
      },
    },
  },
});
