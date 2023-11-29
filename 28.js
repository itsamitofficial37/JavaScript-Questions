var i, j;
loop1:
for (i = 0; i < 5; i++) {
loop2:
for (j = 0; j < 5; j++) {
if (i === 1 && j === 1) {
continue loop1;
}
console.log(`i: ${i}, j: ${j}`)
}
}
// var i, j
// loop1:
// for (i = 0; i < 5; i++) {
// loop2:
// for (j = 0; j < 5; j++) {
// if (i === 1 && j === 1) {
// break loop2;
// }
// console.log(`i: ${i}, j: ${j}`)
// }
// }
