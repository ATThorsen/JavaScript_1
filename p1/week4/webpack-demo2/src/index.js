import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
//import Data from './data.xml';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    const btn = document.createElement('button');
    // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.appendChild(btn);

   element.appendChild(myIcon);
   //console.log(Data);
   
   return element; 
  }
  
  document.body.appendChild(component());