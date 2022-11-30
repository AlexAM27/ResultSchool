import "../index.css";
import JS_LOGO from '../assets/js_image.png';

const header = document.createElement('h1');
header.textContent = 'I love JavaScript';

const jsImage = document.createElement('img');
jsImage.className = 'js-image';
jsImage.src = JS_LOGO;

document.body.append(header);
document.body.append(jsImage);