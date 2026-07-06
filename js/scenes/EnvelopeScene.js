import BaseScene from "../engine/BaseScene.js";

export default class EnvelopeScene extends BaseScene {

    render() {

        return `

        <section class="envelope-scene">

            <div class="night"></div>

            <div class="moon"></div>

            <div class="stars"></div>

            <div class="envelope">

                <div class="letter"></div>

                <div class="flap"></div>

                <button
                    id="seal"
                    class="seal">

                    ❤

                </button>

            </div>

            <p class="instruction">

                Klik segel hati

            </p>

        </section>

        `;

    }

    enter(){

        const seal =
            document.getElementById("seal");

        seal.addEventListener("click",()=>{

            document
                .querySelector(".envelope")
                .classList
                .add("open");

        });

    }

}