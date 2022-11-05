import { DataType } from '../helper/types';
import AppLoader from './appLoader';

enum Endpoint {
    sources = 'sources',
    everything = 'everything',
}

class AppController extends AppLoader {
    getSources(callback: (data: DataType) => void) {
        super.getResp(
            {
                endpoint: Endpoint.sources,
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: DataType) => void) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: Endpoint.everything,
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
