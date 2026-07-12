import BaseScene from "../engine/BaseScene.js";
import LoadingScene from "./LoadingScene.js";
import IntroScene from "./IntroScene.js";
import EnvelopeScene from "./EnvelopeScene.js";
import { wait } from "../utils/helper.js";

export default class StartScene extends BaseScene {

    render() {

        return `

<section class="start-scene">

    <div class="start-content">

        <h1 class="start-title">
            Untuk Fadia Aryaza
        </h1>

        <div class="start-message">

            <p>
                Terima kasih sudah meluangkan waktu untuk membuka hadiah kecil ini.
            </p>

            <p>
                Disarankan menggunakan earphone agar pengalaman menjadi lebih baik.
            </p>

        </div>

        <button
            id="start-button"
            class="start-button"
            type="button">

            Mulai

        </button>

    </div>

</section>

`;

    }

    enter() {

        const button = document.getElementById("start-button");

        button.addEventListener("click", () => {

            this.start(button);

        }, { once: true });

    }

    async start(button) {

        button.disabled = true;

        const scene = document.querySelector(".start-scene");

        if (scene) {

            scene.classList.add("is-leaving");

        }

        await wait(900);

        if (!this.app.sceneManager) return;

        await this.app.sceneManager.load(LoadingScene);
        await this.app.sceneManager.load(IntroScene);
        await this.app.sceneManager.load(EnvelopeScene);

    }

}
