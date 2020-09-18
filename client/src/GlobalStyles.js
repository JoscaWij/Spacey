import React from "react";
import { Global, css } from "@emotion/core";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        :root {
          --highlight-color: #d9a491;
          --highlight-shadow: 0 3 4 var(--highlight-color);
          --button-gradient: linear-gradient(
            to bottom,
            var(--highlight-color) 0%,
            #5a443c 80%,
            #000000 100%
          );
        }
      `}
    />
  );
};

export default GlobalStyles;
