import { sourceType } from '../../helper/types';
import './sources.css';

class Sources {
    draw(data: sourceType[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: sourceType) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const srcItemName = sourceClone.querySelector('.source__item-name') as NonNullable<HTMLElement>;
            const srcItem = sourceClone.querySelector('.source__item') as NonNullable<HTMLElement>;
            srcItemName.textContent = item.name;
            srcItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLDivElement;
        sources.append(fragment);
    }
}


export default Sources;
