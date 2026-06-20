const fs = require('fs');
let html = fs.readFileSync('menu/index.html', 'utf8');

const images = {
    "hb1": "https://upload.wikimedia.org/wikipedia/commons/7/79/Smashburger_03.jpg",
    "hb2": "https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg",
    "hb3": "https://upload.wikimedia.org/wikipedia/commons/0/04/Jalapeno_Burger_%283521350776%29.jpg",
    "hb4": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Chicken_salad_sandwich_01.jpg",
    "hb5": "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bbq_tofu_burger_men%C3%BC.jpg",
    "hb6": "https://upload.wikimedia.org/wikipedia/commons/e/e0/%D7%94%D7%9E%D7%91%D7%95%D7%A8%D7%92%D7%A8_%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99.jpg",
    "ss1": "https://upload.wikimedia.org/wikipedia/commons/3/38/Arbysbeefandfries.JPG",
    "ss2": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Chicken_sandwich.jpg",
    "ss3": "https://upload.wikimedia.org/wikipedia/commons/6/63/Grilled_cheese_sandwich.jpg",
    "ss4": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Steak_sandwich.jpg",
    "ss5": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Philly_Cheesesteak.jpg",
    "ss6": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Veggie_Sandwich.jpg",
    "sp1": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cream_Mushroom_soup_2.jpg",
    "sp2": "https://upload.wikimedia.org/wikipedia/commons/2/27/Broccoli_cheddar_soup_and_grilled_cheese_sandwich.jpg",
    "sp3": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Ping_SJ_hot_%26_sour_soup.JPG",
    "sl1": "https://upload.wikimedia.org/wikipedia/commons/4/42/Flickr_sa_ku_ra_10556400--Chicken_salad.jpg",
    "sl2": "https://upload.wikimedia.org/wikipedia/commons/2/23/Caesar_salad_%282%29.jpg",
    "sl3": "https://upload.wikimedia.org/wikipedia/commons/0/05/Eggplant_Salad.jpg"
};

// We will use regex to find each item ID and replace its image string
for (let key in images) {
    let regex = new RegExp(`(id:\\s*'${key}'.*?image:\\s*')(.*?)(',)`, 's');
    html = html.replace(regex, `$1${images[key]}$3`);
}

fs.writeFileSync('menu/index.html', html);
console.log('Images applied!');
