import CONFIG from "./config.js";

import SceneManager from "./engine/SceneManager.js";

import IntroScene from "./scenes/IntroScene.js";

console.clear();

console.log(CONFIG.APP_NAME);

const app = document.getElementById("app");

const sceneManager = new SceneManager(app);

sceneManager.load(IntroScene);