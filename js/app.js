import CONFIG from "./config.js";

import SceneManager from "./engine/SceneManager.js";

import StartScene from "./scenes/StartScene.js";

console.clear();

console.log(CONFIG.APP_NAME);

const app = document.getElementById("app");

const scene = new SceneManager(app);

app.sceneManager = scene;

(async () => {

    await scene.load(StartScene);

})();
