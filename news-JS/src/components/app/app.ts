import AppController from '../controller/controller';
import { DataType } from '../helper/types';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as Readonly<HTMLElement>;
        sources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data: DataType) => this.view.drawNews(data))
        );
        this.controller.getSources((data: DataType) => this.view.drawSources(data));
    }
}

export default App;
