import BaseScene from "../engine/BaseScene.js";
import LoadingScene from "./LoadingScene.js";
import IntroScene from "./IntroScene.js";
import EnvelopeScene from "./EnvelopeScene.js";
import { fadeToBlack, fadeFromBlack, wait } from "../utils/helper.js";

export default class EndingScene extends BaseScene {

    render() {

        return `

<section class="ending-scene">

    <div class="ending-content">

        <p id="ending-line-one" class="ending-line">

            Terima kasih.

        </p>

        <p id="ending-line-two" class="ending-line">

            Semoga hadiah kecil ini dapat selalu menemani langkahmu.

        </p>

        <button
            id="ending-replay-btn"
            class="ending-replay-btn"
            type="button"
            hidden>

            Putar Lagi

        </button>

    </div>

</section>

`;

    }

    async enter() {

        const lineOne = document.getElementById("ending-line-one");
        const lineTwo = document.getElementById("ending-line-two");
        const replayBtn = document.getElementById("ending-replay-btn");

        await wait(400);

        lineOne.classList.add("is-visible");

        await wait(2800);

        lineTwo.classList.add("is-visible");

        await wait(3200);

        replayBtn.hidden = false;

        await wait(700);

        replayBtn.classList.add("is-visible");

        replayBtn.addEventListener("click", () => {

            this.restart();

        }, { once: true });

    }

    async restart() {

        fadeToBlack();

        await wait(1200);

        if (!this.app.sceneManager) return;

        await this.app.sceneManager.load(LoadingScene);
        await this.app.sceneManager.load(IntroScene);
        await this.app.sceneManager.load(EnvelopeScene);

        fadeFromBlack();

    }

}
