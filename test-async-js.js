setTimeout(() => console.log('A'), 0);
console.log('B');
setTimeout(() => console.log('C'), 100);
setTimeout(() => console.log('D'), 0);
wait(500);
console.log('E');




function wait(timeInMillis) {
    let endTime = new Date().getTime() + timeInMillis;

    while (new Date().getTime() < endTime) {}
}