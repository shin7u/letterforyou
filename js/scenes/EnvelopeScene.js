import BaseScene from "../engine/BaseScene.js";
import LetterScene from "./LetterScene.js";
import { fadeToBlack, fadeFromBlack, wait } from "../utils/helper.js";

const STARS = [
    { top: "3%",  left: "8%",  size: "sm", twinkle: true  },
    { top: "6%",  left: "22%", size: "md", twinkle: false },
    { top: "2%",  left: "38%", size: "sm", twinkle: false },
    { top: "8%",  left: "52%", size: "lg", twinkle: true  },
    { top: "4%",  left: "68%", size: "sm", twinkle: false },
    { top: "10%", left: "78%", size: "md", twinkle: true  },
    { top: "5%",  left: "92%", size: "sm", twinkle: false },
    { top: "14%", left: "15%", size: "md", twinkle: false },
    { top: "12%", left: "32%", size: "sm", twinkle: true  },
    { top: "16%", left: "45%", size: "lg", twinkle: false },
    { top: "11%", left: "58%", size: "sm", twinkle: false },
    { top: "18%", left: "72%", size: "md", twinkle: true  },
    { top: "15%", left: "85%", size: "sm", twinkle: false },
    { top: "20%", left: "28%", size: "md", twinkle: false },
    { top: "22%", left: "62%", size: "sm", twinkle: true  },
    { top: "19%", left: "48%", size: "sm", twinkle: false },
];

export default class EnvelopeScene extends BaseScene {

    renderStars() {

        return STARS.map((star, i) => {

            const classes = [
                "star",
                `star--${star.size}`,
                star.twinkle ? "star--twinkle" : "",
            ].join(" ");

            const style = [
                `top:${star.top}`,
                `left:${star.left}`,
                star.twinkle ? `animation-delay:${(i % 5) * 0.7}s` : "",
            ].join(";");

            return `<span class="${classes}" style="${style}"></span>`;

        }).join("");

    }

    render() {

        return `

<section class="envelope-scene">

    <div class="sky"></div>

    <div class="moon"></div>

    <div class="stars">${this.renderStars()}</div>

    <div class="envelope-container">

        <div id="envelope" class="envelope">

            <div class="letter"></div>

            <div class="flap"></div>

            <button
                id="seal"
                class="seal"
                type="button">

                &hearts;

            </button>

        </div>

    </div>

    <p class="instruction">

        Klik &hearts; untuk membuka surat

    </p>

</section>

`;

    }

    async enter() {

        const envelope = document.getElementById("envelope");
        const seal = document.getElementById("seal");
        const scene = document.querySelector(".envelope-scene");

        seal.addEventListener("click", () => {

            this.handleOpen(envelope, seal, scene);

        });

        await wait(500);

        envelope.classList.add("show");

    }

    async handleOpen(envelope, seal, scene) {

        if (envelope.dataset.opening) return;

        envelope.dataset.opening = "true";
        seal.disabled = true;

        scene.classList.add("is-opening");
        envelope.classList.add("open");

        await wait(1200);

        envelope.classList.add("paper-out");

        await wait(2200);

        await wait(700);

        fadeToBlack();

        await wait(1200);

        if (this.app.sceneManager) {

            await this.app.sceneManager.load(LetterScene);

        }

        fadeFromBlack();

    }

}
