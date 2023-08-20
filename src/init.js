// eslint-disable-next-line import/named
import game, { handleUserAction } from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

function init() {
  console.log("Starting the game");
  initButtons(handleUserAction);

  let nextTimeToClick = Date.now();

  function nexAnimationFrame() {
    const now = Date.now();

    if (nextTimeToClick <= now) {
      game.tick();
      nextTimeToClick = now + TICK_RATE;
    }
    requestAnimationFrame(nexAnimationFrame);
  }
  nexAnimationFrame();
}

init();
