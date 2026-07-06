import BaseScene from "../engine/BaseScene.js";

export default class IntroScene extends BaseScene {

    render() {

        return `
            <section class="intro-scene">

                <div class="intro-container">

                    <h1 id="intro-title" class="intro-title"></h1>

                    <p id="intro-subtitle" class="intro-subtitle"></p>

                </div>

            </section>
        `;

    }

    async enter() {

        const title = document.getElementById("intro-title");
        const subtitle = document.getElementById("intro-subtitle");

        title.textContent = "Untuk Fadia Aryaza.";
        title.classList.add("visible");

        await this.wait(2800);

        title.classList.remove("visible");

        await this.wait(1000);

        subtitle.textContent = "Ada beberapa hal yang belum sempat Mas sampaikan.";
        subtitle.classList.add("visible");

        await this.wait(3500);

        subtitle.classList.remove("visible");

    }

    destroy(){}

    wait(ms){

        return new Promise(resolve=>setTimeout(resolve,ms));

    }

}