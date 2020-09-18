import React from "react";
import { Global, css } from "@emotion/core";
import backgroundImageSrc from "./assets/backgroundImage.png";

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

        html {
          font-size: 14px;
          color: #fff;
        }

        body {
          margin: 0;
          padding: 0;
          background-image: url(${backgroundImageSrc});
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}
    />
  );
};

export default GlobalStyles;
