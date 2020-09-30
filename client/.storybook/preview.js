import GlobalStyles from "../src/GlobalStyles";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};
const withGlobalStyles = (Story, context) => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Story {...context} />
      </Router>
    </>
  );
};
export const decorators = [withGlobalStyles];
