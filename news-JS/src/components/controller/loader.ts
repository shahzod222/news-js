import { IOptions } from '../helper/interfaces';
import { DataType } from '../helper/types';

class Loader {
    baseLink: string;
    options: IOptions;
    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint = '', options = {} },
        callback = (data: DataType) => {
            console.error('No callback for GET response', data);
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IOptions, endpoint: string): string {
        const urlOptions: IOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?` as string;
        let key: keyof typeof urlOptions;
        for (key in urlOptions) {
            url += `&${key}=${urlOptions[key]}`;
        }
        return url.replace('&', '');
    }

    load(method: string, endpoint: string, callback: { (data: DataType): void }, options: IOptions) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: DataType) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
