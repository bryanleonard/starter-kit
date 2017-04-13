import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
// console.log(`I would pay ${courseValue} for this awesome course!`);

let el = document.querySelector('h1');
let p = document.querySelector('p');

el.innerHTML = `Bryan says hi`;
p.innerHTML = `${courseValue}`;

