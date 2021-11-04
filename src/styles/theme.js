import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const customTheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Avenir Next Cyr",
      },
    },
  },
  colors: {
    primary: {
      orange: "#FF6600",
      dark: "#2B2541",
      yellow: "#FED800",
      stone: "#FED800",
      ice: "#F9FBFD",
      gray: "#7C788A",
      white: "#FFFFFF",
    },
    secondary: {
      meadow: "#7FB069",
      sand: "#E6AA68",
      dorian: "#F5F5F5",
      gold: "#F5F5F5",
      lake: "#3F88C5",
    },
  },
});

export const Fonts = () => (
  <Global
    styles={`
      /* Avenir Next Cyr */
      @font-face {
        font-family: 'Avenir Next Cyr';
        src: url("//db.onlinewebfonts.com/t/11d164da9b46e6f7955e396757e5ca70.eot");
        src: url("//db.onlinewebfonts.com/t/11d164da9b46e6f7955e396757e5ca70.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/11d164da9b46e6f7955e396757e5ca70.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/11d164da9b46e6f7955e396757e5ca70.woff") format("woff"), url("//db.onlinewebfonts.com/t/11d164da9b46e6f7955e396757e5ca70.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/11d164da9b46e6f7955e396757e5ca70.svg#Avenir Next Cyr") format("svg");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }`}
  />
);
