import { URLs } from '../helper/interfaces';
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(URLs.apiUrl, {
            apiKey: URLs.apiKey,
        });
    }
}

export default AppLoader;
