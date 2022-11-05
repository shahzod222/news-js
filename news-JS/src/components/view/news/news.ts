import { URLs } from '../../helper/interfaces';
import { articleType, noNullDiv, noNullLi, noNullHeading, noNullP, noNullA } from '../../helper/types';
import './news.css';

class News {
    draw(data: articleType[]) {
        const news = data.length >= 10 ? data.filter((_item: articleType, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: articleType, idx: number) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const newsItem = newsClone.querySelector('.news__item') as noNullDiv;
            const newsMetsPhoto = newsClone.querySelector('.news__meta-photo') as noNullDiv;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as noNullLi;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as noNullLi;
            const newsDescTitle = newsClone.querySelector('.news__description-title') as noNullHeading;
            const newsDescSrc = newsClone.querySelector('.news__description-source') as noNullHeading;
            const newsDescContent = newsClone.querySelector('.news__description-content') as noNullP;
            const newsRM = newsClone.querySelector('.news__read-more a') as noNullA;
            if (idx % 2) newsItem.classList.add('alt');
            newsMetsPhoto.style.backgroundImage = `url(${item.urlToImage || URLs.urlToAltImg})`;
            newsMetaAuthor.textContent = item.author || item.source.name;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            newsDescTitle.textContent = item.title;
            newsDescSrc.textContent = item.source.name;
            newsDescContent.textContent = item.description;
            newsRM.setAttribute('href', item.url);

            fragment.append(newsClone);
        });
        const newsDiv = document.querySelector('.news') as HTMLDivElement;
        newsDiv.innerHTML = '';
        newsDiv.appendChild(fragment);
    }
}

export default News;
