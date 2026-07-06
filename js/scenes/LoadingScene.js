import BaseScene from "../engine/BaseScene.js";

export default class LoadingScene extends BaseScene {

    render() {

        return `
            <section class="loading-scene">

                <div class="loading-content">

                    <h1 class="loading-title">
                        Project Kirameki
                    </h1>

                    <p class="loading-subtitle">
                        Preparing your memories...
                    </p>

                    <div class="loading-spinner"></div>

                </div>

            </section>
        `;

    }

    async enter() {

        await this.wait(1800);

    }

    exit() {

        const scene = document.querySelector(".loading-scene");

        if (scene) {

            scene.classList.add("fade-out");

        }

    }

    destroy() {}

    wait(ms) {

        return new Promise(resolve => {

            setTimeout(resolve, ms);

        });

    }

}