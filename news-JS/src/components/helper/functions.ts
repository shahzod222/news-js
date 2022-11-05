import Sources from '../view/sources/sources';
import { sourceType } from './types';

export function sortArray(array: sourceType[], letter: string): sourceType[] {
    const res: sourceType[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].name[0] == letter) {
            res.push(array[i]);
        }
    }
    return res;
}

export function showByAlph(sources: sourceType[]) {
    const alphBlock = document.querySelector('.alph-btns') as HTMLDivElement;
    const newsBlock = document.querySelector('.news') as HTMLDivElement;
    const buttonsBlock = document.querySelector('.buttons') as HTMLDivElement;
    const alph = 'ABCDEFGHILMNPRSTUVWXY' as string;
    const drawClass = new Sources();

    alphBlock.innerHTML = '';
    for (let i = 0; i < alph.length; i++) {
        const letter: HTMLButtonElement = document.createElement('button');
        alphBlock.append(letter);
        letter.innerHTML = alph[i];
        letter.className = 'letter';
    }

    const allLetters = document.querySelectorAll('.letter') as NodeListOf<HTMLButtonElement>;
    allLetters.forEach((e) => {
        e.addEventListener('click', () => {
            allLetters.forEach((el) => {
                el.classList.remove('activeLetter');
            });
            buttonsBlock.innerHTML = '';
            newsBlock.innerHTML = '';
            drawClass.draw(sortArray(sources, e.innerHTML));
            e.classList.add('activeLetter');
        });
    });
}
