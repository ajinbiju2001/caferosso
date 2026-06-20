const fs = require('fs');
let html = fs.readFileSync('menu/index.html', 'utf8');

const sandwichImage = "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400";
const saladImage = "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400";

html = html.replace(/https:\/\/loremflickr\.com\/400\/400\/sandwich\?lock=\d/g, sandwichImage);
html = html.replace(/https:\/\/loremflickr\.com\/400\/400\/salad\?lock=\d/g, saladImage);

fs.writeFileSync('menu/index.html', html);
console.log('Fixed crazy images!');
