function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

export const gameLoop2 = (canvas) => {
  const context = canvas.getContext("2d");
  clearCanvas(canvas, context);

  requestAnimationFrame(() => gameLoop2(canvas));
};
