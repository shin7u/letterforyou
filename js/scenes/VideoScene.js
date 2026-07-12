import BaseScene from "../engine/BaseScene.js";
import CONFIG from "../config.js";
import EndingScene from "./EndingScene.js";
import { fadeToBlack, fadeFromBlack, wait } from "../utils/helper.js";

export default class VideoScene extends BaseScene {

    render() {

        return `

<section class="video-scene">

    <video
        id="kirameki-video"
        class="video-player"
        controls
        playsinline
        preload="auto">

        <source
            src="${CONFIG.VIDEO_PATH}"
            type="video/mp4">

    </video>

</section>

`;

    }

    async enter() {

        const video = document.getElementById("kirameki-video");

        video.addEventListener("ended", () => {

            this.handleEnded();

        }, { once: true });

        try {

            await video.play();

        } catch (error) {

            if (CONFIG.DEBUG) {

                console.warn("Video autoplay blocked:", error);

            }

        }

    }

    async handleEnded() {

        fadeToBlack();

        await wait(1200);

        if (this.app.sceneManager) {

            await this.app.sceneManager.load(EndingScene);

        }

        fadeFromBlack();

    }

    exit() {

        const video = document.getElementById("kirameki-video");

        if (!video) return;

        video.pause();
        video.removeAttribute("src");

        const source = video.querySelector("source");

        if (source) {

            source.removeAttribute("src");

        }

        video.load();

    }

}
