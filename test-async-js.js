const startingTime = new Date().getTime();
setTimeout(() => console.log((new Date().getTime() - startingTime) + '--------->A'), 0);
console.log((new Date().getTime() - startingTime) + '--------->B');
setTimeout(() => console.log((new Date().getTime() - startingTime) + '--------->C'), 100);
setTimeout(() => console.log((new Date().getTime() - startingTime) + '--------->D'), 0);
wait(500);
console.log((new Date().getTime() - startingTime) + '--------->E');


function wait(timeInMillis) {
    let endTime = new Date().getTime() + timeInMillis;
    while (new Date().getTime() < endTime) {}
}