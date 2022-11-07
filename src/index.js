import './index.html';
import './index.scss';
import code from './img/code.png';

const imgWrap = document.querySelector('.img');
const img = new Image();
img.src = code;
img.width = 700;
imgWrap.append(img);


const mult = (a, b) => a * b;

console.log(mult(2, 4));