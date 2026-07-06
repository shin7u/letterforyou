export default class SceneManager {

    static scenes = {};

    static current = null;

    static register(name, scene) {

        this.scenes[name] = scene;

    }

    static start(name) {

        this.current = name;

        const app = document.getElementById("app");

        const Scene = this.scenes[name];

        if (!Scene) {

            throw new Error(`Scene '${name}' not found`);

        }

        const instance = new Scene();

        app.innerHTML = instance.render();

    }

}