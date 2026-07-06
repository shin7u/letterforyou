import TimelineEngine from "../engine/TimelineEngine.js";
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

                const timeline = new TimelineEngine();
                
                timeline
                
                    .wait(1000)
                
                    .do(() => {
                    
                        console.log("Loading...");
                    
                    })
                
                    .wait(1000)
                
                    .do(() => {
                    
                        console.log("Prepare Intro");
                    
                    })
                
                    .play();

            }

}