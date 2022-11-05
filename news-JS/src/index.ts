import App from './components/app/app';
import './global.css';

const app = new App();
document.body.onload = function () {
    app.start();
};
