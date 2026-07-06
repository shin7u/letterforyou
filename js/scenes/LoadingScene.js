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

                </div>

            </section>
        `;

    }

    enter() {

        console.log("Loading Scene Enter");

    }

}