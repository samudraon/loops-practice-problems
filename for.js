
/* for (i = 0; i <=10; i++) {
    console.log(i);
} */

/* for even numbers */
for (i = 0; i <= 20; i += 2) {
    console.log(i);
}
/* for odd numbers */
for (i = 1; i <= 20; i += 2) {
    console.log(i);
}
for (var i = 0; i < 5; i++) {
    console.log(i);
}

var marks = [13, 14, 15, 20, 18];
for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 15) {
        continue;
    }
    console.log(marks[i]);
}