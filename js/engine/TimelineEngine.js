export default class TimelineEngine {

    constructor() {

        this.tasks = [];

    }

    wait(duration) {

        this.tasks.push({
            type: "wait",
            duration
        });

        return this;

    }

    do(callback) {

        this.tasks.push({
            type: "action",
            callback
        });

        return this;

    }

    async play() {

        for (const task of this.tasks) {

            if (task.type === "wait") {

                await new Promise(resolve =>
                    setTimeout(resolve, task.duration)
                );

            }

            if (task.type === "action") {

                task.callback();

            }

        }

    }

}