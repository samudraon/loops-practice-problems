var line1 = ('I am going to be')
var line2 = ('an awesome web developer')

var completeLine = line1 + ' ' + line2;
// console.log(completeLine);

var display = 1;
while (display <= 39) {
    // console.log('Ajke amr mon bhalo nei');
    display++;
}

var numbers = 58;
while (numbers <= 98) {
    // console.log(numbers);
    numbers++;
}

var numbers = 481;
while (numbers <= 623) {
    // console.log(numbers);
    numbers += 2;
}

var topics = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'JS Variables', 'Array', 'String'];
for (var i = 0; i < topics.length; i++) {
    topic = topics[i];
    // console.log(topic);
}

var mobiles = ['Samsung', 'OnePlus', 'Xiaomi', 'Lenovo']
while (mobiles <= 3) {
    console.log(mobiles);
}


for (i = 30; i <= 86; i++) {
    if (i > 44) {
        break;
    }
    // console.log(i);
}

var price = [220, 160, 140, 190, 350, 390];
for (var i = 0; i < price.length; i++) {
    if (price[i] > 200) {
        continue;
    }
    console.log(price[i]);
}