var numbers = [34, 45, 91, 67, 43, 19, 167]

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        break;
    }
    console.log(number);
}

var items = ['pen', 'notebook', 'mouse', 'keyboard'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if(item == 'mouse') {
        continue;
    }
    console.log(item);
}