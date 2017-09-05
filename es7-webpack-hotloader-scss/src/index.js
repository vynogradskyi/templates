import _ from 'lodash';
import styles from './assets/styles/app.scss';

function component() {
    const element = document.createElement('div');

    let x = [1,2,3,4];
    let k = [...x, 5];


    element.innerHTML = k;

    return element;
}

document.body.appendChild(component());