import startSketch from "./app";

const freezeBtn = window.document.getElementById("freezeBtn");
const unfreezeBtn = window.document.getElementById("unfreezeBtn");
const resetBtn = window.document.getElementById("resetBtn");

const { start, remove, freeze, unfreeze, reset } =
  startSketch("sketch");

start();

freezeBtn!.onclick = () => {
  freeze();
};
unfreezeBtn!.onclick = () => {
  unfreeze();
};
resetBtn!.onclick = () => {
  reset();
};
