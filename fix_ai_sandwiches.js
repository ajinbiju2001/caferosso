const fs = require('fs');
let html = fs.readFileSync('menu/index.html', 'utf8');

const replacements = {
    "ss1": "roast_beef_sourdough.png",
    "ss2": "red_pesto_pistachio_chicken.png",
    "ss3": "cheesy_chicken_pesto.png",
    "ss4": "philly_cheese_chicken.png",
    "ss5": "philly_cheese_steak.png",
    "ss6": "american_roasted_veg_sando.png"
};

for (const [id, file] of Object.entries(replacements)) {
    let regex = new RegExp(`(id:\\s*'${id}'.*?image:\\s*')(.*?)(',)`, 's');
    html = html.replace(regex, `$1${file}$3`);
}

fs.writeFileSync('menu/index.html', html);
console.log('Applied unique AI sandwich images!');
