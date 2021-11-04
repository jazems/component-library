import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme, Fonts } from "../src/styles/theme";
import "@fontsource/rubik/400.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS theme={customTheme}>
      <Fonts />
      <Story />
    </ChakraProvider>
  ),
];
