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
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      html: {
        height: "100%",
        "@media (max-width: 1080px)": {
          fontSize: "93.75%",
        },
        "@media (max-width: 720px)": {
          fontSize: "87.5%",
        },
      },
      body: {
        bg: "blue.50",
        color: "blue.900",
      },
    },
  },
});
