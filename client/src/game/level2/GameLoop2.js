import drawPlayer from "../drawPlayer";

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

const player = {
  width: 200,
  height: 200,
  left: 50,
  top: 50,
};

export const gameLoop2 = (canvas, levelnumber) => {
  const context = canvas.getContext("2d");
  clearCanvas(canvas, context);

  drawPlayer(player, context, levelnumber);

  requestAnimationFrame(() => gameLoop2(canvas, levelnumber));
};
