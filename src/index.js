import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme, Fonts } from "./styles/theme";

import "@fontsource/rubik/400.css";

ReactDOM.render(
  <ChakraProvider resetCSS theme={customTheme}>
    <Fonts />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
