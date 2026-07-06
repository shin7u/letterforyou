import BaseScene from "../engine/BaseScene.js";
import TimelineEngine from "../engine/TimelineEngine.js";

export default class IntroScene extends BaseScene {

    render() {

        return `

            <section class="intro-scene">

                <h1
                    id="intro-title"
                    class="intro-title">

                </h1>

                <p
                    id="intro-subtitle"
                    class="intro-subtitle">

                </p>

            </section>

        `;

    }

    enter() {

        const title =
            document.getElementById("intro-title");

        const subtitle =
            document.getElementById("intro-subtitle");

        const timeline =
            new TimelineEngine();

        timeline

            .wait(600)

            .do(() => {

                title.textContent =
                    "Untuk Fadia Aryaza.";

                title.classList.add("show");

            })

            .wait(2600)

            .do(() => {

                title.classList.remove("show");

            })

            .wait(900)

            .do(() => {

                subtitle.textContent =
                    "Ada beberapa hal yang belum sempat Mas sampaikan.";

                subtitle.classList.add("show");

            });

        timeline.play();

    }

}