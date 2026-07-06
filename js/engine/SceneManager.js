export default class SceneManager {

    constructor(app){

        this.app=app;

        this.current=null;

    }

    async load(SceneClass){

        if(this.current){

            this.current.exit();

            this.current.destroy();

        }

        this.current=new SceneClass(this.app);

        this.app.innerHTML=this.current.render();

        this.current.enter();

    }

}