import CONFIG from "./config.js";
import Loader from "./loader.js";

import SceneManager from "./engine/SceneManager.js";

import LoadingScene from "./scenes/LoadingScene.js";

console.clear();

console.log(
    `%c${CONFIG.APP_NAME}`,
    "font-size:22px;color:#ff7aa8;font-weight:bold;"
);

Loader.init();

SceneManager.register(
    "loading",
    LoadingScene
);

SceneManager.start(
    CONFIG.START_SCENE
);