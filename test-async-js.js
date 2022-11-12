setTimeout(() => console.log(new Date().getTime() + '--------->A'), 0);
console.log(new Date().getTime() + '--------->B');
setTimeout(() => console.log(new Date().getTime() + '--------->C'), 100);
setTimeout(() => console.log(new Date().getTime() + '--------->D'), 0);
wait(500);
console.log(new Date().getTime() + '--------->E');


function wait(timeInMillis) {
    let endTime = new Date().getTime() + timeInMillis;

    while (new Date().getTime() < endTime) {}
}