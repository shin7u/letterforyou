import CONFIG from "./config.js";

export default class Loader {

    static init() {

        if (CONFIG.DEBUG) {

            console.log("Loader Initialized");

        }

    }

}