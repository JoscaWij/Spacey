import React from "react";
import { Global, css } from "@emotion/core";
import backgroundImageSrc from "./assets/backgroundImage.png";
import RobotoMono from "./assets/fonts/RobotoMono-VariableFont_wght.ttf";
import PermanentMarker from "./assets/fonts/PermanentMarker-Regular.ttf";
import asteroidImageSrc from "./assets/asteroid.png";

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
        }

        body,
        div {
          height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
          font-family: "RobotoMono";
          background-image: url(${backgroundImageSrc});
          background-size: cover;
          background-repeat: no-repeat;
        }

        h1,
        h2 {
          font-family: "PermanentMarker";
          font-weight: lighter;
        }

        button {
          background-image: var(--button-gradient);
          background-color: transparent;
          border-radius: 25px;
          border-style: none;
          padding: 0.5em 1.6em;
          font-family: "RobotoMono";
          color: #fff;
          cursor: pointer;
        }

        button:hover {
          background-image: url(${asteroidImageSrc});
          background-size: cover;
          background-color: transparent;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
};

export default GlobalStyles;
