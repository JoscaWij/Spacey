import React from "react";
import { Global, css } from "@emotion/core";
import backgroundImageSrc from "./assets/backgroundImage.png";
import RobotoMono from "./assets/fonts/RobotoMono-VariableFont_wght.ttf";
import PermanentMarker from "./assets/fonts/PermanentMarker-Regular.ttf";

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
          @font-face {
            font-family: "RobotoMono";
            src: url(${RobotoMono}) format("truetype");
          }
          @font-face {
            font-family: "PermanentMarker";
            src: url(${PermanentMarker}) format("truetype");
          }
          font-family: "RobotoMono";
        }

        body {
          margin: 0;
          padding: 0;
          background-image: url(${backgroundImageSrc});
          background-size: cover;
          background-repeat: no-repeat;
        }

        button {
          background-image: var(--button-gradient);
          border-radius: 20px;
          border-style: none;
          padding: 0.5em 1em;
          font-family: "RobotoMono";
          color: #fff;
        }
      `}
    />
  );
};

export default GlobalStyles;
