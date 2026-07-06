export function wait(ms){

    return new Promise(resolve=>{

        setTimeout(resolve,ms);

    });

}

export function fadeToBlack(){

    document
        .getElementById("screen-fader")
        .classList
        .add("show");

}

export function fadeFromBlack(){

    document
        .getElementById("screen-fader")
        .classList
        .remove("show");

}