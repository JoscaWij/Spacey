import createElement from "../lib/createElement";

export const createCanvas = () => {
  const canvas = createElement("canvas", {
    width: 375,
    height: 812,
  });
  canvas.getContext("2d");
  return canvas;
};
