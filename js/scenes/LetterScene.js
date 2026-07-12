import BaseScene from "../engine/BaseScene.js";
import VideoScene from "./VideoScene.js";
import { fadeToBlack, fadeFromBlack, wait } from "../utils/helper.js";

const FADE_MS = 700;

export default class LetterScene extends BaseScene {

    render() {

        return `

<section class="letter-scene">

    <div class="letter-backdrop"></div>

    <article class="letter-paper">

        <h1 id="letter-title" class="letter-title"></h1>

        <div class="letter-body">

            <p id="letter-paragraph" class="letter-paragraph"></p>

        </div>

        <button
            id="letter-gift-btn"
            class="letter-gift-btn"
            type="button"
            hidden>

            Buka Hadiah

        </button>

    </article>

</section>

`;

    }

    enter() {

        const paper = document.querySelector(".letter-paper");
        const title = document.getElementById("letter-title");
        const paragraph = document.getElementById("letter-paragraph");
        const giftBtn = document.getElementById("letter-gift-btn");

        this.playLetter(paper, title, paragraph, giftBtn);

    }

    async playLetter(paper, title, paragraph, giftBtn) {

        const { title: letterTitle, paragraphs } =
            await this.loadLetter();

        if (letterTitle) {

            title.textContent = letterTitle;

        }

        paper.classList.add("is-visible");

        await wait(900);

        for (const text of paragraphs) {

            paragraph.textContent = text;

            await this.fadeIn(paragraph);

            await wait(this.readingTime(text));

            await this.fadeOut(paragraph);

        }

        await wait(800);

        paragraph.textContent = "";

        giftBtn.hidden = false;

        await wait(FADE_MS);

        giftBtn.classList.add("is-visible");

        giftBtn.addEventListener("click", () => {

            this.transitionToVideo(giftBtn);

        }, { once: true });

    }

    async transitionToVideo(button) {

        button.disabled = true;

        fadeToBlack();

        await wait(1200);

        if (this.app.sceneManager) {

            await this.app.sceneManager.load(VideoScene);

        }

        fadeFromBlack();

    }

    async loadLetter() {

        const response = await fetch("./data/letter.json");

        if (!response.ok) {

            return { title: "", paragraphs: [] };

        }

        const raw = await response.text();

        if (!raw.trim()) {

            return { title: "", paragraphs: [] };

        }

        const data = JSON.parse(raw);

        return {
            title: data.title || "",
            paragraphs: Array.isArray(data.paragraphs)
                ? data.paragraphs
                : [],
        };

    }

    readingTime(text) {

        return Math.max(3500, text.length * 45);

    }

    async fadeIn(element) {

        element.classList.add("is-visible");

        await wait(FADE_MS);

    }

    async fadeOut(element) {

        element.classList.remove("is-visible");

        await wait(FADE_MS);

    }

}
