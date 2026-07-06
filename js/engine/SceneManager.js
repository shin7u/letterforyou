export default class SceneManager {

    constructor(app) {

        this.app = app;
        this.currentScene = null;

    }

    async load(SceneClass) {

        // Cleanup scene sebelumnya
        if (this.currentScene) {

            if (typeof this.currentScene.exit === "function") {
                await this.currentScene.exit();
            }

            if (typeof this.currentScene.destroy === "function") {
                this.currentScene.destroy();
            }

        }

        // Bersihkan container
        this.app.innerHTML = "";

        // Buat scene baru
        this.currentScene = new SceneClass(this.app);

        // Render HTML
        this.app.innerHTML = this.currentScene.render();

        // Jalankan lifecycle
        if (typeof this.currentScene.enter === "function") {
            await this.currentScene.enter();
        }

    }

    getCurrentScene() {

        return this.currentScene;

    }

}