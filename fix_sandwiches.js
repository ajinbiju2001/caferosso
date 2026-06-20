const fs = require('fs');
let html = fs.readFileSync('menu/index.html', 'utf8');

const replacements = {
    "https://upload.wikimedia.org/wikipedia/commons/e/eb/Chicken_sandwich.jpg": "https://loremflickr.com/400/400/sandwich?lock=1",
    "https://upload.wikimedia.org/wikipedia/commons/6/63/Grilled_cheese_sandwich.jpg": "https://loremflickr.com/400/400/sandwich?lock=2",
    "https://upload.wikimedia.org/wikipedia/commons/e/ea/Steak_sandwich.jpg": "https://loremflickr.com/400/400/sandwich?lock=3",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Philly_Cheesesteak.jpg": "https://loremflickr.com/400/400/sandwich?lock=4",
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Veggie_Sandwich.jpg": "https://loremflickr.com/400/400/sandwich?lock=5",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Eggplant_Salad.jpg": "https://loremflickr.com/400/400/salad?lock=6"
};

for (const [oldUrl, newUrl] of Object.entries(replacements)) {
    html = html.replace(oldUrl, newUrl);
}

fs.writeFileSync('menu/index.html', html);
console.log('Fixed missing sandwiches and salad!');
