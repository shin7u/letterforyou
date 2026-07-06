import CONFIG from "./config.js";

import SceneManager from "./engine/SceneManager.js";

import EnvelopeScene from "./scenes/EnvelopeScene.js";

console.clear();

console.log(CONFIG.APP_NAME);

const app =
document.getElementById("app");

const scene =
new SceneManager(app);

scene.load(
EnvelopeScene
);